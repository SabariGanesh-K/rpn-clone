import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUserAlt, FaShoppingCart, FaStar, FaStarHalfAlt, FaSmileWink, FaTags } from 'react-icons/fa';
import { useTime } from 'react-timer-hook';
import './styles.css'


function MyTime() {
    const {
        seconds,
        minutes,
        hours,
    } = useTime({ format: '12-hour' });

    return (
        <div className='timer-division'>
            <span className="time">{hours}</span> <span className="time">{minutes}</span> <span className="time">{seconds}</span>
        </div>
    );
}


export default function ParticipantSection() {


    return (
        <Container className="participant-section">
            <Row>
                <Col className='participant-col'>
                    <p>PARTICIPANT</p>
                    <div className='people-section'>
                        <FaUserAlt /> <span className='number'>1</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>

                </Col>
                <Col className='participant-col'>
                    <p>LUCKY POOL</p>
                    <div className='people-section'>
                        <FaShoppingCart /> <span className='number'>$ 1,00,00 /-</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className='participant-col'>
                    <p>TOP 5 POOL</p>
                    <div className='people-section'>
                        <FaSmileWink /> <span className='number'>$ 1,00,00 /-</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>
                </Col>

                <Col className='participant-col'>
                    <p>DIMOND POOL</p>
                    <div className='people-section'>
                        <FaStar /> <span className='number'>$ 1,00,00 /-</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>
                </Col>


            </Row>
            <Row>
                <Col className='participant-col'>
                    <p>ROYAL DIMOND</p>
                    <div className='people-section'>
                        <FaTags /> <span className='number'>$ 1,00,00 /-</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>
                </Col>

                <Col className='participant-col'>
                    <p>ROYALITY POOL</p>
                    <div className='people-section'>
                        <FaStarHalfAlt /> <span className='number'>$ 1,00,00 /-</span>
                    </div>
                    <div className='people-clock'>
                        <MyTime />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

