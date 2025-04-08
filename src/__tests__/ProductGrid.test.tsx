import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../types';

// Mock ProductCard component to simplify testing
jest.mock('../components/ProductCard', () => {
  return function MockProductCard({ product }: { product: Product }) {
    return <div data-testid={`product-card-${product.id}`}>{product.title}</div>;
  };
});

describe('ProductGrid Component', () => {
  const mockProducts: Product[] = [
    {
      id: 'test-1',
      title: 'Test Product 1',
      description: 'Test description 1',
      price: 24.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Test1',
      condition: 'Test Condition',
      type: 'prescription'
    },
    {
      id: 'test-2',
      title: 'Test Product 2',
      description: 'Test description 2',
      price: 34.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Test2',
      condition: 'Test Condition',
      type: 'otc'
    }
  ];

  it('renders a grid of products', () => {
    render(<ProductGrid products={mockProducts} />);
    
    // Check if all product cards are rendered
    expect(screen.getByTestId('product-card-test-1')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-test-2')).toBeInTheDocument();
    
    // Check if product titles are rendered
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
  });

  it('displays empty message when no products are provided', () => {
    const emptyMessage = 'Custom empty message';
    render(<ProductGrid products={[]} emptyMessage={emptyMessage} />);
    
    // Check if the empty message is displayed
    expect(screen.getByText(emptyMessage)).toBeInTheDocument();
  });

  it('displays default empty message when no products and no custom message', () => {
    render(<ProductGrid products={[]} />);
    
    // Check if the default empty message is displayed
    expect(screen.getByText('No products found. Try adjusting your filters.')).toBeInTheDocument();
  });
}); 