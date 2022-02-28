import { Button, Table } from 'react-bootstrap';
import { Layout } from '../../components/layout/layout';
import { PostsProps } from '../../pages/admin/posts';

export const PostsPage: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, key) => (
            <tr key={item.id as number}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.slug}</td>
              <td>{item.text.substring(0, 30)}</td>
              <td><Button href={'/admin/posts/' + item.slug}>Edit</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};
