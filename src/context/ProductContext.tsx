import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, FilterOptions } from '../types';
import { useMedicalProfile } from './MedicalProfileContext';

// Sample Products Data
const initialProducts: Product[] = [
  {
    id: '1',
    title: 'MetforminXR 500mg',
    description: 'Extended release tablets for type 2 diabetes. Helps control blood sugar levels.',
    price: 24.99,
    imageUrl: 'https://via.placeholder.com/300x200?text=Metformin',
    condition: 'Diabetes',
    type: 'prescription',
    isRecommended: true
  },
  {
    id: '2',
    title: 'Lisinopril 10mg',
    description: 'ACE inhibitor for managing high blood pressure and heart failure.',
    price: 18.50,
    imageUrl: 'https://via.placeholder.com/300x200?text=Lisinopril',
    condition: 'Hypertension',
    type: 'prescription',
    isRecommended: true
  },
  {
    id: '3',
    title: 'Sumatriptan 50mg',
    description: 'Fast-acting migraine relief. Helps with pain, nausea, and sensitivity.',
    price: 32.75,
    imageUrl: 'https://via.placeholder.com/300x200?text=Sumatriptan',
    condition: 'Migraine',
    type: 'prescription',
    isRecommended: true
  },
  {
    id: '4',
    title: 'Premium Blood Glucose Monitor',
    description: 'Digital blood glucose monitoring system with smartphone connectivity.',
    price: 79.99,
    imageUrl: 'https://via.placeholder.com/300x200?text=Blood+Glucose+Monitor',
    condition: 'Diabetes',
    type: 'equipment'
  },
  {
    id: '5',
    title: 'Digital Blood Pressure Monitor',
    description: 'Accurate and easy-to-use digital blood pressure monitoring system.',
    price: 54.99,
    imageUrl: 'https://via.placeholder.com/300x200?text=Blood+Pressure+Monitor',
    condition: 'Hypertension',
    type: 'equipment'
  },
  {
    id: '6',
    title: 'Vitamin D3 5000 IU',
    description: 'Essential for calcium absorption, immune function and overall health.',
    price: 15.99,
    imageUrl: 'https://via.placeholder.com/300x200?text=Vitamin+D',
    condition: 'General Health',
    type: 'supplements'
  }
];

// Default Filter Options
const initialFilterOptions: FilterOptions = {
  selectedConditions: [],
  priceRange: 100,
  productTypes: []
};

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  recommendedProducts: Product[];
  filterOptions: FilterOptions;
  updateFilterOptions: (options: Partial<FilterOptions>) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(initialFilterOptions);
  
  const { profile, settings } = useMedicalProfile();

  // Update filters
  const updateFilterOptions = (options: Partial<FilterOptions>) => {
    setFilterOptions(prev => ({ ...prev, ...options }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilterOptions(initialFilterOptions);
    setFilteredProducts(products);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];

    // Filter by condition
    if (filterOptions.selectedConditions.length > 0) {
      filtered = filtered.filter(product => 
        filterOptions.selectedConditions.some(condition => 
          product.condition.toLowerCase().includes(condition.toLowerCase())
        )
      );
    }

    // Filter by type
    if (filterOptions.productTypes.length > 0) {
      filtered = filtered.filter(product => 
        filterOptions.productTypes.includes(product.type)
      );
    }

    // Filter by price
    filtered = filtered.filter(product => product.price <= filterOptions.priceRange);

    setFilteredProducts(filtered);
  };

  // Set recommended products based on user's medical conditions
  useEffect(() => {
    if (settings.shareConditions) {
      const userConditions = profile.conditions.map(c => c.name.toLowerCase());
      const recommended = products.filter(product => 
        userConditions.some(condition => 
          product.condition.toLowerCase().includes(condition.toLowerCase())
        )
      );
      setRecommendedProducts(recommended);
    } else {
      setRecommendedProducts([]);
    }
  }, [profile.conditions, products, settings.shareConditions]);

  // Initialize filters based on user's medical conditions if setting is enabled
  useEffect(() => {
    if (settings.shareConditions) {
      const conditionNames = profile.conditions.map(c => 
        c.name.toLowerCase().includes('type 2 diabetes') ? 'diabetes' : 
        c.name.toLowerCase()
      );
      
      setFilterOptions(prev => ({
        ...prev,
        selectedConditions: conditionNames
      }));
    }
  }, [profile.conditions, settings.shareConditions]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        recommendedProducts,
        filterOptions,
        updateFilterOptions,
        resetFilters,
        applyFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};