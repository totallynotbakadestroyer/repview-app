const { gql } = require("apollo-boost");
export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    language
    description
    fullName
    ownerAvatarUrl
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    endCursor
    startCursor
    totalCount
    hasNextPage
  }
`;
