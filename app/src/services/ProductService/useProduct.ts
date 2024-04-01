import { gqlClient } from '@/services/config';
import { useGetProductQuery } from '@/services/generated';

export const useProduct = ({ slug }: { slug: string }) => {
    const { data: product } = useGetProductQuery(gqlClient, {
        product_slug: slug,
    });

    return {
        product: product?.products[0],
    };
};
