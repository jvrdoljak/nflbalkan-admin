import { NextPage } from 'next';
import { Post } from '.';
import client from '../../../../apollo-client';
import { GET_POST_BY_SLUG } from '../../../queries/get-post-by-slug';
import PostPage from '../../../views/posts/post';

export interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return <PostPage post={post} />;
};

export default Post;

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: query.slug
    },
  });

  return {
    props: {
      post: data.results.post,
    },
  };
}
