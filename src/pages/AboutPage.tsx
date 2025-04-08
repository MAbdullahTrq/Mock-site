import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../styles/components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
`;

const ContentSection = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  margin-bottom: 30px;
`;

const SectionHeading = styled.h3`
  color: var(--primary);
  margin-bottom: 20px;
  font-size: 22px;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: var(--light-gray);
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: var(--primary);
`;

const TeamMemberName = styled.h4`
  color: var(--primary);
  margin-bottom: 5px;
`;

const TeamMemberRole = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
`;

const AboutPage: React.FC = () => {
  return (
    <Section>
      <SectionTitle>About ProviderNow</SectionTitle>
      <SectionSubtitle>Learn more about our mission, vision, and team</SectionSubtitle>
      
      <AboutContainer>
        <ContentSection>
          <SectionHeading>Our Mission</SectionHeading>
          <Paragraph>
            At ProviderNow, our mission is to revolutionize healthcare accessibility by connecting 
            patients with personalized medical products and services. We believe that healthcare 
            should be tailored to each individual's unique needs, and we're committed to making 
            this vision a reality through our innovative marketplace platform.
          </Paragraph>
          <Paragraph>
            We strive to empower patients by giving them control over their healthcare journey, 
            providing them with the information, products, and connections they need to manage 
            their health effectively.
          </Paragraph>
        </ContentSection>
        
        <ContentSection>
          <SectionHeading>Our Vision</SectionHeading>
          <Paragraph>
            We envision a future where healthcare is truly personalized, accessible, and efficient. 
            A world where patients can easily find and purchase the medical products they need, 
            connect with healthcare providers from the comfort of their homes, and manage their 
            health with confidence.
          </Paragraph>
          <Paragraph>
            ProviderNow is committed to making this vision a reality by leveraging technology 
            to bridge the gap between patients, healthcare providers, and medical product suppliers.
          </Paragraph>
        </ContentSection>
        
        <ContentSection>
          <SectionHeading>Our Team</SectionHeading>
          <Paragraph>
            Our team consists of passionate healthcare professionals, technology experts, and 
            business leaders united by a common goal: to transform the healthcare experience for 
            patients worldwide.
          </Paragraph>
          
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage>JD</TeamMemberImage>
              <TeamMemberName>Jane Doe</TeamMemberName>
              <TeamMemberRole>Co-Founder & CEO</TeamMemberRole>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>JS</TeamMemberImage>
              <TeamMemberName>John Smith</TeamMemberName>
              <TeamMemberRole>Co-Founder & CTO</TeamMemberRole>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>SJ</TeamMemberImage>
              <TeamMemberName>Sarah Johnson</TeamMemberName>
              <TeamMemberRole>Chief Medical Officer</TeamMemberRole>
            </TeamMember>
          </TeamGrid>
        </ContentSection>
      </AboutContainer>
    </Section>
  );
};

export default AboutPage; 