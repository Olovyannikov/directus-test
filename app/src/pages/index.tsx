import {AllPostsQuery, useAllPostsQuery} from "@/services/generated";
import {gqlClient} from "@/services/config";
import {queryClient} from "@/pages/_app";
import {dehydrate} from "@tanstack/query-core";

interface IndexPageProps {
    data: AllPostsQuery
}

export default function IndexPage({data}: IndexPageProps) {
    return (
        <ul>
            {data?.posts.map(
                post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <time>{post.status}</time>
                    </li>
                )
            )}
        </ul>
    )
}

export const getStaticProps = async () => {
    await queryClient.prefetchQuery(
        useAllPostsQuery.getKey(),
        useAllPostsQuery.fetcher(gqlClient)
    )

    return {
        props: {
            dehydrateQueries: dehydrate(queryClient),
            data: dehydrate(queryClient).queries[0].state.data
        }
    }
}