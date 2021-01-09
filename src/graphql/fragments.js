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
