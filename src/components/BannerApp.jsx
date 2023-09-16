import { Col, Container, Image, Row } from "react-bootstrap"
import { TypingApp } from "./TypingApp"

export const BannerApp = () => {
    return (
        <Container fluid className="bg-banner p-5">
            <Row>
                <Col xs='12' md='6' className="saludo">
                    <h2 className="fw-lighter">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h2>
                    <h1 className="text-uppercase">I&apos;m Oscar Hincapie</h1>
                    <TypingApp/>

                </Col>
                <Col xs='12' md='6' className="text-center">
                    <Image src="/perfil.jpg" roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}
