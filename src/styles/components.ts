import styled from 'styled-components';

// Layout Components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridSidebar = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  padding: 60px 0;
`;

// Typography
export const SectionTitle = styled.h2`
  font-size: 32px;
  color: var(--primary);
  text-align: center;
  margin-bottom: 10px;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// UI Components
export const Card = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 15px;
`;

export const CardText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 15px;
`;

export const CardFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.p`
  font-weight: bold;
  color: var(--accent);
  font-size: 18px;
  margin-bottom: 15px;
`;

// Form Components
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-primary);
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(0, 104, 179, 0.1);
  }
`;

// Button Components
export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: white;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: var(--secondary);
  color: white;
  
  &:hover {
    background-color: var(--secondary-dark);
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

// Filter Components
export const Sidebar = styled.aside`
  background-color: white;
  padding: 25px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

export const SidebarTitle = styled.h3`
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

export const FilterGroup = styled.div`
  margin-bottom: 25px;
`;

export const FilterTitle = styled.h4`
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

export const ConditionTag = styled.span`
  display: inline-block;
  background-color: var(--secondary);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

// Badge component
export const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  background-color: var(--primary-light);
  color: white;
`;

// Price components
export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
`;

export const ComparePrice = styled.span`
  font-size: 16px;
  color: var(--text-muted);
  text-decoration: line-through;
  margin-left: 8px;
`;

// Pill Tags
export const PillTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  background-color: var(--light-gray);
  color: var(--dark-gray);
  margin-right: 8px;
  margin-bottom: 8px;
`; 