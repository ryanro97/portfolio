import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CloseFilledSVG from '../svgs/closeFilled.svg';
import CloseSVG from '../svgs/close.svg';
import DetailsSVG from '../svgs/details.svg';
import DownSVG from '../svgs/down.svg';
import GithubSVG from '../svgs/github.svg';
import NextSVG from '../svgs/next.svg';
import PrevSVG from '../svgs/prev.svg';
import ScrollSVG from '../svgs/scroll.svg';

const TRANSITION_MODAL_IN = 0x1;
const TRANSITION_MODAL_OUT = 0x2;

const Projects = ({ __projects }) => {
  const [state, setState] = useState({
    __html: null,
    page: 0,
    transition: 0x0,
    perPage: null,
  });

  const setPerPage = () => {
    setState({
      ...state,
      perPage: window.innerWidth > 1280 ? 3 : 1,
    });
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setPerPage();
      window.addEventListener('resize', setPerPage);
      return () => {
        window.removeEventListener('resize', setPerPage);
      };
    }
  }, []);

  useEffect(() => {
    if (!(state.transition ^ TRANSITION_MODAL_IN)) {
      handleTransition();
    }
  }, [state.transition]);

  const prevPage = useRef();
  const nextPage = useRef();

  const handleCloseClick = () => {
    if (state.transition ^ TRANSITION_MODAL_OUT) {
      setState({
        ...state,
        transition: TRANSITION_MODAL_OUT,
      });
    }
  };

  const handleDetailsClick = (__html) => () => {
    if (state.transition ^ TRANSITION_MODAL_IN) {
      setState({
        ...state,
        __html: __html,
        transition: TRANSITION_MODAL_IN,
      });
    }
  };

  const handleNextClick = () => {
    if (nextPage.current) {
      nextPage.current.scrollIntoView({
        behavior: 'smooth',
      });
      setState({
        ...state,
        page: state.page + 1,
      });
    }
  };

  const handlePrevClick = () => {
    if (prevPage.current) {
      prevPage.current.scrollIntoView({
        behavior: 'smooth',
      });
      setState({
        ...state,
        page: state.page - 1,
      });
    }
  };

  const handleTransition = (e) => {
    if (!e || e.propertyName === "transform") {
      switch (state.transition) {
        case TRANSITION_MODAL_IN:
          setState({
            ...state,
            transition: 0x0,
          });
          break;
        case TRANSITION_MODAL_OUT:
          setState({
            ...state,
            __html: null,
            transition: 0x0,
          });
          break;
      }
    }
  };

  const renderDetailsModal = () => (
    <DetailsModal
      transition={
        !(state.transition ^ TRANSITION_MODAL_IN) ||
        !(state.transition ^ TRANSITION_MODAL_OUT)
      }
      onTransitionEnd={handleTransition}
    >
      <Close onClick={handleCloseClick}>
        <CloseSVG id="close" />
        <CloseFilledSVG id="closeFilled" />
      </Close>
      <ReadMe dangerouslySetInnerHTML={{__html: state.__html}} />
      <Scroll>
        <ScrollSVG id="scroll" />
        <DownSVG id="down" />
      </Scroll>
    </DetailsModal>
  );

  const renderProjectCard = (user, repo, __html) => {
    const projectTitleRegExp = /<h1>(.*?)<\/h1>/;
    const projectTitle = __html.match(projectTitleRegExp)[1];
    const projectImageRegExp = /<img .*?src="(.*?)" .*?>/;
    const projectImage = __html.match(projectImageRegExp)[1];

    return (
      <ProjectCard key={repo}>
        <ProjectTitle>
          <img
            alt={projectTitle}
            src={projectImage}
          />
          <h2>{projectTitle}</h2>
        </ProjectTitle>
        <ProjectOptions>
          <ProjectOption onClick={handleDetailsClick(__html)}>
            <DetailsSVG />
            <p>info</p>
          </ProjectOption>
          <ProjectOption
            href={`https://github.com/${user}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG />
            <p>repo</p>
          </ProjectOption>
        </ProjectOptions>
      </ProjectCard>
    );
  };

  const renderProjectCardPage = (page, index) => {
    let ref = null;
    if (state.page - 1 === index) {
      ref = prevPage;
    } else if (state.page + 1 === index) {
      ref = nextPage;
    }

    return (
      <ProjectCardPage key={index} ref={ref}>
        {page}
      </ProjectCardPage>
    );
  };

  const renderProjectCardPages = () => {
    const projectCardPages = __projects.reduce(
      (projectCards, { user, repo, __html }, index) => {
        const remainder = index % state.perPage || 0;
        const pageIndex = (index - remainder) / state.perPage;
        const prevPages = projectCards.slice(0, pageIndex);
        const projectCard = renderProjectCard(user, repo, __html);
        let newPage;
        if (remainder) {
          newPage = projectCards[pageIndex].concat(projectCard);
        } else {
          newPage = [projectCard];
        }
        
        return prevPages.concat([newPage]);
      }, []);
    
    if (state.perPage === 3) {
      const fill = 3 - __projects.length % 3;
      if (fill) {
        let lastPage = projectCardPages.pop();
        [...Array(fill).keys()].forEach(i => (
          lastPage.push(<ProjectCard key={`Fill ${i}`} />)
        ));
        projectCardPages.push(lastPage);
      }
    }
    
    return projectCardPages.map((projectCardPage, index) => (
      renderProjectCardPage(projectCardPage, index))
    );
  };

  const renderProjectList = () => (
    <ProjectsWrapper>
      <ProjectsList
        hasPrev={state.page}
        hasNext={state.page < __projects.length / state.perPage - 1}
      >
        <PrevSVG
          id="prev"
          onClick={handlePrevClick}
        />
        <ProjectCardPages>
          {renderProjectCardPages()}
        </ProjectCardPages>
        <NextSVG
          id="next"
          onClick={handleNextClick}
        />
      </ProjectsList>
    </ProjectsWrapper>
  );

  return (
    <>
      {renderProjectList()}
      {state.__html && renderDetailsModal()}
    </>
  );
};

const Close = styled.div`
  cursor: pointer;

  :hover {
    > svg {
      &#close {
        opacity: 0;
      }
  
      &#closeFilled {
        opacity: 1;
      }
    }
  }

  > svg {
    fill: #84898C;
    height: 2.5rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: opacity .25s;
    width: 2.5rem;

    &#closeFilled {
      opacity: 0;
    }
  }
`;

const DetailsModal = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: center;
  opacity: ${props => props.transition ? 0 : 1};
  position: absolute;
  transform: translateY(${props => props.transition ? "5rem" : 0});
  transition: opacity .5s, transform .5s;
  width: 80%;
  z-index: 1;
`;

const ProjectCard = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, .25);
  display: flex;
  flex-direction: column;
  margin-left: 5.5%;
  margin-right: 5.5%;
  overflow-x: auto;
  width: 22%;

  @media (max-width: 1280px) {
    width: 80%;
  }
`;

const ProjectCardPage = styled.div`
  align-items: center;
  display: inline-flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1280px) {
    justify-content: center;
  }
`;

const ProjectCardPages = styled.div`
  height: 100%;
  overflow-x: hidden;
  width: 100%;
  white-space: nowrap; 
`;

const ProjectOption = styled.a`
  align-items: center;
  display: flex;
  text-decoration: none;

  :hover {
    cursor: pointer;
    transform: translateY(-.5rem);
    transition: transform .25s;
  }

  > p {
    margin-left: .25rem;
    margin-right: .25rem;
  }

  > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const ProjectOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: auto;
  text-align: center;
  width: 90%;
`;

const ProjectTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(10vw + 2rem);
  text-align: center;
  width: 100%;

  > h2 {
    margin-bottom: 0;
    margin-top: .5rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }

  > img {
    width: 100%;
  }

  @media (max-width: 1280px) {
    height: calc(36vw + 2rem);
  }
`;

const ProjectsList = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;

  > svg {
    cursor: pointer;
    height: 2rem;
    width: 2rem;

    &#prev {
      visibility: ${props => props.hasPrev ? "visible" : "hidden"};
    }
  
    &#next {
      visibility: ${props => props.hasNext ? "visible" : "hidden"};
    }
  }
`;

const ProjectsWrapper = styled.div`
  margin: auto;
  width: 100%;
`;

const ReadMe = styled.div`
  height: 90%;
  margin-bottom: 1rem;
  overflow-y: scroll;

  > div {
    margin-left: 15%;
    margin-right: 15%;
  }

  a {
    color: #658DC6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1, h2, p {
    color: #84898C;
    text-align: center;
  }

  pre {
    text-align: center;
  }
`;

const Scroll = styled.div`
  align-items: center;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1.5rem;

  > svg {
    fill: #84898C;

    &#down {
      height: 1rem;
      width: 1rem;
    }

    &#scroll {
      height: 1.5rem;
      width: 1.5rem
    }
  }
`;

export default Projects;
