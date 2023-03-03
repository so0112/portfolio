import React from "react";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../config";
import { Projects, ResultsEntity, Properties } from "../types/project";
import Layout from "../components/home/Layout";
import ProjectItem from "../components/projects/ProjectItem";

interface ProjectProps {
  projects: ResultsEntity[];
}

function project({ projects }: ProjectProps) {
  return (
    <>
      <Layout className="flex flex-col h-screen itmes-center justify-center min-h-sß px-5 py-24 mb-10">
        <h1 className="p-6 m-3 text-4xl font-bold sm:text-4xl">
          총 프로젝트 : <span className="pl-3 text-blue-500"> {projects.length}</span>
        </h1>
        <div className="grid grid-cols-3 h-screen md:grid-cols-3">
          {projects.map((project: ResultsEntity) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default project;

export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    data: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await axios.request(options);
  const projects = await res.data.results;

  return {
    props: { projects },
  };
}
