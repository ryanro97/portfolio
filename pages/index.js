import Home from '../components/Home';
import Layout from '../components/Layout';

const home = {
  headings: [
    {
      heading: "Hello.",
      subheading: "Welcome.",
    },
    {
      heading: "안녕하세요.",
      subheading: "어서 오세요.",
    },
    {
      heading: "Bonjour.",
      subheading: "Bienvenue.",
    },
  ],
  text: "I'm Ryan, a Software Developer. Feel free to take a look around.",
};

const HomePage = () => {
  return (
    <Layout
      title="Portfolio | Ryan Ro"
      description="Software developer based in Toronto, Ontario."
    >
      <Home home={home} />
    </Layout>
  );
};

export default HomePage;
