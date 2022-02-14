import { gql } from '@apollo/client';

export const GET_POST_BY_SLUG = gql`
  query GetPost($slug: String!) {
    results: getPost(slug: $slug) {
      post {
        id
        slug
        title
        text
      }
    }
  }
`;
