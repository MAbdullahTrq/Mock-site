import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../styles/components';

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(135deg, #e8f5f9 0%, #d5effc 100%);
  padding: 60px 0;
  position: relative;
  overflow: hidden;
`;

const HeroBanner = styled.div`
  position: relative;
  border-top: 5px solid #5a1ab9;
`;

const HeroTag = styled.div`
  background-color: #5a1ab9;
  color: white;
  display: inline-block;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0 0 5px 5px;
  margin-bottom: 20px;
`;

const HeroContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroTextContent = styled.div``;

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    max-width: 450px;
    display: block;
    margin: 0 auto;
  }
  
  @media (max-width: 992px) {
    img {
      max-width: 300px;
    }
  }
`;

const PromotionsSection = styled.section`
  padding: 60px 0;
`;

const PromotionsHeader = styled.div`
  margin-bottom: 40px;
`;

const PromotionsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
`;

const PromotionsSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface PromotionCardProps {
  bgColor?: string;
}

const PromotionCard = styled.div<PromotionCardProps>`
  background-color: ${props => props.bgColor || '#F9E9E7'};
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const PromotionCardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 250px;
`;

const PromotionImage = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PromotionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const PurpleButton = styled(PrimaryButton)`
  background-color: #5a1ab9;
  
  &:hover {
    background-color: #4a15a9;
  }
`;

const BridgeSection = styled.section`
  padding: 60px 0;
  text-align: center;
  max-width: var(--container-width);
  margin: 0 auto;
`;

const BridgeTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
`;

const BridgeImage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  
  img {
    width: 100%;
  }
`;

const SolutionsSection = styled.section`
  padding: 60px 0;
  background-color: #f5f7fa;
`;

const SolutionsContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionsContent = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const SolutionsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const SolutionsText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const SolutionsFeatures = styled.div``;

const FeatureList = styled.div`
  margin-bottom: 30px;
`;

const FeatureItem = styled.div`
  padding: 10px 15px;
  background-color: #5a1ab9;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const CareSection = styled.section`
  padding: 60px 0;
  background-color: #FFE5E2;
`;

const CareContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const CareContent = styled.div`
  @media (max-width: 992px) {
    text-align: center;
    order: 2;
  }
`;

const CareImage = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
  
  img {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
`;

const CareTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const CareText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const DealsSection = styled.section`
  padding: 60px 0;
`;

const DealsHeader = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const DealsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

const DealsControls = styled.div`
  display: flex;
  gap: 10px;
`;

interface DealsControlProps {
  active?: boolean;
}

const DealsControl = styled.button<DealsControlProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#5a1ab9' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#4a15a9' : '#e0e0e0'};
  }
`;

const StatsSection = styled.section`
  padding: 60px 0;
  background-color: #5a1ab9;
  color: white;
`;

const StatsContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatIcon = styled.div`
  margin-bottom: 15px;
  font-size: 24px;
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const StatTitle = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
`;

const TestimonialsSection = styled.section`
  padding: 60px 0;
`;

const TestimonialsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
`;

const TestimonialsGrid = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const TestimonialContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const TestimonialRole = styled.div`
  font-size: 14px;
  color: #666;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroBanner>
          <HeroContent>
            <HeroTextContent>
              <HeroTag>PRODUCTS FOR FREE</HeroTag>
              <HeroTitle>Discover Premium Solutions For A Healthier, Happier You</HeroTitle>
              <HeroSubtitle>
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </HeroSubtitle>
              <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
            </HeroTextContent>
            <HeroImage>
              <img src="https://img.freepik.com/free-photo/woman-holding-different-sizes-packages_23-2148633633.jpg" alt="Woman with packages" />
            </HeroImage>
          </HeroContent>
        </HeroBanner>
      </HeroSection>

      <PromotionsSection>
        <div className="container">
          <PromotionsHeader>
            <PromotionsTitle>Exclusive Promotions From Our Partners</PromotionsTitle>
          </PromotionsHeader>
          <PromotionsGrid>
            <PromotionCard bgColor="#E8F4FC">
              <PromotionCardContent>
                <PromotionImage>
                  <img src="https://img.freepik.com/free-photo/portrait-smiling-young-doctor-wearing-medical-coat-with-stethoscope_171337-1269.jpg" alt="Doctor" />
                </PromotionImage>
                <PromotionTitle>Health Care Products</PromotionTitle>
                <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
              </PromotionCardContent>
            </PromotionCard>
            
            <PromotionCard bgColor="#F9E9E7">
              <PromotionCardContent>
                <PromotionImage>
                  <img src="https://img.freepik.com/free-photo/male-doctor-hospital-with-stethoscope_23-2148827776.jpg" alt="Doctor" />
                </PromotionImage>
                <PromotionTitle>Beauty Care Products</PromotionTitle>
                <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
              </PromotionCardContent>
            </PromotionCard>
            
            <PromotionCard bgColor="#E8F4FC">
              <PromotionCardContent>
                <PromotionImage>
                  <img src="https://img.freepik.com/free-photo/medium-shot-nurse-with-stethoscope_23-2149270035.jpg" alt="Nurse" />
                </PromotionImage>
                <PromotionTitle>Health Care Products</PromotionTitle>
                <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
              </PromotionCardContent>
            </PromotionCard>
            
            <PromotionCard bgColor="#EBFAFF">
              <PromotionCardContent>
                <PromotionImage>
                  <img src="https://img.freepik.com/free-photo/pharmacist-standing-pharmacy-drugstore_1303-25432.jpg" alt="Pharmacist" />
                </PromotionImage>
                <PromotionTitle>Pharmacy Products</PromotionTitle>
                <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
              </PromotionCardContent>
            </PromotionCard>
          </PromotionsGrid>
        </div>
      </PromotionsSection>

      <BridgeSection>
        <BridgeTitle>We are the bridge between healthcare providers and suppliers</BridgeTitle>
        <BridgeImage>
          <img src="https://img.freepik.com/free-vector/online-doctors-concept_52683-37472.jpg" alt="Healthcare providers and suppliers" />
        </BridgeImage>
      </BridgeSection>

      <SolutionsSection>
        <SolutionsContainer>
          <SolutionsContent>
            <SolutionsTitle>Connecting Healthcare Solutions with Ease</SolutionsTitle>
            <SolutionsText>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </SolutionsText>
            <SolutionsFeatures>
              <FeatureList>
                <FeatureItem>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Browse featured brands
                </FeatureItem>
                <FeatureItem>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Access promotions or offers
                </FeatureItem>
                <FeatureItem>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Connect with suppliers directly
                </FeatureItem>
              </FeatureList>
              <PurpleButton as={Link} to="/about">Learn More</PurpleButton>
            </SolutionsFeatures>
          </SolutionsContent>
          <div>
            <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" alt="Healthcare solutions" width="100%" />
          </div>
        </SolutionsContainer>
      </SolutionsSection>

      <CareSection>
        <CareContainer>
          <CareContent>
            <CareTitle>Discover Exceptional Care for a Healthier Tomorrow</CareTitle>
            <CareText>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </CareText>
            <PurpleButton as={Link} to="/consultation">Learn More</PurpleButton>
          </CareContent>
          <CareImage>
            <img src="https://img.freepik.com/free-photo/closeup-doctor-with-stethoscope_23-2149191355.jpg" alt="Doctor with stethoscope" />
          </CareImage>
        </CareContainer>
      </CareSection>

      <DealsSection>
        <DealsHeader>
          <DealsTitle>Today Best Deals For You</DealsTitle>
          <DealsControls>
            <DealsControl active>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </DealsControl>
            <DealsControl>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </DealsControl>
          </DealsControls>
        </DealsHeader>
        <PromotionsGrid>
          <PromotionCard bgColor="#E8F4FC">
            <PromotionCardContent>
              <PromotionImage>
                <img src="https://img.freepik.com/free-photo/medium-shot-healthcare-items-arrangement_23-2149339240.jpg" alt="Health products" />
              </PromotionImage>
              <PromotionTitle>Health Care Products</PromotionTitle>
              <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
            </PromotionCardContent>
          </PromotionCard>
          
          <PromotionCard bgColor="#E8F4FC">
            <PromotionCardContent>
              <PromotionImage>
                <img src="https://img.freepik.com/free-photo/medium-shot-smiley-nurse-office_23-2149281552.jpg" alt="Nurse" />
              </PromotionImage>
              <PromotionTitle>Health Care Products</PromotionTitle>
              <PurpleButton as={Link} to="/marketplace">Shop Now</PurpleButton>
            </PromotionCardContent>
          </PromotionCard>
        </PromotionsGrid>
      </DealsSection>

      <StatsSection>
        <StatsContainer>
          <StatCard>
            <StatIcon>👥</StatIcon>
            <StatNumber>1200+</StatNumber>
            <StatTitle>Satisfied Clients</StatTitle>
          </StatCard>
          <StatCard>
            <StatIcon>📦</StatIcon>
            <StatNumber>900+</StatNumber>
            <StatTitle>Popular Products</StatTitle>
          </StatCard>
          <StatCard>
            <StatIcon>🌎</StatIcon>
            <StatNumber>200+</StatNumber>
            <StatTitle>Global Brands</StatTitle>
          </StatCard>
          <StatCard>
            <StatIcon>⭐</StatIcon>
            <StatNumber>10+</StatNumber>
            <StatTitle>Market Experience</StatTitle>
          </StatCard>
        </StatsContainer>
      </StatsSection>

      <TestimonialsSection>
        <TestimonialsTitle>What Our Customers Say!</TestimonialsTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialContent>
              "Using MedNow makes my life so much easier. From browsing to checkout - everything is so simple and efficient. Would recommend to everyone."
            </TestimonialContent>
            <TestimonialAuthor>
              <TestimonialAvatar>
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Customer" />
              </TestimonialAvatar>
              <TestimonialInfo>
                <TestimonialName>Sarah Smith</TestimonialName>
                <TestimonialRole>Patient</TestimonialRole>
              </TestimonialInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialContent>
              "Using MedNow makes my life so much easier. From browsing to checkout - everything is so simple and efficient. Would recommend to everyone."
            </TestimonialContent>
            <TestimonialAuthor>
              <TestimonialAvatar>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
              </TestimonialAvatar>
              <TestimonialInfo>
                <TestimonialName>James Wilson</TestimonialName>
                <TestimonialRole>Patient</TestimonialRole>
              </TestimonialInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialContent>
              "Using MedNow makes my life so much easier. From browsing to checkout - everything is so simple and efficient. Would recommend to everyone."
            </TestimonialContent>
            <TestimonialAuthor>
              <TestimonialAvatar>
                <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Customer" />
              </TestimonialAvatar>
              <TestimonialInfo>
                <TestimonialName>Emily Davis</TestimonialName>
                <TestimonialRole>Patient</TestimonialRole>
              </TestimonialInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>
    </>
  );
};

export default HomePage; 