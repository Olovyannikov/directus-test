import { GraphQLClient } from 'graphql-request';

export const BASE_URL = 'http://0.0.0.0:8055/graphql';

export const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL);
