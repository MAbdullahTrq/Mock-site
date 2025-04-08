import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/ProductGrid';
import { Section, SectionTitle, SectionSubtitle, Sidebar, SidebarTitle, FilterGroup, FilterTitle, FormControl } from '../styles/components';

const MarketplaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 25px;
  margin-top: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const RangeWrapper = styled.div`
  margin-top: 5px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const FilterActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const FilterButton = styled.button`
  padding: 8px 15px;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
`;

const ApplyButton = styled(FilterButton)`
  background-color: var(--secondary);
  color: white;

  &:hover {
    background-color: #1c85d9;
  }
`;

const ResetButton = styled(FilterButton)`
  background-color: transparent;
  color: var(--dark-gray);
  border: 1px solid #ddd;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MarketplacePage: React.FC = () => {
  const { filteredProducts, filterOptions, updateFilterOptions, applyFilters, resetFilters } = useProducts();

  useEffect(() => {
    // Apply filters when component mounts
    applyFilters();
  }, [applyFilters]);

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterOptions({ priceRange: parseInt(e.target.value) });
  };

  const handleConditionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    let updatedConditions = [...filterOptions.selectedConditions];
    
    if (isChecked && !updatedConditions.includes(value)) {
      updatedConditions.push(value);
    } else if (!isChecked && updatedConditions.includes(value)) {
      updatedConditions = updatedConditions.filter(item => item !== value);
    }
    
    updateFilterOptions({ selectedConditions: updatedConditions });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'prescription' | 'otc' | 'supplements' | 'equipment';
    const isChecked = e.target.checked;
    
    let updatedTypes = [...filterOptions.productTypes];
    
    if (isChecked && !updatedTypes.includes(value)) {
      updatedTypes.push(value);
    } else if (!isChecked && updatedTypes.includes(value)) {
      updatedTypes = updatedTypes.filter(item => item !== value);
    }
    
    updateFilterOptions({ productTypes: updatedTypes });
  };

  const handleApplyFilters = () => {
    applyFilters();
  };

  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <Section>
      <SectionTitle>Medical Marketplace</SectionTitle>
      <SectionSubtitle>Browse products tailored for your health needs</SectionSubtitle>
      
      <MarketplaceContainer>
        <Sidebar>
          <SidebarTitle>Filters</SidebarTitle>
          
          <FilterGroup>
            <FilterTitle>Price Range</FilterTitle>
            <RangeWrapper>
              <FormControl 
                as="input" 
                type="range"
                min="0"
                max="200"
                step="10"
                value={filterOptions.priceRange}
                onChange={handlePriceRangeChange}
              />
              <div>${filterOptions.priceRange}</div>
            </RangeWrapper>
          </FilterGroup>
          
          <FilterGroup>
            <FilterTitle>Conditions</FilterTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="diabetes"
                  checked={filterOptions.selectedConditions.includes('diabetes')}
                  onChange={handleConditionChange}
                />
                Diabetes
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="hypertension"
                  checked={filterOptions.selectedConditions.includes('hypertension')}
                  onChange={handleConditionChange}
                />
                Hypertension
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="migraine"
                  checked={filterOptions.selectedConditions.includes('migraine')}
                  onChange={handleConditionChange}
                />
                Migraine
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterGroup>
          
          <FilterGroup>
            <FilterTitle>Product Type</FilterTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="prescription"
                  checked={filterOptions.productTypes.includes('prescription')}
                  onChange={handleTypeChange}
                />
                Prescription
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="otc"
                  checked={filterOptions.productTypes.includes('otc')}
                  onChange={handleTypeChange}
                />
                Over-the-Counter
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="supplements"
                  checked={filterOptions.productTypes.includes('supplements')}
                  onChange={handleTypeChange}
                />
                Supplements
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  value="equipment"
                  checked={filterOptions.productTypes.includes('equipment')}
                  onChange={handleTypeChange}
                />
                Medical Equipment
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterGroup>
          
          <FilterActions>
            <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
            <ResetButton onClick={handleResetFilters}>Reset</ResetButton>
          </FilterActions>
        </Sidebar>
        
        <div>
          <ProductGrid products={filteredProducts} />
        </div>
      </MarketplaceContainer>
    </Section>
  );
};

export default MarketplacePage; 