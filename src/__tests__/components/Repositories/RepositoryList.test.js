import { RepositoryListContainer } from "../../../components/Repositories/RepositoryList.jsx";
import { render } from "@testing-library/react-native";
import React from "react";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const repositoryNames = getAllByTestId("repositoryFullName");
      const descriptions = getAllByTestId("repositoryDescription");
      const languages = getAllByTestId("repositoryLanguage");
      const forksCounts = getAllByTestId("repositoryForksCount");
      const stargazersCounts = getAllByTestId("repositoryStargazersCount");
      const reviewCounts = getAllByTestId("repositoryReviewCount");
      const ratingAverages = getAllByTestId("repositoryRatingAverage");

      const numToString = (number) => {
        if (number < 1e3) return number;
        if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "k";
        if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "m";
        if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "b";
        if (number >= 1e12) return +(number / 1e12).toFixed(1) + "t";
      };

      expect(repositoryNames[0]).toHaveTextContent(
        repositories.edges[0].node.fullName
      );
      expect(repositoryNames[1]).toHaveTextContent(
        repositories.edges[1].node.fullName
      );
      expect(descriptions[0]).toHaveTextContent(
        repositories.edges[0].node.description
      );
      expect(descriptions[1]).toHaveTextContent(
        repositories.edges[1].node.description
      );
      expect(languages[0]).toHaveTextContent(
        repositories.edges[0].node.language
      );
      expect(languages[1]).toHaveTextContent(
        repositories.edges[1].node.language
      );
      expect(forksCounts[0]).toHaveTextContent(
        numToString(repositories.edges[0].node.forksCount)
      );
      expect(forksCounts[1]).toHaveTextContent(
        numToString(repositories.edges[1].node.forksCount)
      );
      expect(stargazersCounts[0]).toHaveTextContent(
        numToString(repositories.edges[0].node.stargazersCount)
      );
      expect(stargazersCounts[1]).toHaveTextContent(
        numToString(repositories.edges[1].node.stargazersCount)
      );
      expect(reviewCounts[0]).toHaveTextContent(
        numToString(repositories.edges[0].node.reviewCount)
      );
      expect(reviewCounts[1]).toHaveTextContent(
        numToString(repositories.edges[1].node.reviewCount)
      );
      expect(ratingAverages[0]).toHaveTextContent(
        numToString(repositories.edges[0].node.ratingAverage)
      );
      expect(ratingAverages[1]).toHaveTextContent(
        numToString(repositories.edges[1].node.ratingAverage)
      );
    });
  });
});
