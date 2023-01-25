import Link from "next/link";
import React from "react";
import Animation from "./home/Animation";

const Intro = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요! <br />
              FE 개발자 신상오입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              정보기술과 경영전략 강의를 듣고 IT 서비스 개발에 관심이 생겨 교양, 전공 가리지 않고 프로그래밍과 관련된
              강의를 다수 수강했으며 웹 서비스로 유저들과 상호작용 할 수 있는 프론트엔드 개발에 가장 흥미를 느꼈고
              전문지식을 쌓기 위해 프론트엔드 부트캠프를 수료했습니다. 현재는 정적 타입언어와 SEO 학습의 필요성을 느껴
              TypeScript와 Next.js를 공식문서와 인터넷 강의를 참고해 학습중 입니다. 개발중 알게 된 내용은 블로그에
              기록하며 복습, 공유하고 있습니다.
            </p>
            <div className="flex justify-center">
              <Link
                href={"project"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
