import React, { useState } from "react";
import { Form, Button, Col, Container, Row, Card } from "react-bootstrap";

export default function SearchLocation() {
  const [city, setCity] = useState({});
  const [data, SetData] = useState({ coord:{lat:'', lon:''}, 
  clouds:{all:''}, 
  main:{feels_like: '', humidity: '', pressure: '', temp:  '', temp_max: '', temp_min: ''},
  name: '',
  sys: {sunrise: '', sunset: ''},
  visibility:'',
  weather:[{description:''}],
  wind: {deg:'',speed:''}
  });

  // Soluzione con axios
  const getData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},it&APPID=05d5f0e9e51e5622011a31d2a0d40b1d&units=metric&lang=it`
    )
      .then((response) => response.json())
      .then((json) => {SetData(json); console.log(json)
  })
      .catch((error) => console.error(error));
  };

  return (
    <Container className="my-5">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className="text-center m-auto"
        >
          <h1>Che tempo farà?</h1>

          <Form className="d-flex mb-3 align-items-center">
            <Form.Control
              onChange={(e) => setCity(e.target.value)}
              type="text"
              id="City"
              placeholder="Inserici la città"
            />
            <Button
              onClick={getData}
              variant="primary"
              className="ms-3"
              type="button"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className="text-center m-auto"
        >
          <Card>
            <Card.Img variant="top" src="https://placeholder.com/40x40" />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text><p>Lat:{data.coord.lat}</p>
              <p>Lon:{data.coord.lon}</p>
              </Card.Text>
              <Card.Text>
                <p>Il Tempo è prevelentemente <br/>{data.weather[0].description}</p>
                <p>Percentuale nuvole: {data.clouds.all} %</p>
                <p>Percepita: {data.main.feels_like} °C</p>
                <p>Umidità: {data.main.humidity} %</p>
                <p>Il sole sorge: {data.sys.sunrise}</p>
                <p>Il sole tramonta: {data.sys.sunset }</p>
                <p>Pressione: {data.main.pressure} hPa</p>
                <p>Visibilità: {data.visibility} m</p>
                <p>Temp: {data.main.temp} C°</p>
                <p>Temp max: {data.main.temp_max} °C</p>
                <p>Temp min: {data.main.temp_min} °C</p>
                <p>Vento: {data.wind.speed} m/s</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
