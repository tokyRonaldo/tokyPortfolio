import Layout from "../Layout/Layout";
import Slidebar from "../components/SlideBar";
import Display from "../components/Display";

export default function HomePage() {
  return (
    <Layout>
    <div className="flex flex-col lg:flex-row">
      <Slidebar />
      <Display />
    </div>
    </Layout>
  );
}
