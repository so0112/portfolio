import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/home/Layout";
import Link from "next/link";
import Intro from "../components/intro";
import Animation from "../components/home/animation";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>FE 개발자 신상오 포트폴리오</title>
          <meta name="description" content="FE 개발자 신상오의 포트폴리오입니다." />
        </Head>
        <section className="flex flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Intro />
          </div>
        </section>
      </Layout>
    </>
  );
}
