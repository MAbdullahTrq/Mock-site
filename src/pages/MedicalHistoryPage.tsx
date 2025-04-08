import React from 'react';
import styled from 'styled-components';
import { useMedicalProfile } from '../context/MedicalProfileContext';
import { Section, SectionTitle, SectionSubtitle, Card, CardContent, CardTitle } from '../styles/components';

const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 10px;
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileDetail = styled.p`
  margin: 0;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ListCard = styled(Card)`
  height: 100%;
`;

const ListItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemTitle = styled.h4`
  color: var(--primary);
  margin-bottom: 5px;
  font-size: 16px;
`;

const ItemDetail = styled.p`
  color: var(--text-secondary);
  margin: 0;
  font-size: 14px;
`;

const LastUpdated = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  text-align: right;
  margin-top: 20px;
`;

const MedicalHistoryPage: React.FC = () => {
  const { profile } = useMedicalProfile();
  
  const initials = profile.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Section>
      <SectionTitle>Medical History</SectionTitle>
      <SectionSubtitle>Your personal health information and records</SectionSubtitle>
      
      <ProfileContainer>
        <ProfileHeader>
          <ProfileAvatar>{initials}</ProfileAvatar>
          <ProfileInfo>
            <ProfileName>{profile.name}</ProfileName>
            <ProfileDetails>
              <ProfileDetail>Age: {profile.age}</ProfileDetail>
              <ProfileDetail>Gender: {profile.gender}</ProfileDetail>
              <ProfileDetail>Height: {profile.height}</ProfileDetail>
              <ProfileDetail>Weight: {profile.weight}</ProfileDetail>
              <ProfileDetail>Blood Type: {profile.bloodType}</ProfileDetail>
            </ProfileDetails>
          </ProfileInfo>
        </ProfileHeader>
        
        <ListGrid>
          <ListCard>
            <CardContent>
              <CardTitle>Medical Conditions</CardTitle>
              {profile.conditions.map(condition => (
                <ListItem key={condition.id}>
                  <ItemTitle>{condition.name}</ItemTitle>
                  <ItemDetail>Diagnosed: {condition.diagnosedDate}</ItemDetail>
                  <ItemDetail>{condition.description}</ItemDetail>
                </ListItem>
              ))}
            </CardContent>
          </ListCard>
          
          <ListCard>
            <CardContent>
              <CardTitle>Medications</CardTitle>
              {profile.medications.map(medication => (
                <ListItem key={medication.id}>
                  <ItemTitle>{medication.name}</ItemTitle>
                  <ItemDetail>{medication.dosage}, {medication.frequency}</ItemDetail>
                  <ItemDetail>For: {medication.forCondition}</ItemDetail>
                </ListItem>
              ))}
            </CardContent>
          </ListCard>
          
          <ListCard>
            <CardContent>
              <CardTitle>Allergies</CardTitle>
              {profile.allergies.map(allergy => (
                <ListItem key={allergy.id}>
                  <ItemTitle>{allergy.name}</ItemTitle>
                  <ItemDetail>Severity: {allergy.severity}</ItemDetail>
                  <ItemDetail>Reaction: {allergy.reaction}</ItemDetail>
                </ListItem>
              ))}
            </CardContent>
          </ListCard>
        </ListGrid>
        
        <LastUpdated>Last updated: {profile.lastUpdated}</LastUpdated>
      </ProfileContainer>
    </Section>
  );
};

export default MedicalHistoryPage; 