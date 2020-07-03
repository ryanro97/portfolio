import fetch from 'node-fetch';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const projects = [
  {
    user: "ryanro97",
    repo: "player-detector",
  },
  {
    user: "ryanro97",
    repo: "portfolio",
  },
];

const ProjectsPage = ({ __projects }) => (
  <Layout
    title="Projects | Ryan Ro"
    description="My works."
  >
    <Projects __projects={__projects} />
  </Layout>
);

export const getStaticProps = async () => {
  const creds = Buffer.from(
    `${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}`
  ).toString('base64');
  const opts = {
    headers: {
      Accept: 'application/vnd.github.html',
      Authorization: `Basic ${creds}`,
      'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
    }
  };

  const getProject = async ({user, repo}, opts) => {
    const res = await
      fetch(`https://api.github.com/repos/${user}/${repo}/readme`, opts);
    const text = await res.text();

    return text;
  };

  const parseProject = (__project) => {
    const octiconRegExp = /<a .*?><svg .*?octicon.*?><\/svg><\/a>/g;
    const octiconReplace = "";

    const anchorWithImageRegExp = /<a .*?>(<img .*?>)<\/a>/g;
    const anchorWithImageReplace = "$1";

    const anchorRegExp = /<a (.*?)>/g;
    const anchorReplace = "<a target=\"_blank\" rel=\"noopener noreferrer\" $1>";
    
    const parser = [
      {
        regExp: octiconRegExp,
        replace: octiconReplace,
      },
      {
        regExp: anchorWithImageRegExp,
        replace: anchorWithImageReplace,
      },
      {
        regExp: anchorRegExp,
        replace: anchorReplace,
      },
    ];

    return parser.reduce((__project, { regExp, replace }) => (
      __project.replace(regExp, replace)
    ), __project);
  }

  let __projects = [];
  
  for (const project of projects) {
    const __project = await getProject(project, opts);
    const __html = parseProject(__project);
    __projects.push({...project, __html});
  }

  return {
    props: {
      __projects,
    },
  };
};

export default ProjectsPage;
