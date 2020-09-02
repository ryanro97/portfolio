import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 0);
  }, []);

  return (
    <ContentWrapper>
      <TransitionWrapper transition={transition}>
        {children}
      </TransitionWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #B5C7D3, #0F4C81);
  height: calc(100% - 6rem);
  overflow-y: auto;
  width: 100%;
`;

const TransitionWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: ${props => props.transition ? 1 : 0};
  transition: opacity 1s;
`;

export default Content;
