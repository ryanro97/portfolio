import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  DownloadSVG,
  NextSVG,
  PrevSVG,
} from '../svgs';

const TRANSITION_MENU_OUT = 0x1;
const TRANSITION_CATEGORY_IN = 0x2;
const TRANSITION_CATEGORY_OUT = 0x3;
const TRANSITION_MENU_IN = 0x4;

const Resume = ({ resume }) => {
  const [state, setState] = useState({
    key: null,
    transition: 0x0,
  });

  useEffect(() => {
    if (!(state.transition ^ TRANSITION_CATEGORY_IN) ||
      !(state.transition ^ TRANSITION_MENU_IN)) {
      handleTransition();
    }
  }, [state.transition]);

  const handleTransition = (e) => {
    if (!e || e.propertyName === "opacity") {
      switch (state.transition) {
        case TRANSITION_MENU_OUT:
          setState({
            ...state,
            transition: TRANSITION_CATEGORY_IN,
          });
          break;
        case TRANSITION_CATEGORY_IN:
          setState({
            ...state,
            transition: 0x0,
          });
          break;
        case TRANSITION_CATEGORY_OUT:
          setState({
            ...state,
            key: null,
            transition: TRANSITION_MENU_IN,
          });
          break;
        case TRANSITION_MENU_IN:
          setState({
            ...state,
            transition: 0x0,
          });
          break;
      }
    }
  };

  const handleMenuClick = (key) => () => {
    if (state.transition ^ TRANSITION_MENU_OUT) {
      setState({
        key,
        transition: TRANSITION_MENU_OUT,
      });
    }
  };

  const handleBackClick = () => {
    if (state.transition ^ TRANSITION_CATEGORY_OUT) {
      setState({
        ...state,
        transition: TRANSITION_CATEGORY_OUT,
      });
    }
  };

  const renderCategoryPage = () => {
    const category = resume[state.key];

    return (
      <CategoryPage
        transition={
          !(state.transition ^ TRANSITION_CATEGORY_IN) ||
          !(state.transition ^ TRANSITION_CATEGORY_OUT)
        }
        onTransitionEnd={handleTransition}
      >
        <CategoryHeader>
          <Back onClick={handleBackClick}>
            <PrevSVG />
            <h4>Back</h4>
          </Back>
          <Category>
            {category.icon}
            <h2>{category.key}</h2>
          </Category>
        </CategoryHeader>
        {
          category.data.map(({ date, title, subtitle, content }) => (
            renderData(date, title, subtitle, content)
          ))
        }
      </CategoryPage>
    );
  };

  const renderData = (date, title, subtitle, content) => (
    <Data key={title}>
      <h5>{date}</h5>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>
    </Data>
  );

  const renderMenu = () => (
    <MenuWrapper
      transition={
        !(state.transition ^ TRANSITION_MENU_IN) ||
        !(state.transition ^ TRANSITION_MENU_OUT)
      }
      onTransitionEnd={handleTransition}
    >
      {
        Object.values(resume).map(({ key, icon }) => (
          renderMenuCategory(key, icon)
        ))
      }
      <Download href="/Resume.pdf" download>
        <DownloadSVG />
        Download
      </Download>
    </MenuWrapper>
  );

  const renderMenuCategory = (key, icon) => (
    <MenuCategoryWrapper
      key={key}
      onClick={handleMenuClick(key)}
    >
      <MenuCategory>
        {icon}
        <h2>{key}</h2>
      </MenuCategory>
      <NextSVG />
    </MenuCategoryWrapper>
  );

  return (
    <>
      {
        !state.key ||
        !(state.transition ^ TRANSITION_MENU_IN) ||
        !(state.transition ^ TRANSITION_MENU_OUT) ?
        renderMenu() : renderCategoryPage()
      }
    </>
  );
};

const Back = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding-right: .5rem;

  :hover {
    transform: translateX(-1.5rem);
    transition: transform .5s;
  }

  > svg {
    height: 2rem;
    width: 2rem;
  }
`;

const Category = styled.div`
  align-items: center;
  display: flex;

  > h2 {
    margin-left: 1rem;
  }

  > svg {
    height: 4rem;
    width: 4rem;
  }
`;

const CategoryHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ::after {
    content: "";
  }
`;

const CategoryPage = styled.div`
  height: 100%;
  opacity: ${props => props.transition ? 0 : 1};
  transition: opacity .5s;
  width: 80%;

  > div:first-child {
    margin-top: 2rem;
  }

  > div:last-child {
    margin-bottom: 3rem;
  }
`;

const Data = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;

  ::before {
    background-color: white;
    content: "";
    height: .2rem;
    margin-top: -1rem;
    position: absolute;
    width: 100%;
  }

  > p {
    white-space: pre-wrap;
  }
`;

const Download = styled.a`
  align-items: center;
  border: .1rem solid white;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  text-decoration: none;

  > svg {
    height: 2rem;
    margin-bottom: .25rem;
    margin-top: .25rem;
    width: 2rem;
  }

  :hover {
    background-color: white;
    color: #658DC6;

    > svg {
      fill: #658DC6;
    }
  }
`;

const MenuCategory = styled.div`
  align-items: center;
  display: flex;

  > h2 {
    margin-left: 1rem;
    margin-right: 2rem;
  }

  > svg {
    height: 4rem;
    width: 4rem;
  }
`;

const MenuCategoryWrapper = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

  :hover {
    transform: translateX(1.5rem);
    transition: transform .25s;
  }

  > svg {
    height: 2rem;
    width: 2rem;
  }
`;

const MenuWrapper = styled.div`
  margin: auto;
  opacity: ${props => props.transition ? 0 : 1};
  transform: translateX(${props => props.transition ? "5rem" : 0});
  transition: opacity .5s, transform .5s;

  > div:first-child {
    margin-top: 2rem;
  }

  > a:last-child {
    margin-bottom: 2rem;
  }
`;

export default Resume;
