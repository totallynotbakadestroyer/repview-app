import { gql } from "apollo-boost";
import { REPOSITORY_INFO } from "./fragments.js";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query findRepositoryById($idToSearch: ID!) {
    repository(id: $idToSearch) {
      ...RepositoryInfo
      url
    }
  }
  ${REPOSITORY_INFO}
`;
