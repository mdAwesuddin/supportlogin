import React from 'react'
import { Button, Card,Container,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardCard = () => {
  return (
    <>
      <Card className="mt-3">
        <Container>
        <Card.Body >
            <Row>
                <Col>
          <Card.Text >
            <div className='d-flex'>
           <h5 className='pe-1 mb-3'>Name:</h5><p className='ps-1 '>Xyz</p>
           </div>
           <div className='d-flex'>
           <h5 className='pe-1 mb-3'>Doctor Name:</h5><p className='ps-1 m-0'>Dr.xyz</p>
           </div>
          </Card.Text>
          
          </Col>
          <Col>
          <Card.Text>
          <div className='d-flex'>
           <h5 className='pe-1 mb-3'>Date:</h5><p className='ps-1 '>12/11/2023</p>
           </div>
           <div className='d-flex'>
           <h5 className='pe-1 mb-3'>Consultation:</h5><p className='ps-1 m-0'>Orthopaedic</p>
           </div>
          </Card.Text>
          
          </Col>
          
          <Col className='d-flex justify-content-center align-items-center pe-2'>
          {/* <Card.Text > */}
          <Button variant="success" className='me-2' >Confirm</Button>
          <Button variant="danger" >Cancel</Button>
          {/* </Card.Text> */}
          </Col>
          </Row>
        </Card.Body>
        </Container>
      </Card>
    </>
  )
}

export default DashboardCard