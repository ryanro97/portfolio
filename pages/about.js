import About from '../components/About';
import Layout from '../components/Layout';
import { LogoSVG } from '../svgs';

const about = {
  portrait: <LogoSVG />,
  name: "Ryan Ro",
  position: "Software Developer",
  quote: {
    text: [
      "\"Yeah, I'm scared, I'm trembling",
      "But lets carry on, let's just try.",
      "It's our chance, all the countless",
      "footsteps that brought us here have set the stage\"",
    ],
    author: "- IU (Into the I-LAND) <translated by me>",
  },
  intro: "Adapting to the next stage in life as new graduate from the University of Toronto.",
  info: [
    "A Canadian born Korean, brought up on the west coast in Vancouver and currently based in Toronto.",
    "Presently saving up in order to get a German Shepherd puppy, while working on obtaining AWS certifications.",
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
