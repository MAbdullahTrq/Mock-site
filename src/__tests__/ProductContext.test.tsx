import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ProductProvider, useProducts } from '../context/ProductContext';
import { MedicalProfileProvider } from '../context/MedicalProfileContext';

// Create a test component that consumes the context
const TestComponent = () => {
  const { 
    products, 
    filteredProducts, 
    recommendedProducts, 
    filterOptions,
    updateFilterOptions,
    resetFilters,
    applyFilters
  } = useProducts();

  return (
    <div>
      <h1>Product Count: {products.length}</h1>
      <h2>Filtered Count: {filteredProducts.length}</h2>
      <h3>Recommended Count: {recommendedProducts.length}</h3>
      <button onClick={() => updateFilterOptions({ priceRange: 30 })}>
        Set Price Range
      </button>
      <button onClick={applyFilters}>Apply Filters</button>
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

// Wrap component with necessary providers
const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <MedicalProfileProvider>
      <ProductProvider>
        {component}
      </ProductProvider>
    </MedicalProfileProvider>
  );
};

describe('ProductContext', () => {
  it('provides initial products data', () => {
    renderWithProviders(<TestComponent />);
    
    // Check if initial product data is loaded
    expect(screen.getByText('Product Count: 6')).toBeInTheDocument();
    expect(screen.getByText('Filtered Count: 6')).toBeInTheDocument();
  });

  it('allows filtering products by price range', () => {
    renderWithProviders(<TestComponent />);
    
    // Set price range to 30
    act(() => {
      screen.getByText('Set Price Range').click();
    });
    
    // Apply filters
    act(() => {
      screen.getByText('Apply Filters').click();
    });
    
    // Check if filtered products count is now lower (since some products cost more than 30)
    expect(screen.getByText('Filtered Count: 4')).toBeInTheDocument();
  });

  it('allows resetting filters', () => {
    renderWithProviders(<TestComponent />);
    
    // Set price range to 30
    act(() => {
      screen.getByText('Set Price Range').click();
    });
    
    // Apply filters
    act(() => {
      screen.getByText('Apply Filters').click();
    });
    
    // Reset filters
    act(() => {
      screen.getByText('Reset Filters').click();
    });
    
    // Check if filtered products count is back to original
    expect(screen.getByText('Filtered Count: 6')).toBeInTheDocument();
  });
}); 