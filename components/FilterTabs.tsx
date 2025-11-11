'use client';

import { useState } from 'react';

interface FilterTabsProps {
  categories: string[];
  onFilterChange?: (category: string) => void;
}

export default function FilterTabs({ categories, onFilterChange }: FilterTabsProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (onFilterChange) {
      onFilterChange(category);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-[30px] items-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`py-2 md:py-[10px] text-lg md:text-xl lg:text-[25px] font-normal transition-all ${
            activeCategory === category
              ? 'text-black border-b-2 border-black'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
