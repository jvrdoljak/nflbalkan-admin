import { NextPage } from 'next';
import client from '../../../../apollo-client';
import { GET_POSTS } from '../../../queries/get-posts';
import { PostsPage } from '../../../views/posts/posts';

export interface Post {
  id: Number;
  slug: String;
  text: String;
  title: String;
}

export interface PostsProps {
  posts: [Post];
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return <PostsPage posts={posts} />;
};

export default Posts;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_POSTS,
    variables: {
      id: 23,
    },
  });

  return {
    props: {
      posts: data.results.posts,
    },
  };
}
