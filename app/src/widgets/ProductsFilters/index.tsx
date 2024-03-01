import { type ChangeEventHandler } from 'react';

import { Checkbox } from '@/shared/ui';

import type { AllCategoriesQuery } from '@/services/generated';

interface FiltersProps {
    categories?: AllCategoriesQuery;
    getSelectedCategories?: ChangeEventHandler<HTMLInputElement>;
}

export const ProductsFilters = ({ categories, getSelectedCategories }: FiltersProps) => (
    <div className='flex items-center mt-5'>
        {categories?.categories.map((category) => (
            <Checkbox
                key={category.id}
                label={category.category_name}
                value={category.id}
                onChange={getSelectedCategories}
            />
        ))}
    </div>
);
