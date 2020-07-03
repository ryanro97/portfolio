import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LogoSVG from '../../svgs/logo.svg';

const Header = ({ links }) => {
  const { pathname } = useRouter();

  const renderLogo = () => (
    <Link href="/" passHref>
      <LogoLink aria-label="Home">
        <Logo />
      </LogoLink>
    </Link>
  );

  const renderLinks = () => (
    <Links>
      {links.map(({ key, href, label }) => (
        <Link href={href} key={key} passHref>
          <NavLink active={pathname === href}>{label}</NavLink>
        </Link>
      ))}
    </Links>
  );

  return (
    <HeaderWrapper>
      {renderLogo()}
      {renderLinks()}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
`;

const Logo = styled(LogoSVG)`
  fill: #84898C;
  height: 4rem;
  width: 4rem;
`;

const LogoLink = styled.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const NavLink = styled.a`
  background-color: ${props => props.active ? "#658DC6" : "white"};
  color: ${props => props.active ? "white" : "#84898C"};
  line-height: 5rem;
  text-align: center;
  text-decoration: none;
  width: 7rem;

  &:hover {
    color: white;
    background-color: #B5C7D3;
  }

  @media (max-width: 512px) {
    width: 4.75rem;
  }
`;

export default Header;
