// Medical Condition Type
export interface MedicalCondition {
  id: string;
  name: string;
  diagnosedDate: string;
  description: string;
}

// Medication Type
export interface Medication {
  id: string;
  name: string;
  description: string;
  dosage: string;
  frequency: string;
  forCondition: string;
  image?: string;
}

// Allergy Type
export interface Allergy {
  id: string;
  name: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
  reaction: string;
}

// Product Type
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  comparePrice?: number;
  imageUrl: string;
  condition: string;
  type: 'prescription' | 'otc' | 'supplements' | 'equipment';
  isRecommended?: boolean;
  rating?: number;
  reviewCount?: number;
  vendor?: string;
  inStock?: boolean;
  discount?: number;
}

// Medical Profile Type
export interface MedicalProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  bloodType: string;
  conditions: MedicalCondition[];
  medications: Medication[];
  allergies: Allergy[];
  lastUpdated: string;
}

// User Settings Type
export interface UserSettings {
  shareConditions: boolean;
  shareMedications: boolean;
  shareAllergies: boolean;
  sharePersonalData: boolean;
}

// Filter Options Type
export interface FilterOptions {
  priceRange: number;
  selectedConditions: string[];
  productTypes: ('prescription' | 'otc' | 'supplements' | 'equipment')[];
} 