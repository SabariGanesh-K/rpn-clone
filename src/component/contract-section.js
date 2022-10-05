import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'


function ContractSection() {
    return (
        <Container className="contract-section">
            <Row>
               <a href = "https://bscscan.com/address/0x5635551bdef2a21536148bf63282f40f72318f2f"> <Col ><p className="smart-contr-label">Smart Contract Address: <span className='address'>0x1c9d95D12ba...</span></p> </Col></a>
            </Row>
        </Container>
    );
}

export default ContractSection;
