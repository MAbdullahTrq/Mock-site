import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../styles/components';

const ConsultationContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 30px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const ComingSoonMessage = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const ComingSoonTitle = styled.h2`
  font-size: 24px;
  color: var(--primary);
  margin-bottom: 20px;
`;

const ComingSoonText = styled.p`
  color: var(--text-secondary);
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ConsultationPage: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Online Consultations</SectionTitle>
      <SectionSubtitle>Connect with healthcare professionals from the comfort of your home</SectionSubtitle>
      
      <ConsultationContainer>
        <ComingSoonMessage>
          <ComingSoonTitle>Coming Soon!</ComingSoonTitle>
          <ComingSoonText>
            We're currently working on bringing you the ability to schedule online consultations 
            with healthcare professionals. This feature will allow you to get personalized advice, 
            prescriptions, and follow-ups without leaving your home.
          </ComingSoonText>
        </ComingSoonMessage>
      </ConsultationContainer>
    </Section>
  );
};

export default ConsultationPage; 