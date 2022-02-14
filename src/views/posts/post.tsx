import { Button, Form } from 'react-bootstrap';
import { Layout } from '../../components/layout/layout';
import { PostProps } from '../../pages/admin/posts/[slug]';

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <Layout>
      <Form>
        <Form.Group className="mb-3" controlId="titel">
          <Form.Control placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="slug">
          <Form.Control type="input" placeholder="Slug" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Control as="textarea" placeholder="Text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};

export default PostPage;
