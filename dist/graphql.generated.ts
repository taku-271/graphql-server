import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  join__FieldSet: { input: any; output: any; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Expense = {
  __typename?: 'Expense';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Scalars['Boolean']['output'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getUserByEmail?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  expenses: Array<Maybe<Expense>>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum Core__Purpose {
  /** `EXECUTION` features provide metadata necessary to for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

export enum Join__Graph {
  Id = 'ID',
  Ums = 'UMS'
}

export type GetExpensesByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetExpensesByEmailQuery = { __typename?: 'Query', getUserByEmail?: { __typename?: 'User', expenses: Array<{ __typename?: 'Expense', id: number, title: string, amount: number, usedAt: any } | null> } | null };


export const GetExpensesByEmailDocument = gql`
    query getExpensesByEmail($email: String!) {
  getUserByEmail(email: $email) {
    expenses {
      id
      title
      amount
      usedAt
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getExpensesByEmail(variables: GetExpensesByEmailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetExpensesByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExpensesByEmailQuery>(GetExpensesByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExpensesByEmail', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;