import styled from 'styled-components';

const IE = () => (
  <IEWrapper>
    <h1>Internet Explorer is not supported.</h1>
    <h2>Please use a different browser.</h2>
  </IEWrapper>
);

const IEWrapper = styled.div`
  background-color: white;
  margin-bottom: auto;
  margin-top: auto;
  padding: 2rem;

  > h1, h2 {
    color: #84898C;
  }
`;

export default IE;
