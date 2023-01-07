import React from 'react';
import axios from 'axios';
import { DATABASE_ID, TOKEN } from './config';
import { result } from './types/project';

const project = () => {
  return <div>project</div>;
};

export default project;

export async function getStaticProps() {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    data: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await axios.request(options);
  const projects = await res.data;

  const projectIds = projects.results.map((project: result) =>
    project.properties.Name.title.map(item => item.plain_text)
  );

  console.log(projectIds);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}
