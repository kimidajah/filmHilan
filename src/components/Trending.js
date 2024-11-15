import { Card, Container, Row, Col, Image } from "react-bootstrap";
import DosenGhaib from "../asset/image/Trending/DosenGhaib.jpeg";
import HeartBreakMotel from "../asset/image/Trending/HeartBreakMotel.jpeg";
import Kromoleo from "../asset/image/Trending/KromoLeo.jpeg";
import RumahDinasBapak from "../asset/image/Trending/RumahDinasBapak.jpeg";
import SakaratulMaut from "../asset/image/Trending/SakaratulMaut.jpeg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">TRENDING MOVIE</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="text-white movieImage ">
              <Image src={DosenGhaib} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DosenGhaib</Card.Title>
                  <Card.Text className="text-left">
                    Dosen goib adalah film yang pernah populer di indonesia
                    karan katanya di ambil dari kisah nyata
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updat 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage ">
              <Image src={HeartBreakMotel} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HeartBreakMotel</Card.Title>
                  <Card.Text className="text-left">
                    Dosen goib adalah film yang pernah populer di indonesia
                    karan katanya di ambil dari kisah nyata
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updat 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage ">
              <Image src={Kromoleo} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kromoleo</Card.Title>
                  <Card.Text className="text-left">
                    Dosen goib adalah film yang pernah populer di indonesia
                    karan katanya di ambil dari kisah nyata
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updat 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage ">
              <Image src={RumahDinasBapak} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">RumahDinasBapak</Card.Title>
                  <Card.Text className="text-left">
                    Dosen goib adalah film yang pernah populer di indonesia
                    karan katanya di ambil dari kisah nyata
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updat 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage ">
              <Image src={SakaratulMaut} alt="DosenGhaib" className="images" />
              <div className="bg-dark" >
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SakaratulMaut</Card.Title>
                  <Card.Text className="text-left">
                    Dosen goib adalah film yang pernah populer di indonesia
                    karan katanya di ambil dari kisah nyata
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updat 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
