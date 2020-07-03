import styled from 'styled-components';

const Contact = ({ contact }) => {
  const renderLink = (key, href, icon) => (
    <Link
      aria-label={key}
      href={href}
      key={key}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );

  const renderLinks = () => (
    contact.map(({ key, href, icon }) => renderLink(key, href, icon))
  );

  return (
    <ContactWrapper>
      {renderLinks()}
    </ContactWrapper>
  );
};

const ContactWrapper = styled.main`
  margin: auto;
`;

const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
  transform: scale(.8);

  :hover {
    transform: scale(1);
    transition: transform .25s;
  }

  ::after {
    background-color: white;
    content: "";
    height: .25rem;
    position: absolute;
    top: 5.25rem;
    transform: scaleX(0);
    width: 5rem;
  }

  ::before {
    top: -1.25rem;
    content: "${props => props["aria-label"]}";
    color: white;
    position: absolute;
    transform: scaleX(0);
  }

  :hover::after, :hover::before {
    transform: scaleX(1);
    transition: transform .5s;
  }

  > svg {
    height: 5rem;
    width: 5rem;
  }
`;

export default Contact;
