// @ts-nocheck TODO: lib error
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
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
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_by_version?: Maybe<Version_Categories>;
  posts: Array<Posts>;
  posts_aggregated: Array<Posts_Aggregated>;
  posts_by_id?: Maybe<Posts>;
  posts_by_version?: Maybe<Version_Posts>;
  product_colors: Array<Product_Colors>;
  product_colors_aggregated: Array<Product_Colors_Aggregated>;
  product_colors_by_id?: Maybe<Product_Colors>;
  product_colors_by_version?: Maybe<Version_Product_Colors>;
  product_sizes: Array<Product_Sizes>;
  product_sizes_aggregated: Array<Product_Sizes_Aggregated>;
  product_sizes_by_id?: Maybe<Product_Sizes>;
  product_sizes_by_version?: Maybe<Version_Product_Sizes>;
  products: Array<Products>;
  products_aggregated: Array<Products_Aggregated>;
  products_by_id?: Maybe<Products>;
  products_by_version?: Maybe<Version_Products>;
  products_categories: Array<Products_Categories>;
  products_categories_aggregated: Array<Products_Categories_Aggregated>;
  products_categories_by_id?: Maybe<Products_Categories>;
  products_categories_by_version?: Maybe<Version_Products_Categories>;
  products_product_colors: Array<Products_Product_Colors>;
  products_product_colors_aggregated: Array<Products_Product_Colors_Aggregated>;
  products_product_colors_by_id?: Maybe<Products_Product_Colors>;
  products_product_colors_by_version?: Maybe<Version_Products_Product_Colors>;
  products_product_sizes: Array<Products_Product_Sizes>;
  products_product_sizes_aggregated: Array<Products_Product_Sizes_Aggregated>;
  products_product_sizes_by_id?: Maybe<Products_Product_Sizes>;
  products_product_sizes_by_version?: Maybe<Version_Products_Product_Sizes>;
  products_products_categories: Array<Products_Products_Categories>;
  products_products_categories_aggregated: Array<Products_Products_Categories_Aggregated>;
  products_products_categories_by_id?: Maybe<Products_Products_Categories>;
  products_products_categories_by_version?: Maybe<Version_Products_Products_Categories>;
}


export interface QueryCategoriesArgs {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryCategories_AggregatedArgs {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryCategories_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryCategories_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
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
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryPosts_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProduct_ColorsArgs {
  filter?: InputMaybe<Product_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProduct_Colors_AggregatedArgs {
  filter?: InputMaybe<Product_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProduct_Colors_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProduct_Colors_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProduct_SizesArgs {
  filter?: InputMaybe<Product_Sizes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProduct_Sizes_AggregatedArgs {
  filter?: InputMaybe<Product_Sizes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProduct_Sizes_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProduct_Sizes_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProductsArgs {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_AggregatedArgs {
  filter?: InputMaybe<Products_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProducts_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProducts_CategoriesArgs {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Categories_AggregatedArgs {
  filter?: InputMaybe<Products_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Categories_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProducts_Categories_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProducts_Product_ColorsArgs {
  filter?: InputMaybe<Products_Product_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Product_Colors_AggregatedArgs {
  filter?: InputMaybe<Products_Product_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Product_Colors_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProducts_Product_Colors_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProducts_Product_SizesArgs {
  filter?: InputMaybe<Products_Product_Sizes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Product_Sizes_AggregatedArgs {
  filter?: InputMaybe<Products_Product_Sizes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Product_Sizes_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProducts_Product_Sizes_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}


export interface QueryProducts_Products_CategoriesArgs {
  filter?: InputMaybe<Products_Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Products_Categories_AggregatedArgs {
  filter?: InputMaybe<Products_Products_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface QueryProducts_Products_Categories_By_IdArgs {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProducts_Products_Categories_By_VersionArgs {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
}

export interface Subscription {
  categories_mutated?: Maybe<Categories_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  posts_mutated?: Maybe<Posts_Mutated>;
  product_colors_mutated?: Maybe<Product_Colors_Mutated>;
  product_sizes_mutated?: Maybe<Product_Sizes_Mutated>;
  products_categories_mutated?: Maybe<Products_Categories_Mutated>;
  products_mutated?: Maybe<Products_Mutated>;
  products_product_colors_mutated?: Maybe<Products_Product_Colors_Mutated>;
  products_product_sizes_mutated?: Maybe<Products_Product_Sizes_Mutated>;
  products_products_categories_mutated?: Maybe<Products_Products_Categories_Mutated>;
}


export interface SubscriptionCategories_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionDirectus_Files_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionPosts_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProduct_Colors_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProduct_Sizes_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProducts_Categories_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProducts_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProducts_Product_Colors_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProducts_Product_Sizes_MutatedArgs {
  event?: InputMaybe<EventEnum>;
}


export interface SubscriptionProducts_Products_Categories_MutatedArgs {
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

export interface Boolean_Filter_Operators {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface Categories {
  category_name?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Categories_Aggregated {
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
}

export interface Categories_Aggregated_Count {
  category_name?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
}

export interface Categories_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
}

export interface Categories_Filter {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  category_name?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
}

export interface Categories_Mutated {
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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

export interface Product_Colors {
  color_name?: Maybe<Scalars['String']['output']>;
  color_value?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Product_Colors_Aggregated {
  avg?: Maybe<Product_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Colors_Aggregated_Fields>;
  count?: Maybe<Product_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Product_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Product_Colors_Aggregated_Fields>;
  min?: Maybe<Product_Colors_Aggregated_Fields>;
  sum?: Maybe<Product_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Colors_Aggregated_Fields>;
}

export interface Product_Colors_Aggregated_Count {
  color_name?: Maybe<Scalars['Int']['output']>;
  color_value?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
}

export interface Product_Colors_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
}

export interface Product_Colors_Filter {
  _and?: InputMaybe<Array<InputMaybe<Product_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Colors_Filter>>>;
  color_name?: InputMaybe<String_Filter_Operators>;
  color_value?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
}

export interface Product_Colors_Mutated {
  data?: Maybe<Product_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Product_Sizes {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  long_title?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Product_Sizes_Aggregated {
  avg?: Maybe<Product_Sizes_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Sizes_Aggregated_Fields>;
  count?: Maybe<Product_Sizes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Product_Sizes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Product_Sizes_Aggregated_Fields>;
  min?: Maybe<Product_Sizes_Aggregated_Fields>;
  sum?: Maybe<Product_Sizes_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Sizes_Aggregated_Fields>;
}

export interface Product_Sizes_Aggregated_Count {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  long_title?: Maybe<Scalars['Int']['output']>;
  short_title?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
}

export interface Product_Sizes_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
}

export interface Product_Sizes_Filter {
  _and?: InputMaybe<Array<InputMaybe<Product_Sizes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Sizes_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  long_title?: InputMaybe<String_Filter_Operators>;
  short_title?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
}

export interface Product_Sizes_Mutated {
  data?: Maybe<Product_Sizes>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Products {
  available_colors?: Maybe<Array<Maybe<Products_Product_Colors>>>;
  available_colors_func?: Maybe<Count_Functions>;
  available_sizes?: Maybe<Array<Maybe<Products_Product_Sizes>>>;
  available_sizes_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  product_categories?: Maybe<Array<Maybe<Products_Categories>>>;
  product_categories_func?: Maybe<Count_Functions>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_image?: Maybe<Directus_Files>;
  product_name?: Maybe<Scalars['String']['output']>;
  show_coloes?: Maybe<Scalars['Boolean']['output']>;
  show_sizes?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}


export interface ProductsAvailable_ColorsArgs {
  filter?: InputMaybe<Products_Product_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface ProductsAvailable_SizesArgs {
  filter?: InputMaybe<Products_Product_Sizes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface ProductsProduct_CategoriesArgs {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface ProductsProduct_ImageArgs {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Products_Aggregated {
  avg?: Maybe<Products_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Aggregated_Fields>;
  count?: Maybe<Products_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Products_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Products_Aggregated_Fields>;
  min?: Maybe<Products_Aggregated_Fields>;
  sum?: Maybe<Products_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Aggregated_Fields>;
}

export interface Products_Aggregated_Count {
  available_colors?: Maybe<Scalars['Int']['output']>;
  available_sizes?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  product_categories?: Maybe<Scalars['Int']['output']>;
  product_description?: Maybe<Scalars['Int']['output']>;
  product_image?: Maybe<Scalars['Int']['output']>;
  product_name?: Maybe<Scalars['Int']['output']>;
  show_coloes?: Maybe<Scalars['Int']['output']>;
  show_sizes?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
}

export interface Products_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
}

export interface Products_Categories {
  categories_id?: Maybe<Categories>;
  id: Scalars['ID']['output'];
  products_id?: Maybe<Products>;
}


export interface Products_CategoriesCategories_IdArgs {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface Products_CategoriesProducts_IdArgs {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Products_Categories_Aggregated {
  avg?: Maybe<Products_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
  count?: Maybe<Products_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Products_Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Products_Categories_Aggregated_Fields>;
  min?: Maybe<Products_Categories_Aggregated_Fields>;
  sum?: Maybe<Products_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
}

export interface Products_Categories_Aggregated_Count {
  categories_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  products_id?: Maybe<Scalars['Int']['output']>;
}

export interface Products_Categories_Aggregated_Fields {
  categories_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  products_id?: Maybe<Scalars['Float']['output']>;
}

export interface Products_Categories_Filter {
  _and?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  products_id?: InputMaybe<Products_Filter>;
}

export interface Products_Categories_Mutated {
  data?: Maybe<Products_Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Products_Filter {
  _and?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  available_colors?: InputMaybe<Products_Product_Colors_Filter>;
  available_colors_func?: InputMaybe<Count_Function_Filter_Operators>;
  available_sizes?: InputMaybe<Products_Product_Sizes_Filter>;
  available_sizes_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  price?: InputMaybe<String_Filter_Operators>;
  product_categories?: InputMaybe<Products_Categories_Filter>;
  product_categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  product_description?: InputMaybe<String_Filter_Operators>;
  product_image?: InputMaybe<Directus_Files_Filter>;
  product_name?: InputMaybe<String_Filter_Operators>;
  show_coloes?: InputMaybe<Boolean_Filter_Operators>;
  show_sizes?: InputMaybe<Boolean_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
}

export interface Products_Mutated {
  data?: Maybe<Products>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Products_Product_Colors {
  id: Scalars['ID']['output'];
  product_colors_id?: Maybe<Product_Colors>;
  products_id?: Maybe<Products>;
}


export interface Products_Product_ColorsProduct_Colors_IdArgs {
  filter?: InputMaybe<Product_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface Products_Product_ColorsProducts_IdArgs {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Products_Product_Colors_Aggregated {
  avg?: Maybe<Products_Product_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Product_Colors_Aggregated_Fields>;
  count?: Maybe<Products_Product_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Products_Product_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Products_Product_Colors_Aggregated_Fields>;
  min?: Maybe<Products_Product_Colors_Aggregated_Fields>;
  sum?: Maybe<Products_Product_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Product_Colors_Aggregated_Fields>;
}

export interface Products_Product_Colors_Aggregated_Count {
  id?: Maybe<Scalars['Int']['output']>;
  product_colors_id?: Maybe<Scalars['Int']['output']>;
  products_id?: Maybe<Scalars['Int']['output']>;
}

export interface Products_Product_Colors_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  product_colors_id?: Maybe<Scalars['Float']['output']>;
  products_id?: Maybe<Scalars['Float']['output']>;
}

export interface Products_Product_Colors_Filter {
  _and?: InputMaybe<Array<InputMaybe<Products_Product_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Product_Colors_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  product_colors_id?: InputMaybe<Product_Colors_Filter>;
  products_id?: InputMaybe<Products_Filter>;
}

export interface Products_Product_Colors_Mutated {
  data?: Maybe<Products_Product_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Products_Product_Sizes {
  id: Scalars['ID']['output'];
  product_sizes_id?: Maybe<Product_Sizes>;
  products_id?: Maybe<Products>;
}


export interface Products_Product_SizesProduct_Sizes_IdArgs {
  filter?: InputMaybe<Product_Sizes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface Products_Product_SizesProducts_IdArgs {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Products_Product_Sizes_Aggregated {
  avg?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
  count?: Maybe<Products_Product_Sizes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Products_Product_Sizes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
  min?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
  sum?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Product_Sizes_Aggregated_Fields>;
}

export interface Products_Product_Sizes_Aggregated_Count {
  id?: Maybe<Scalars['Int']['output']>;
  product_sizes_id?: Maybe<Scalars['Int']['output']>;
  products_id?: Maybe<Scalars['Int']['output']>;
}

export interface Products_Product_Sizes_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  product_sizes_id?: Maybe<Scalars['Float']['output']>;
  products_id?: Maybe<Scalars['Float']['output']>;
}

export interface Products_Product_Sizes_Filter {
  _and?: InputMaybe<Array<InputMaybe<Products_Product_Sizes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Product_Sizes_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  product_sizes_id?: InputMaybe<Product_Sizes_Filter>;
  products_id?: InputMaybe<Products_Filter>;
}

export interface Products_Product_Sizes_Mutated {
  data?: Maybe<Products_Product_Sizes>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
}

export interface Products_Products_Categories {
  id: Scalars['ID']['output'];
  products_categories_id?: Maybe<Products_Categories>;
  products_id?: Maybe<Products>;
}


export interface Products_Products_CategoriesProducts_Categories_IdArgs {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface Products_Products_CategoriesProducts_IdArgs {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Products_Products_Categories_Aggregated {
  avg?: Maybe<Products_Products_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Products_Categories_Aggregated_Fields>;
  count?: Maybe<Products_Products_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Products_Products_Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Products_Products_Categories_Aggregated_Fields>;
  min?: Maybe<Products_Products_Categories_Aggregated_Fields>;
  sum?: Maybe<Products_Products_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Products_Categories_Aggregated_Fields>;
}

export interface Products_Products_Categories_Aggregated_Count {
  id?: Maybe<Scalars['Int']['output']>;
  products_categories_id?: Maybe<Scalars['Int']['output']>;
  products_id?: Maybe<Scalars['Int']['output']>;
}

export interface Products_Products_Categories_Aggregated_Fields {
  id?: Maybe<Scalars['Float']['output']>;
  products_categories_id?: Maybe<Scalars['Float']['output']>;
  products_id?: Maybe<Scalars['Float']['output']>;
}

export interface Products_Products_Categories_Filter {
  _and?: InputMaybe<Array<InputMaybe<Products_Products_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Products_Categories_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  products_categories_id?: InputMaybe<Products_Categories_Filter>;
  products_id?: InputMaybe<Products_Filter>;
}

export interface Products_Products_Categories_Mutated {
  data?: Maybe<Products_Products_Categories>;
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

export interface Version_Categories {
  category_name?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Version_Posts {
  body?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  featured_image?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Version_Product_Colors {
  color_name?: Maybe<Scalars['String']['output']>;
  color_value?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Version_Product_Sizes {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  long_title?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Version_Products {
  available_colors?: Maybe<Scalars['JSON']['output']>;
  available_colors_func?: Maybe<Count_Functions>;
  available_sizes?: Maybe<Scalars['JSON']['output']>;
  available_sizes_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  product_categories?: Maybe<Scalars['JSON']['output']>;
  product_categories_func?: Maybe<Count_Functions>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_image?: Maybe<Scalars['JSON']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  show_coloes?: Maybe<Scalars['Boolean']['output']>;
  show_sizes?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
}

export interface Version_Products_Categories {
  categories_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  products_id?: Maybe<Scalars['JSON']['output']>;
}

export interface Version_Products_Product_Colors {
  id: Scalars['ID']['output'];
  product_colors_id?: Maybe<Scalars['JSON']['output']>;
  products_id?: Maybe<Scalars['JSON']['output']>;
}

export interface Version_Products_Product_Sizes {
  id: Scalars['ID']['output'];
  product_sizes_id?: Maybe<Scalars['JSON']['output']>;
  products_id?: Maybe<Scalars['JSON']['output']>;
}

export interface Version_Products_Products_Categories {
  id: Scalars['ID']['output'];
  products_categories_id?: Maybe<Scalars['JSON']['output']>;
  products_id?: Maybe<Scalars['JSON']['output']>;
}

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { posts: Array<{ id: string, slug?: string | null, body?: string | null, title?: string | null, status?: string | null, featured_image?: { id: string } | null }> };

export type GetProductQueryVariables = Exact<{
  product_slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductQuery = { products: Array<{ id: string, slug?: string | null, product_name?: string | null, price?: string | null, show_coloes?: boolean | null, show_sizes?: boolean | null, product_image?: { id: string } | null, available_colors?: Array<{ product_colors_id?: { id: string, color_value?: string | null, color_name?: string | null } | null } | null> | null, available_sizes?: Array<{ product_sizes_id?: { id: string, long_title?: string | null, short_title?: string | null } | null } | null> | null, product_categories?: Array<{ categories_id?: { id: string, category_name?: string | null, slug?: string | null } | null } | null> | null }> };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { products: Array<{ id: string, price?: string | null, slug?: string | null, product_name?: string | null, product_image?: { id: string } | null, product_categories?: Array<{ categories_id?: { id: string, category_name?: string | null, slug?: string | null } | null } | null> | null }> };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { categories: Array<{ id: string, category_name?: string | null }> };

export type FilteredProductsQueryVariables = Exact<{
  categories?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>> | InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>;
}>;


export type FilteredProductsQuery = { products: Array<{ id: string, product_name?: string | null, price?: string | null, slug?: string | null, product_image?: { id: string } | null, product_categories?: Array<{ categories_id?: { id: string, category_name?: string | null, slug?: string | null } | null } | null> | null }> };



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
    ) => {
    
    return useQuery<AllPostsQuery, TError, TData>(
      variables === undefined ? ['allPosts'] : ['allPosts', variables],
      fetcher<AllPostsQuery, AllPostsQueryVariables>(client, AllPostsDocument, variables, headers),
      options
    )};

useAllPostsQuery.getKey = (variables?: AllPostsQueryVariables) => variables === undefined ? ['allPosts'] : ['allPosts', variables];


useAllPostsQuery.fetcher = (client: GraphQLClient, variables?: AllPostsQueryVariables, headers?: RequestInit['headers']) => fetcher<AllPostsQuery, AllPostsQueryVariables>(client, AllPostsDocument, variables, headers);

export const GetProductDocument = `
    query getProduct($product_slug: String) {
  products(filter: {slug: {_eq: $product_slug}}) {
    id
    slug
    product_name
    price
    product_image {
      id
    }
    available_colors {
      product_colors_id {
        id
        color_value
        color_name
      }
    }
    available_sizes {
      product_sizes_id {
        id
        long_title
        short_title
      }
    }
    show_coloes
    show_sizes
    product_categories {
      categories_id {
        id
        category_name
        slug
      }
    }
  }
}
    `;

export const useGetProductQuery = <
      TData = GetProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetProductQueryVariables,
      options?: UseQueryOptions<GetProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetProductQuery, TError, TData>(
      variables === undefined ? ['getProduct'] : ['getProduct', variables],
      fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers),
      options
    )};

useGetProductQuery.getKey = (variables?: GetProductQueryVariables) => variables === undefined ? ['getProduct'] : ['getProduct', variables];


useGetProductQuery.fetcher = (client: GraphQLClient, variables?: GetProductQueryVariables, headers?: RequestInit['headers']) => fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers);

export const AllProductsDocument = `
    query allProducts {
  products {
    id
    price
    slug
    product_name
    product_image {
      id
    }
    product_categories {
      categories_id {
        id
        category_name
        slug
      }
    }
  }
}
    `;

export const useAllProductsQuery = <
      TData = AllProductsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllProductsQueryVariables,
      options?: UseQueryOptions<AllProductsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<AllProductsQuery, TError, TData>(
      variables === undefined ? ['allProducts'] : ['allProducts', variables],
      fetcher<AllProductsQuery, AllProductsQueryVariables>(client, AllProductsDocument, variables, headers),
      options
    )};

useAllProductsQuery.getKey = (variables?: AllProductsQueryVariables) => variables === undefined ? ['allProducts'] : ['allProducts', variables];


useAllProductsQuery.fetcher = (client: GraphQLClient, variables?: AllProductsQueryVariables, headers?: RequestInit['headers']) => fetcher<AllProductsQuery, AllProductsQueryVariables>(client, AllProductsDocument, variables, headers);

export const AllCategoriesDocument = `
    query allCategories {
  categories {
    id
    category_name
  }
}
    `;

export const useAllCategoriesQuery = <
      TData = AllCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllCategoriesQueryVariables,
      options?: UseQueryOptions<AllCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<AllCategoriesQuery, TError, TData>(
      variables === undefined ? ['allCategories'] : ['allCategories', variables],
      fetcher<AllCategoriesQuery, AllCategoriesQueryVariables>(client, AllCategoriesDocument, variables, headers),
      options
    )};

useAllCategoriesQuery.getKey = (variables?: AllCategoriesQueryVariables) => variables === undefined ? ['allCategories'] : ['allCategories', variables];


useAllCategoriesQuery.fetcher = (client: GraphQLClient, variables?: AllCategoriesQueryVariables, headers?: RequestInit['headers']) => fetcher<AllCategoriesQuery, AllCategoriesQueryVariables>(client, AllCategoriesDocument, variables, headers);

export const FilteredProductsDocument = `
    query filteredProducts($categories: [GraphQLStringOrFloat]) {
  products(
    filter: {product_categories: {categories_id: {id: {_in: $categories}}}}
  ) {
    id
    product_name
    price
    slug
    product_image {
      id
    }
    product_categories {
      categories_id {
        id
        category_name
        slug
      }
    }
  }
}
    `;

export const useFilteredProductsQuery = <
      TData = FilteredProductsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FilteredProductsQueryVariables,
      options?: UseQueryOptions<FilteredProductsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<FilteredProductsQuery, TError, TData>(
      variables === undefined ? ['filteredProducts'] : ['filteredProducts', variables],
      fetcher<FilteredProductsQuery, FilteredProductsQueryVariables>(client, FilteredProductsDocument, variables, headers),
      options
    )};

useFilteredProductsQuery.getKey = (variables?: FilteredProductsQueryVariables) => variables === undefined ? ['filteredProducts'] : ['filteredProducts', variables];


useFilteredProductsQuery.fetcher = (client: GraphQLClient, variables?: FilteredProductsQueryVariables, headers?: RequestInit['headers']) => fetcher<FilteredProductsQuery, FilteredProductsQueryVariables>(client, FilteredProductsDocument, variables, headers);
