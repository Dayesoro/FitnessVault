// NavBar.js
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsPlus, BsBoxArrowInUp } from 'react-icons/bs'; // Import Bootstrap icons
import WorkoutForm from './WorkoutForm';
import { Link } from 'react-router-dom'; // Import Link for routing
import { useLogout } from '../hooks/useLogout';


const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Application Logo and Name */}
                <Link to="/" className="navbar-brand" style={{ cursor: 'pointer' }}>
                    <div className="d-flex align-items-center">
                        <BsBoxArrowInUp className="text-warning" size={30} />
                        <span className="ml-2">
                            <span style={{ color: '#06d6a0' }}>Fitness</span>
                            <span style={{ color: '#118ab2' }}>Vault</span>
                        </span>
                    </div>
                </Link>

                {/* Toggle button for responsive design */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navigation Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    {/* Plus Icon for Form */}
                    <Nav>
                        <Nav.Link onClick={handleShow}>
                            <BsPlus className="mr-1" />
                            Add Workout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Login and Signup Links - Moved to Far Right */}
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <div>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup" className="nav-link">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* WorkoutForm Modal */}
            <WorkoutForm showModal={showModal} handleClose={handleClose} />

        </Navbar>
    );
};

export default NavBar;
