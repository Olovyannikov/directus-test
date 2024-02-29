import { dehydrate } from '@tanstack/query-core';

import { PostCard } from '@/entities';
import { queryClient } from '@/pages/_app';
import { gqlClient } from '@/services/config';
import { AllPostsQuery, useAllPostsQuery } from '@/services/generated';

interface IndexPageProps {
    posts: AllPostsQuery['posts'];
}

export default function IndexPage() {
    const { data } = useAllPostsQuery(gqlClient);

    return (
        <ul className='flex flex-col items-center py-2 max-w-2xl mx-auto'>
            {data?.posts?.map((post) => (
                <li key={post.id} className='w-full'>
                    <PostCard image={post.featured_image?.id} title={post.title} body={post.body} />
                </li>
            ))}
        </ul>
    );
}

export const getStaticProps = async () => {
    await queryClient.prefetchQuery(useAllPostsQuery.getKey(), useAllPostsQuery.fetcher(gqlClient));

    const dehydrateQueries = dehydrate(queryClient);

    return {
        props: {
            dehydrateQueries,
        },
    };
};
