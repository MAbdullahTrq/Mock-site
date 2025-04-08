import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #5a1ab9;
  color: white;
  padding: 50px 0 20px;
`;

const FooterContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const LogoColumn = styled(FooterColumn)`
  @media (max-width: 768px) {
    grid-column: span 2;
  }
  
  @media (max-width: 576px) {
    grid-column: span 1;
  }
`;

const FooterLogo = styled(Link)`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  
  span {
    color: #FFD700;
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background-color: #FFD700;
    color: #5a1ab9;
  }
`;

const FooterHeading = styled.h3`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
`;

const FooterLinkItem = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  transition: var(--transition);
  
  &:hover {
    color: #FFD700;
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  transition: var(--transition);
  
  &:hover {
    color: #FFD700;
  }
`;

const FooterBottom = styled.div`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const LegalLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  
  &:hover {
    color: #FFD700;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterGrid>
          <LogoColumn>
            <FooterLogo to="/">Provider<span>Now</span></FooterLogo>
            <FooterText>
              ProviderNow is your personalized healthcare marketplace designed to connect 
              you with medications, supplements, and equipment tailored to your specific 
              health needs.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
            </SocialLinks>
          </LogoColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <FooterLinkItem to="/">Home</FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/marketplace">Marketplace</FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/consultation">Consultations</FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/history">Medical History</FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/about">About Us</FooterLinkItem>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Support</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <ExternalLink href="#">FAQ</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Help Center</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Contact Us</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Feedback</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Report an Issue</ExternalLink>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Legal</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <ExternalLink href="#">Terms of Service</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Privacy Policy</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Cookie Policy</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">HIPAA Compliance</ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="#">Accessibility</ExternalLink>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} ProviderNow. All rights reserved.
          </Copyright>
          <LegalLinks>
            <LegalLink to="/terms">Terms</LegalLink>
            <LegalLink to="/privacy">Privacy</LegalLink>
            <LegalLink to="/cookies">Cookies</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 