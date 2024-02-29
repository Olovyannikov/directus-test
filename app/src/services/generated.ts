import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends {
    [key: string]: any
}>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
    return async (): Promise<TData> => client.request({
        document: query,
        variables,
        requestHeaders
    });
}

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
    Date: { input: any; output: any; }
    GraphQLBigInt: { input: any; output: any; }
    GraphQLStringOrFloat: { input: any; output: any; }
    JSON: { input: any; output: any; }
}

export enum EventEnum {
    Create = 'create',
    Delete = 'delete',
    Update = 'update'
}

export interface Query {
    posts: Array<Posts>;
    posts_aggregated: Array<Posts_Aggregated>;
    posts_by_id?: Maybe<Posts>;
    posts_by_version?: Maybe<Version_Posts>;
}


export interface QueryPostsArgs {
    filter?: InputMaybe<Posts_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryPosts_AggregatedArgs {
    filter?: InputMaybe<Posts_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryPosts_By_IdArgs {
    id: Scalars['ID']['input'];
}


export interface QueryPosts_By_VersionArgs {
    id: Scalars['ID']['input'];
    version: Scalars['String']['input'];
}

export interface Subscription {
    directus_files_mutated?: Maybe<Directus_Files_Mutated>;
    posts_mutated?: Maybe<Posts_Mutated>;
}


export interface SubscriptionDirectus_Files_MutatedArgs {
    event?: InputMaybe<EventEnum>;
}


export interface SubscriptionPosts_MutatedArgs {
    event?: InputMaybe<EventEnum>;
}

export interface Big_Int_Filter_Operators {
    _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
    _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
    _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
    _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface Count_Function_Filter_Operators {
    count?: InputMaybe<Number_Filter_Operators>;
}

export interface Count_Functions {
    count?: Maybe<Scalars['Int']['output']>;
}

export interface Date_Filter_Operators {
    _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _eq?: InputMaybe<Scalars['String']['input']>;
    _gt?: InputMaybe<Scalars['String']['input']>;
    _gte?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _lt?: InputMaybe<Scalars['String']['input']>;
    _lte?: InputMaybe<Scalars['String']['input']>;
    _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface Datetime_Function_Filter_Operators {
    day?: InputMaybe<Number_Filter_Operators>;
    hour?: InputMaybe<Number_Filter_Operators>;
    minute?: InputMaybe<Number_Filter_Operators>;
    month?: InputMaybe<Number_Filter_Operators>;
    second?: InputMaybe<Number_Filter_Operators>;
    week?: InputMaybe<Number_Filter_Operators>;
    weekday?: InputMaybe<Number_Filter_Operators>;
    year?: InputMaybe<Number_Filter_Operators>;
}

export interface Datetime_Functions {
    day?: Maybe<Scalars['Int']['output']>;
    hour?: Maybe<Scalars['Int']['output']>;
    minute?: Maybe<Scalars['Int']['output']>;
    month?: Maybe<Scalars['Int']['output']>;
    second?: Maybe<Scalars['Int']['output']>;
    week?: Maybe<Scalars['Int']['output']>;
    weekday?: Maybe<Scalars['Int']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
}

export interface Directus_Files {
    charset?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    embed?: Maybe<Scalars['String']['output']>;
    filename_disk?: Maybe<Scalars['String']['output']>;
    filename_download: Scalars['String']['output'];
    filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
    focal_point_x?: Maybe<Scalars['Int']['output']>;
    focal_point_y?: Maybe<Scalars['Int']['output']>;
    folder?: Maybe<Scalars['String']['output']>;
    height?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    location?: Maybe<Scalars['String']['output']>;
    metadata?: Maybe<Scalars['JSON']['output']>;
    metadata_func?: Maybe<Count_Functions>;
    modified_by?: Maybe<Scalars['String']['output']>;
    modified_on?: Maybe<Scalars['Date']['output']>;
    modified_on_func?: Maybe<Datetime_Functions>;
    storage: Scalars['String']['output'];
    tags?: Maybe<Scalars['JSON']['output']>;
    tags_func?: Maybe<Count_Functions>;
    title?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    uploaded_by?: Maybe<Scalars['String']['output']>;
    uploaded_on?: Maybe<Scalars['Date']['output']>;
    uploaded_on_func?: Maybe<Datetime_Functions>;
    width?: Maybe<Scalars['Int']['output']>;
}

export interface Directus_Files_Filter {
    _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    charset?: InputMaybe<String_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    duration?: InputMaybe<Number_Filter_Operators>;
    embed?: InputMaybe<String_Filter_Operators>;
    filename_disk?: InputMaybe<String_Filter_Operators>;
    filename_download?: InputMaybe<String_Filter_Operators>;
    filesize?: InputMaybe<Big_Int_Filter_Operators>;
    focal_point_x?: InputMaybe<Number_Filter_Operators>;
    focal_point_y?: InputMaybe<Number_Filter_Operators>;
    folder?: InputMaybe<String_Filter_Operators>;
    height?: InputMaybe<Number_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    location?: InputMaybe<String_Filter_Operators>;
    metadata?: InputMaybe<String_Filter_Operators>;
    metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
    modified_by?: InputMaybe<String_Filter_Operators>;
    modified_on?: InputMaybe<Date_Filter_Operators>;
    modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    storage?: InputMaybe<String_Filter_Operators>;
    tags?: InputMaybe<String_Filter_Operators>;
    tags_func?: InputMaybe<Count_Function_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
    type?: InputMaybe<String_Filter_Operators>;
    uploaded_by?: InputMaybe<String_Filter_Operators>;
    uploaded_on?: InputMaybe<Date_Filter_Operators>;
    uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    width?: InputMaybe<Number_Filter_Operators>;
}

export interface Directus_Files_Mutated {
    data?: Maybe<Directus_Files>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
}

export interface Number_Filter_Operators {
    _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface Posts {
    body?: Maybe<Scalars['String']['output']>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_updated?: Maybe<Scalars['Date']['output']>;
    date_updated_func?: Maybe<Datetime_Functions>;
    featured_image?: Maybe<Directus_Files>;
    id: Scalars['ID']['output'];
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    user_created?: Maybe<Scalars['String']['output']>;
    user_updated?: Maybe<Scalars['String']['output']>;
}


export interface PostsFeatured_ImageArgs {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Posts_Aggregated {
    avg?: Maybe<Posts_Aggregated_Fields>;
    avgDistinct?: Maybe<Posts_Aggregated_Fields>;
    count?: Maybe<Posts_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Posts_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Posts_Aggregated_Fields>;
    min?: Maybe<Posts_Aggregated_Fields>;
    sum?: Maybe<Posts_Aggregated_Fields>;
    sumDistinct?: Maybe<Posts_Aggregated_Fields>;
}

export interface Posts_Aggregated_Count {
    body?: Maybe<Scalars['Int']['output']>;
    date_created?: Maybe<Scalars['Int']['output']>;
    date_updated?: Maybe<Scalars['Int']['output']>;
    featured_image?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
    user_created?: Maybe<Scalars['Int']['output']>;
    user_updated?: Maybe<Scalars['Int']['output']>;
}

export interface Posts_Aggregated_Fields {
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
}

export interface Posts_Filter {
    _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
    body?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated?: InputMaybe<Date_Filter_Operators>;
    date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    featured_image?: InputMaybe<Directus_Files_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<String_Filter_Operators>;
    user_updated?: InputMaybe<String_Filter_Operators>;
}

export interface Posts_Mutated {
    data?: Maybe<Posts>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
}

export interface String_Filter_Operators {
    _contains?: InputMaybe<Scalars['String']['input']>;
    _empty?: InputMaybe<Scalars['Boolean']['input']>;
    _ends_with?: InputMaybe<Scalars['String']['input']>;
    _eq?: InputMaybe<Scalars['String']['input']>;
    _icontains?: InputMaybe<Scalars['String']['input']>;
    _iends_with?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _istarts_with?: InputMaybe<Scalars['String']['input']>;
    _ncontains?: InputMaybe<Scalars['String']['input']>;
    _nempty?: InputMaybe<Scalars['Boolean']['input']>;
    _nends_with?: InputMaybe<Scalars['String']['input']>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    _niends_with?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _nistarts_with?: InputMaybe<Scalars['String']['input']>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _nstarts_with?: InputMaybe<Scalars['String']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
    _starts_with?: InputMaybe<Scalars['String']['input']>;
}

export interface Version_Posts {
    body?: Maybe<Scalars['String']['output']>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_updated?: Maybe<Scalars['Date']['output']>;
    date_updated_func?: Maybe<Datetime_Functions>;
    featured_image?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    user_created?: Maybe<Scalars['String']['output']>;
    user_updated?: Maybe<Scalars['String']['output']>;
}

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = {
    posts: Array<{
        id: string,
        slug?: string | null,
        body?: string | null,
        title?: string | null,
        status?: string | null,
        featured_image?: { id: string } | null
    }>
};


export const AllPostsDocument = `
    query allPosts {
  posts {
    id
    slug
    body
    title
    status
    featured_image {
      id
    }
  }
}
    `;

export const useAllPostsQuery = <
    TData = AllPostsQuery,
    TError = unknown
>(
        client: GraphQLClient,
        variables?: AllPostsQueryVariables,
        options?: UseQueryOptions<AllPostsQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) => useQuery<AllPostsQuery, TError, TData>(
        variables === undefined ? ['allPosts'] : ['allPosts', variables],
        fetcher<AllPostsQuery, AllPostsQueryVariables>(client, AllPostsDocument, variables, headers),
        options
    );

useAllPostsQuery.getKey = (variables?: AllPostsQueryVariables) => variables === undefined ? ['allPosts'] : ['allPosts', variables];


useAllPostsQuery.fetcher = (client: GraphQLClient, variables?: AllPostsQueryVariables, headers?: RequestInit['headers']) => fetcher<AllPostsQuery, AllPostsQueryVariables>(client, AllPostsDocument, variables, headers);
