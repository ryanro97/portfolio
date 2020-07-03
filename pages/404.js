import styled from 'styled-components';
import Layout from '../components/Layout';
import LogoSVG from '../svgs/logo.svg';

const Custom404 = () => (
  <Layout
    title="Page Not Found | Ryan Ro"
    description="Error 404"
  >
    <Custom404Wrapper>
      <div>
        <h1>4</h1>
        <LogoSVG />
        <h1>4</h1>
      </div>
      <h2>This page could not be found.</h2>
    </Custom404Wrapper>
  </Layout>
);

const Custom404Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;

  > div {
    align-items: center;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & > h1 {
      font-size: 5rem;
      margin-bottom: 0;
      margin-top: 0;
    }

    & > svg {
      height: 5rem;
      width: 5rem;
    }
  }

  > h2 {
    margin-bottom: 2rem;
    margin-top: 0;
  }
`;

export default Custom404;