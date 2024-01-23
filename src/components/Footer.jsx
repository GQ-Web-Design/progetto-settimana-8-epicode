import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
      <Container>
          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-center">
              <p className='text-secondary m-auto'><MDBIcon far icon="copyright" /> EpiBook || Developed with love by <a href="https://www.gianlucaquaranta.com">Gianluca Quaranta</a> || 
                <MDBIcon fab icon="react" className="mx-1" /> <a href="https://react.dev/" title="React.JS Official Site">React.JS</a> inside</p>
              </Col>
          </Row>
    </Container>
  )
}
