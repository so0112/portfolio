import Head from "next/head";
import Layout from "../components/home/Layout";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Intro />
          </div>
        </section>
      </Layout>
    </>
  );
}
