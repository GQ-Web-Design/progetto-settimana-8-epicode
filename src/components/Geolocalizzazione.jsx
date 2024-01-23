import React, { useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";

export default function Geolocalizzazione() {
  const [userLocation, setUserLocation] = useState({});
  const [data, SetData] = useState({
    /* coord: { lat: "", lon: "" }, */
    clouds: { all: "" },
    main: {
      feels_like: "",
      humidity: "",
      pressure: "",
      temp: "",
      temp_max: "",
      temp_min: "",
    },
    name: "",
    sys: { sunrise: "", sunset: "" },
    visibility: "",
    weather: [{ description: "" }],
    wind: { deg: "", speed: "" },
  });

  const getData = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude},it&APPID=05d5f0e9e51e5622011a31d2a0d40b1d&units=metric&lang=it`
    )
      .then((response) => response.json())
      .then((json) => {
        SetData(json);
        console.log(json);
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
          <Button
            onClick={getData}
            variant="primary"
            className="ms-3"
            type="button"
          >
            Submit
          </Button>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className="text-center m-auto"
        >
          {userLocation && (
            <div>
              <h2>User Location</h2>
              <p>Latitude: {userLocation.latitude}</p>
              <p>Longitude: {userLocation.longitude}</p>
            </div>
          )}
          <Card>
            <Card.Img variant="top" src="https://placeholder.com/40x40" />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <p>Lat:{data.coord.lat}</p>
                <p>Lon:{data.coord.lon}</p>
              </Card.Text>
              <Card.Text>
                <p>
                  Il Tempo è prevelentemente <br />
                  {data.weather[0].description}
                </p>
                <p>Percentuale nuvole: {data.clouds.all} %</p>
                <p>Percepita: {data.main.feels_like} °C</p>
                <p>Umidità: {data.main.humidity} %</p>
                <p>Il sole sorge: {data.sys.sunrise}</p>
                <p>Il sole tramonta: {data.sys.sunset}</p>
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
