import Head from 'next/head';
import { Inter } from '@next/font/google';
import Layout from '../components/home/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>FE 개발자 신상오 포트폴리오</title>
          <meta
            name="description"
            content="FE 개발자 신상오의 포트폴리오입니다."
          />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요!
                <br className="hidden lg:inline-block" />
                FE 개발자 신상오입니다
              </h1>
              <p className="mb-8 leading-relaxed">
                <br />
                현재는 정적 타입언어와 전역 상태 관리에
                <br />
                관심이 생겨 공식문서와 인터넷 강의로 typescript와 redux 학습
                <br />
                중입니다. 또한 이전 프로젝트 리팩토링, 토이 프로젝트에
                <br />
                적용하면서 알게 된 내용을 블로그에 기록하며 학습하고 있습니다.
              </p>
              <div className="flex justify-center">
                <Link
                  href={'/project'}
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  프로젝트 보러가기
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}
