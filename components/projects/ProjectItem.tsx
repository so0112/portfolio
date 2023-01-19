import Image from "next/image";
import React from "react";
import { ResultsEntity } from "../../types/project";

interface ProjectItemProps {
  data: ResultsEntity;
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover?.external.url || "/images/nextjs.png";
  const tags = data.properties.Tags.multi_select;

  return (
    <div className="flex flex-col m-3 bg-slate-400 rounded-xl">
      <div>
        <Image className="rounded-t-xl" src={imgSrc} alt="cover image" width="50" height="60" layout="responsive" />
      </div>

      <div className="p-3">
        <h1 className="font-bold text-xl">{title}</h1>
        <div>{description}</div>
        <a className="hover:text-gray-400" href={github} target="_blank" rel="noreferrer">
          깃허브 바로가기
        </a>
        <div className="flex flex-wrap items-start mt-2">
          {tags?.map((tag) => (
            <h1 className="px-2 py-1 mr-2 mb-2 rounded-md bg-slate-500 text-xs" key={tag?.id}>
              {tag?.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
