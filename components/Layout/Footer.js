import styled from 'styled-components';

const Footer = () => {
  const year = new Date().getFullYear();

  const renderFooter = () => (
    <FooterWrapper>
      <Copyright>Copyright &copy; {year} Ryan Ro</Copyright>
    </FooterWrapper>
  );

  return (
    <>
      {renderFooter()}
    </>
  );
};

const Copyright = styled.p`
  color: #84898C;
  font-size: .5rem;
`;

const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 1rem;
  justify-content: center;
  width: 100%;
`;

export default Footer;
