// NavBar.js
import { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { BsPlus, BsBoxArrowInUp } from 'react-icons/bs'; // Import Bootstrap icons
import WorkoutForm from './WorkoutForm';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Application Logo and Name */}
                <Navbar.Brand onClick={handleShow} style={{ cursor: 'pointer' }}>
                    <div className="d-flex align-items-center">
                        <BsBoxArrowInUp className="text-warning" size={30} />
                        <span className="ml-2">
                            <span style={{ color: '#06d6a0' }}>Fitness</span>
                            <span style={{ color: '#118ab2' }}>Vault</span>
                        </span>
                    </div>
                </Navbar.Brand>

                {/* Toggle button for responsive design */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navigation Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    {/* Plus Icon for Form */}
                    <Nav>
                        <Nav.Link onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <BsPlus className="mr-1" />
                            Add Workout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* WorkoutForm Modal */}
            <WorkoutForm showModal={showModal} handleClose={handleClose} />

        </Navbar>
    );
};

export default NavBar;
