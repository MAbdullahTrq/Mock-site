import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 0;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const EmptyMessage = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
`;

const ProductGrid: React.FC<ProductGridProps> = ({ products, emptyMessage = 'No products found' }) => {
  if (!products || products.length === 0) {
    return (
      <EmptyState>
        <EmptyMessage>{emptyMessage}</EmptyMessage>
      </EmptyState>
    );
  }
  
  return (
    <GridContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid; 