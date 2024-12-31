import Navbar from '../Navbar';

import { Container, Main } from '../../styles/components/Layout';
import AddsBar from '../AddsBar';


const Layout = ({ children }) => {
  return (

    <Container>
      <Navbar/>
      <AddsBar/>
      <Main>
        {children}
        </Main>

    </Container>
  );
};




export default Layout;
