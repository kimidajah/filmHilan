import { Card, Container, Row, Col, Image } from "react-bootstrap";
import CaptainAmericaImage from "../asset/image/superhero/CaptainAmerica.jpg";
import HellBoyImage from "../asset/image/superhero/HellBoy.jpg";
import IronManImage from "../asset/image/superhero/IronMan.jpg";
import ManOfSteelImage from "../asset/image/superhero/ManOfSteel.jpg";
import SpiderManImage from "../asset/image/superhero/SpiderMan.jpg";
import TheDarkKnightImage from "../asset/image/superhero/TheDarkKnight.jpg";
import ThorImage from "../asset/image/superhero/Thor.jpg";


const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">SUPERHERO MOVIE</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="text-white movieImage ">
              <Image src={CaptainAmericaImage} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">CaptainAmerica</Card.Title>
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
              <Image src={HellBoyImage} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HellBoy</Card.Title>
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
              <Image src={IronManImage} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">IronMan</Card.Title>
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
              <Image src={ManOfSteelImage} alt="DosenGhaib" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ManOfSteel</Card.Title>
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
              <Image src={SpiderManImage} alt="DosenGhaib" className="images" />
              <div className="bg-dark" >
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SpiderMan</Card.Title>
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
              <Image src={TheDarkKnightImage} alt="DosenGhaib" className="images" />
              <div className="bg-dark" >
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TheDarkKnight</Card.Title>
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
              <Image src={ThorImage} alt="DosenGhaib" className="images" />
              <div className="bg-dark" >
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Thor</Card.Title>
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

export default Superhero;
