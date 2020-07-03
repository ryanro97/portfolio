import About from '../components/About';
import Layout from '../components/Layout';

const about = {
  name: "Ryan Ro",
  position: "Software Developer",
  keywords: "Competer. Creator. Solutionist.",
  intro: "Adapting to the next stage in life as new graduate from the University of Toronto.",
  info: [
    "A Canadian born Korean, brought up on the west coast in Vancouver and currently based in Toronto.",
    "Presently seeking opportunities, while working on obtaining AWS certifications and side projects.",
    "Hobbies include listening to music, playing most sports, but ultimately cherishing good times with friends.",
  ],
};

const AboutPage = () => (
  <Layout
    title="About | Ryan Ro"
    description="Learn more about me."
  >
    <About about={about} />
  </Layout>
);

export default AboutPage;
