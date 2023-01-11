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

  console.log(tags);

  return (
    <div className="flex flex-col m-3 bg-slate-400 rounded-xl">
      <div>
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="cover image"
          width="100"
          height="60"
          layout="responsive"
          objectFit="none"
        />
      </div>

      <div className="p-3">
        <h1>{title}</h1>
        <div>{description}</div>
        <a className="hover:text-gray-300" href={github} target="_blank" rel="noreferrer">
          깃허브 바로가기
        </a>
        <div className="flexe items-start mt-2"></div>
      </div>
    </div>
  );
};

export default ProjectItem;
