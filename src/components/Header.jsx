import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Image className='icono' src="/icono.png" roundedCircle />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className='fs-4 column-gap-3 menu'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About me</Nav.Link>
                        <Nav.Link>Skills</Nav.Link>
                        <Nav.Link>Proyects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
