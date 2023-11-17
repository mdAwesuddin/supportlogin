import React,{useState} from 'react'
import { Container, Nav, Navbar, NavDropdown,Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardCard from './DashboardCard';
const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-primary d-flex justify-content-between ">
          <Navbar.Brand href="#" className='ms-4'>
            <span className="text-light">ThinkAyurvedaFirst™</span>
          </Navbar.Brand>
          <Dropdown
             align="end"
             show={showDropdown}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
           >
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="toggle-without-arrow rounded-circle  bg-white text-black me-5">
        A
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#action/1">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          {/* <NavDropdown title="N" id="basic-nav-dropdown" className="text-light rounded-circle " >
            <NavDropdown.Item href="#action/3.1" >Logout</NavDropdown.Item>
          </NavDropdown> */}
          {/* <div className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white" style={{ width: '40px', height: '40px' }}>
          A
        </div> */}
      </Navbar>


      {/* <Container className=" d-flex mt-4 ps-4">
        <h5>Dashboard</h5>
      </Container> */}

      {/* tab */}
      <Container className="mt-4">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Confirm</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Cancel</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        <DashboardCard/>
        <DashboardCard/>
      </Container>
    </>
  )
}

export default Dashboard