import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';
import { PrimaryButton, Card, Badge, PillTag, Price, ComparePrice } from '../styles/components';

interface ProductCardProps {
  product: Product;
}

interface InStockProps {
  $inStock: boolean;
}

const ProductCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProductCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductType = styled(PillTag)`
  margin: 0 0 10px 0;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1.4;
`;

const ProductDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPricing = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const DiscountBadge = styled(Badge)`
  margin-left: 10px;
  background-color: var(--accent);
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  color: #FFB900;
  margin-right: 5px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`;

const RecommendedBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--accent);
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 2;
`;

const InStockIndicator = styled.div<InStockProps>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.$inStock ? 'var(--success)' : 'var(--danger)'};
  margin-left: auto;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const calculateDiscount = () => {
    if (!product.comparePrice) return null;
    const discount = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
    return discount > 0 ? discount : null;
  };

  const discount = calculateDiscount();
  
  // Generate stars based on rating
  const renderStars = () => {
    if (!product.rating) return null;
    
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`}>★</span>);
    }
    
    if (halfStar) {
      stars.push(<span key="half-star">☆</span>);
    }
    
    return stars;
  };
  
  return (
    <ProductCardContainer>
      <ProductImageWrapper>
        {product.isRecommended && <RecommendedBadge>Recommended</RecommendedBadge>}
        <ProductImage src={product.imageUrl} alt={product.title} />
      </ProductImageWrapper>
      
      <ProductContent>
        <ProductType>{product.type}</ProductType>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ProductPricing>
          <Price>${product.price.toFixed(2)}</Price>
          {product.comparePrice && (
            <ComparePrice>${product.comparePrice.toFixed(2)}</ComparePrice>
          )}
          {discount && <DiscountBadge>-{discount}%</DiscountBadge>}
        </ProductPricing>
        
        <ProductFooter>
          {product.rating && (
            <RatingContainer>
              <Stars>{renderStars()}</Stars>
              <ReviewCount>({product.reviewCount || 0})</ReviewCount>
            </RatingContainer>
          )}
          
          {product.inStock !== undefined && (
            <InStockIndicator $inStock={product.inStock}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </InStockIndicator>
          )}
        </ProductFooter>
        
        <PrimaryButton disabled={product.inStock === false}>
          Add to Cart
        </PrimaryButton>
      </ProductContent>
    </ProductCardContainer>
  );
};

export default ProductCard; 