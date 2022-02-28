import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Layout } from '../../components/layout/layout';
import { PostProps } from '../../pages/admin/posts/[slug]';

const PostPage: React.FC<PostProps> = ({ post }) => {
  const [form, setForm] = useState(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
  };
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            placeholder="Title"
            defaultValue={post.title as string}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="slug">
          <Form.Control
            type="input"
            placeholder="Slug"
            defaultValue={post.slug as string}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Control
            as="textarea"
            placeholder="Text"
            defaultValue={post.text as string}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};

export default PostPage;
