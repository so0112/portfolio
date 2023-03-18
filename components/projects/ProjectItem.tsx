import Image from "next/image";
import React from "react";
import { ResultsEntity } from "../../types/project";
import notionLogo from "../../public/notion-logo.png";
import gitLogo from "../../public/git-logo.png";

interface ProjectItemProps {
  data: ResultsEntity;
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  const imgSrc = data.cover.file?.url;
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const deployUrl = data.properties.Deploy.url;
  const period = data.properties.Period.date;
  const githubUrl = data.properties.Github.url;
  const tags = data.properties.Tags.multi_select;

  return (
    <div className="flex flex-col m-3 rounded-xl hover:scale-105 transition-transform ease-in-out duration-200">
      <a href={deployUrl}>
        <div className="flex h-80 overflow-hidden">
          <Image className="rounded-t-xl" src={imgSrc} alt="커버 이미지" width={1000} height={200} />
        </div>
      </a>
      <div className="p-3 h-50 bg-slate-300 rounded-b-xl">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="mb-1">{description}</div>
        <a className="hover:text-gray-500 flex items-center" href={githubUrl} target="_blank" rel="noreferrer">
          <Image className="mr-1 w-4 h-4 rounded-xl center" src={gitLogo} alt="git"></Image> 깃허브 링크
        </a>
        <a className="hover:text-gray-500 flex items-center" href={deployUrl} target="_blank" rel="noreferrer">
          🔗 배포사이트 링크
        </a>
        <a className="hover:text-gray-500 flex items-center" href={deployUrl} target="_blank" rel="noreferrer">
          <Image className="mr-1 w-4 h-4 center" src={notionLogo} alt="notion"></Image> 프로젝트 소개 링크
        </a>
        <div className="flex flex-wrap items-start mt-2">
          {tags?.map((tag) => (
            <h1 className="px-2 py-1 mr-2 mb-2 rounded-md bg-slate-400 text-xs font-bold" key={tag?.id}>
              {tag?.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
