import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    results: getPosts {
      posts {
        id
        slug
        title
        text
      }
    }
  }
`;
