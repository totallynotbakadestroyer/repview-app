import { gql } from "apollo-boost";
import { PAGE_INFO, REPOSITORY_INFO, REVIEW_INFO } from "./fragments.js";

export const GET_REPOSITORIES = gql`
  query getAllRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${REPOSITORY_INFO}
  ${PAGE_INFO}
`;

export const AUTHORIZED_USER = gql`
  query getUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    authorizedUser {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewInfo
            repository {
              id
              fullName
              
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${REVIEW_INFO}
  ${PAGE_INFO}
`;

export const GET_SINGLE_REPOSITORY = gql`
  query findRepositoryById($idToSearch: ID!, $first: Int, $after: String) {
    repository(id: $idToSearch) {
      ...RepositoryInfo
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewInfo
          }
          cursor
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${PAGE_INFO}
  ${REPOSITORY_INFO}
  ${REVIEW_INFO}
`;
