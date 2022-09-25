import Layout from "../components/Layout";

import About from "../components/About";
import Front from "../components/Front";
import Contact from "../components/Contact";
import Project from "../components/Project";

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

export function getServerSideProps() {
  return { props: {} };
}
