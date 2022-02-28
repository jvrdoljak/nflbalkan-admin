import { gql } from '@apollo/client';

export const EDIT_POST = gql`
  mutation EditPost($post: PostInput!) {
    results: editPost(post: $post) {
      post {
        id
        slug
        title
        text
      }
    }
  }
`;
