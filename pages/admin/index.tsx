import { NextPage } from "next";
import { Header } from "../../components/header/header";

const Admin: NextPage = () => {
  const headerItems = [{text: 'Homee', src:'/admin'}];
  return (
    <Header headerItems={headerItems} />
  );
}

export default Admin;
