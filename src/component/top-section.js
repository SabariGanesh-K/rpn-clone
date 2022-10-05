import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navicon from '../Images/icon-menu.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'


function Topsection() {
    return (
        <Container className="top-section-hero">
            <Row>
                <Col><img src={Navicon} alt="" width="20%" /></Col>
                <Col><p className="top-section-text">RPN | ENERGY</p></Col>
            </Row>
        </Container>
    );
}

export default Topsection;
