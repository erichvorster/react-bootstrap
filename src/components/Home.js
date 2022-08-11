import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

const Home = () => {
  return (
    <Container>
        {/* Intro */}
      <Row className="my-4">
        <Col xs={6} className="text-start mt-5">
          <h6>
            <strong>Hello Mr. Cooper</strong>
          </h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet sequi <strong>laboriosam sit aspernatur amet?</strong></p>
        </Col>
        <Col xs={6} className="text-end">
          <div className="mb-2">
            <p>
              {" "}
              <strong>Account no: *******6785</strong> Thu, Dec 31 2021
            </p>
          </div>
          <div>
            <p className="my-0">DB Cooper</p>
            <p className="my-0">3423 B Drop Plane St.</p>
            <p className="my-0">Kansas, Texas</p>
          </div>
        </Col>
      </Row>
    
    {/* Overview */}
      <h2 className="text-start mb-5">Overview</h2>

      <Row>
        <Col xs={6}>
            <h4 className="text-start mb-2">Summary of accounts</h4>
            <Table striped>
     
      <tbody>
        <tr>
          <td className="text-start">Lorem.</td>
          <td className="text-end">Mark</td>
        </tr>
        <tr>
          <td className="text-start"><strong>Fri, Jun 2022</strong></td>
          <td className="text-end">Mark</td>
        </tr>
        <tr>
          <td className="text-start">2</td>
          <td className="text-end">Jacob</td>
        </tr>
        <tr>
          <td className="text-start">3</td>
          <td colSpan={2} className="text-end">Larry the Bird</td>
        
        </tr>
      </tbody>
    </Table>

        </Col>
        <Col xs={6}>
        
        </Col>
      </Row>


    </Container>
  );
};

export default Home;
