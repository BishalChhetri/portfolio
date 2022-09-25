import Layout from "../components/Layout";

import About from "../components/about";
import Front from "../components/front";
import Contact from "../components/contact";
import Project from "../components/project";

export default function Home() {
  return (
    <Layout>
      <Front />
      <About />
      <Project />
      <Contact />
    </Layout>
  );
}
