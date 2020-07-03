import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PRE_TRANSITION_IN = 0x0;
const TRANSITION_IN = 0x1;
const PAUSE = 0x2;
const TRANSITION_OUT = 0x3;

const Home = ({ home }) => {
  const [state, setState] = useState({
    index: -1,
    heading: null,
    subheading: null,
    transition: PRE_TRANSITION_IN,
  });

  useEffect(() => {
    if (!(state.transition ^ PRE_TRANSITION_IN)) {
      handleTransition();
    } else if (!(state.transition ^ PAUSE)) {
      const timeout = setTimeout(() => {
        handleTransition();
      }, 3000)
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state.transition]);

  const handleTransition = (e) => {
    if (!e || !(state.transition ^ TRANSITION_IN) ||
      !(state.transition ^ TRANSITION_OUT)) {
      switch (state.transition) {
        case PRE_TRANSITION_IN:
          const index = (state.index + 1) % home.headings.length;
          const heading = home.headings[index];
          setState({
            ...state,
            index,
            heading: heading.heading,
            subheading: heading.subheading,
            transition: TRANSITION_IN,
          });
          break;
        case TRANSITION_IN:
          setState({
            ...state,
            transition: PAUSE,
          });
          break;
        case PAUSE:
          setState({
            ...state,
            transition: TRANSITION_OUT,
          });
          break;
        case TRANSITION_OUT:
          setState({
            ...state,
            transition: PRE_TRANSITION_IN,
          });
          break;
      }
    }
  };

  const renderHeading = () => (
    <Heading
      transition={state.transition}
      onTransitionEnd={handleTransition}
    >
      <h1>{state.heading}</h1>
      <h2>{state.subheading}</h2>
    </Heading>
  );

  const renderText = () => (
    <h3>{home.text}</h3>
  );
  
  return (
    <HomeWrapper>
      {renderHeading()}
      {renderText()}
    </HomeWrapper>
  );
};

const Heading = styled.div`
  margin-top: 2rem;

  > h1, h2 {
    margin-bottom: 0;
    margin-top: 0;
    opacity: ${props => !(props.transition ^ TRANSITION_IN) ||
      !(props.transition ^ PAUSE) ? 1 : 0};
    transform: translateX(${props => !(props.transition ^ PRE_TRANSITION_IN) ?
      "-10rem" : !(props.transition ^ TRANSITION_OUT) ? "10rem" : 0});
    transition: ${props => !(props.transition ^ TRANSITION_IN) ?
      "opacity 2.5s, transform 2.5s" : !(props.transition ^ TRANSITION_OUT) ?
      "opacity 2.5s, transform 2.5s" : ""};
      white-space: nowrap;
  }

  > h1 {
    font-size: 7.5rem;
  }

  > h2 {
    font-size: 5rem;
    transition-delay: ${props => !(props.transition ^ TRANSITION_IN) ||
      !(props.transition ^ TRANSITION_OUT) ? ".5s" : 0};
  }

  @media (max-width: 752px) {
    > h1 {
      font-size: 5rem;
    }
    
    > h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 496px) {
    > h1 {
      font-size: 3rem;
      overflow-x: hidden;
    }
    
    > h2 {
      font-size: 2rem;
    }
  }
`;

const HomeWrapper = styled.div`
  margin: auto;
  max-width: 80%;

  > h3 {
    font-size: 2rem;
    margin-bottom : 2rem;
  }

  @media (max-width: 752px) {
    > h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 496px) {
    > h3 {
      font-size: 1rem;
    }
  }
`;

export default Home;
