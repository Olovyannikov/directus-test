import { type ComponentProps, useState } from 'react';

import { gqlClient } from '@/services/config';
import { useAllCategoriesQuery, useAllProductsQuery, useFilteredProductsQuery } from '@/services/generated';

export const useProducts = () => {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const { data: products } = useAllProductsQuery(gqlClient);
    const { data: categories } = useAllCategoriesQuery(gqlClient);
    const { data: filtered } = useFilteredProductsQuery(
        gqlClient,
        { categories: selectedCategories },
        {
            queryKey: [selectedCategories],
        }
    );

    const getSelectedCategories: ComponentProps<'input'>['onChange'] = (e) => {
        const currentCategories = selectedCategories.map(Number);
        const currentCategory = Number(e.target.value);

        if (currentCategories.includes(currentCategory)) {
            return setSelectedCategories(currentCategories.filter((item) => item !== currentCategory));
        }

        return setSelectedCategories([...currentCategories, currentCategory]);
    };

    return {
        getSelectedCategories,
        categories,
        products: selectedCategories.length > 0 ? filtered : products,
    };
};
