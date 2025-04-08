import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

describe('ProductCard Component', () => {
  const mockProduct: Product = {
    id: 'test-1',
    title: 'Test Product',
    description: 'Test description',
    price: 24.99,
    imageUrl: 'https://via.placeholder.com/300x200?text=Test',
    condition: 'Test Condition',
    type: 'prescription',
    isRecommended: true,
    rating: 4.5,
    reviewCount: 32,
    vendor: 'Test Vendor',
    inStock: true,
    discount: 10
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check if title, description, and price are displayed
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$24.99')).toBeInTheDocument();
    
    // Check if condition and type are displayed
    expect(screen.getByText('Test Condition')).toBeInTheDocument();
    expect(screen.getByText('Prescription')).toBeInTheDocument();
    
    // Check if recommended badge is displayed
    expect(screen.getByText('Recommended')).toBeInTheDocument();
    
    // Check if image is displayed with correct attributes
    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/300x200?text=Test');
  });

  it('changes button text when clicked', () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check initial button text
    const button = screen.getByText('Add to Cart');
    expect(button).toBeInTheDocument();
    
    // Click the button and check if text changes
    fireEvent.click(button);
    expect(screen.getByText('Added ✓')).toBeInTheDocument();
    
    // Wait for the button to revert back (would need to use jest timers in a more comprehensive test)
  });
  
  it('does not display a recommended badge for non-recommended products', () => {
    const nonRecommendedProduct = { ...mockProduct, isRecommended: false };
    render(<ProductCard product={nonRecommendedProduct} />);
    
    // Check that the recommended badge is not present
    expect(screen.queryByText('Recommended')).not.toBeInTheDocument();
  });
}); 