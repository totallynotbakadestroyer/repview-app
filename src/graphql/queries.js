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
