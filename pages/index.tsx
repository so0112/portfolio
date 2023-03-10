import Head from "next/head";
import Layout from "../components/home/Layout";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>FE 개발자 신상오 포트폴리오</title>
          <meta name="description" content="FE 개발자 신상오의 포트폴리오입니다." />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Intro />
          </div>
        </section>
      </Layout>
    </>
  );
}
