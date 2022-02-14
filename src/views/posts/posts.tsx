import { Table } from 'react-bootstrap';
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
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, key) => (
            <tr key={item.id as number}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.text.substring(0, 30)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};
