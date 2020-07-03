import Contact from '../components/Contact';
import Layout from '../components/Layout';
import EmailSVG from '../svgs/email.svg';
import GithubSVG from '../svgs/github.svg';
import LinkedInSVG from '../svgs/linkedIn.svg';
import MessengerSVG from '../svgs/messenger.svg';

const contact = [
  {
    key: "Email",
    href: "mailto:ryan@ryanro.me",
    icon: <EmailSVG />,
  },
  {
    key: "Messenger",
    href: "https://m.me/ryanro97",
    icon: <MessengerSVG />,
  },
  {
    key: "LinkedIn",
    href: "https://www.linkedin.com/in/ryanro97",
    icon: <LinkedInSVG />,
  },
  {
    key: "GitHub",
    href: "https://github.com/ryanro97",
    icon: <GithubSVG />,
  },
];

const ContactPage = () => (
  <Layout
    title="Contact | Ryan Ro"
    description="Get in touch."
  >
    <Contact contact={contact} />
  </Layout>
);

export default ContactPage;
