import styled from 'styled-components';
import LogoSVG from '../svgs/logo.svg';

const About = ({ about }) => {
  const renderHeading = () => (
    <Heading>
      <LogoSVG />
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

  const renderKeywords = () => (
    <Keywords>{about.keywords}</Keywords>
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
      {renderKeywords()}
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
    margin-bottom: 3rem;
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

const Keywords = styled.h2`
  margin-top: 0;
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
