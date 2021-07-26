import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Projects from './Projects';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navigation = () => {
return (
    <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>About Me</Nav.Link>
                        <Nav.Link href='/Projects'>Projects</Nav.Link>
                        <Nav.Link href='/Contact'>Contact</Nav.Link>
                        <Nav.Link href='/Github'>Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default Navigation;

