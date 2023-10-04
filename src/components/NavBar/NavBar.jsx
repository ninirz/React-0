import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

export const Texto2 = () => {
    return <h1> Texto2 </h1>
}

function NavBar({ user, numero, valor, sumar, children }) {

    return (
        <Navbar bg="ligth" data-bs-theme="ligth">
        <Container>
          <Navbar.Brand href="#home">Niza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mujer</Nav.Link>
            <Nav.Link href="#features">Hombre</Nav.Link>
            <Nav.Link href="#pricing">Bebe</Nav.Link>
          </Nav>
        </Container>
        <CartWidget>
        </CartWidget>
        <div>{user}</div>
      </Navbar>
    );
}

export default NavBar;