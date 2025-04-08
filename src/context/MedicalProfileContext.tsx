import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MedicalProfile, MedicalCondition, Medication, Allergy, UserSettings } from '../types';

// Sample medical profile data
const mockProfile: MedicalProfile = {
  id: '1',
  name: 'John Smith',
  age: 45,
  gender: 'Male',
  height: '5\'10"',
  weight: '185 lbs',
  bloodType: 'O+',
  conditions: [
    {
      id: '1',
      name: 'Type 2 Diabetes',
      diagnosedDate: '2018-03-15',
      description: 'Controlled with medication and diet'
    },
    {
      id: '2',
      name: 'Hypertension',
      diagnosedDate: '2019-07-22',
      description: 'High blood pressure managed with medication'
    }
  ],
  medications: [
    {
      id: '1',
      name: 'Metformin',
      description: 'Helps control blood sugar levels',
      dosage: '500mg',
      frequency: 'Twice daily',
      forCondition: 'Type 2 Diabetes'
    },
    {
      id: '2',
      name: 'Lisinopril',
      description: 'ACE inhibitor for blood pressure control',
      dosage: '10mg',
      frequency: 'Once daily',
      forCondition: 'Hypertension'
    }
  ],
  allergies: [
    {
      id: '1',
      name: 'Penicillin',
      severity: 'Moderate',
      reaction: 'Rash and itching'
    }
  ],
  lastUpdated: '2023-02-10'
};

// Default user settings
const defaultSettings: UserSettings = {
  shareConditions: true,
  shareMedications: true,
  shareAllergies: true,
  sharePersonalData: false
};

// Define our context interface
interface MedicalProfileContextType {
  profile: MedicalProfile;
  settings: UserSettings;
  updateProfile: (newProfile: Partial<MedicalProfile>) => void;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  addCondition: (condition: MedicalCondition) => void;
  removeCondition: (id: string) => void;
  addMedication: (medication: Medication) => void;
  removeMedication: (id: string) => void;
  addAllergy: (allergy: Allergy) => void;
  removeAllergy: (id: string) => void;
}

// Create the context
const MedicalProfileContext = createContext<MedicalProfileContextType | undefined>(undefined);

// Provider component
interface MedicalProfileProviderProps {
  children: ReactNode;
}

export const MedicalProfileProvider: React.FC<MedicalProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<MedicalProfile>(mockProfile);
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  
  // Update profile
  const updateProfile = (newProfile: Partial<MedicalProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...newProfile,
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Update settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Add a new medical condition
  const addCondition = (condition: MedicalCondition) => {
    setProfile(prev => ({
      ...prev,
      conditions: [...prev.conditions, condition],
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Remove a medical condition
  const removeCondition = (id: string) => {
    setProfile(prev => ({
      ...prev,
      conditions: prev.conditions.filter(condition => condition.id !== id),
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Add a new medication
  const addMedication = (medication: Medication) => {
    setProfile(prev => ({
      ...prev,
      medications: [...prev.medications, medication],
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Remove a medication
  const removeMedication = (id: string) => {
    setProfile(prev => ({
      ...prev,
      medications: prev.medications.filter(medication => medication.id !== id),
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Add a new allergy
  const addAllergy = (allergy: Allergy) => {
    setProfile(prev => ({
      ...prev,
      allergies: [...prev.allergies, allergy],
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  // Remove an allergy
  const removeAllergy = (id: string) => {
    setProfile(prev => ({
      ...prev,
      allergies: prev.allergies.filter(allergy => allergy.id !== id),
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };
  
  const value = {
    profile,
    settings,
    updateProfile,
    updateSettings,
    addCondition,
    removeCondition,
    addMedication,
    removeMedication,
    addAllergy,
    removeAllergy
  };
  
  return (
    <MedicalProfileContext.Provider value={value}>
      {children}
    </MedicalProfileContext.Provider>
  );
};

// Custom hook to use the medical profile context
export const useMedicalProfile = () => {
  const context = useContext(MedicalProfileContext);
  
  if (context === undefined) {
    throw new Error('useMedicalProfile must be used within a MedicalProfileProvider');
  }
  
  return context;
}; 