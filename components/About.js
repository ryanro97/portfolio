import styled from 'styled-components';

const About = ({ about }) => {
  const renderHeading = () => (
    <Heading>
      {about.portrait}
      {renderTitle()}
    </Heading>
  );

  const renderInfo = () => (
    <Info>
      {about.info.map((line, i) => (
        <p key={`Info-${i}`}>
          {line}
        </p>
      ))}
    </Info>
  );

  const renderIntro = () => (
    <Intro>{about.intro}</Intro>
  );

  const renderQuote = () => (
    <Quote>
      {about.quote.text.map((line, i) => (
        <h4 key={`Quote-${i}`}>
          {line}
        </h4>
      ))}
      <h5>{about.quote.author}</h5>
    </Quote>
  );

  const renderTitle = () => (
    <Title>
      <h1>{about.name}</h1>
      <h2>{about.position}</h2>
    </Title>
  );

  return (
    <AboutWrapper>
      {renderHeading()}
      {renderQuote()}
      {renderIntro()}
      {renderInfo()}
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  width: 80%;

  > * {
    margin-bottom: 2rem;
  }
`;

const Heading = styled.div`
  display: flex;
  margin-top: 2rem;

  > svg {
    height: 8rem;
    margin-right: 1.5rem;
    witdh: 8rem;
  }

  > div {
    margin-left: 1.5rem;
  }

  > * {
    display: inline-flex;
  }
`;

const Info = styled.div`
  > p {
    text-align: center;
    margin-bottom: .25rem;
    margin-top: .25rem;
  }
`;

const Intro = styled.p`
  margin-top: 0;
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  
  > h4 {
    margin-bottom: .25rem;
    margin-top: .25rem;
    text-align: left;
  }

  > h5 {
    font-style: italic;
    margin-bottom: 0;
    margin-top: .5rem;
    text-align: right;
  }
`;

const Title = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  > h1 {
    margin-bottom: 0;
  }

  > h2 {
    margin-top: 1rem;

    ::before {
      background-color: white;
      content: "";
      height: .2rem;
      left: 0;
      margin-top: -.5rem;
      position: absolute;
      width: 100%;
    }
  }
`;

export default About;
