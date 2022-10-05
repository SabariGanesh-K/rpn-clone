import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { FaStar } from 'react-icons/fa';
import './styles.css'
import StarRatings from 'react-star-ratings';

function MyDetail() {
    const doNothing=() =>{

    }
    return (
        <Container className="my-detail">
            <Row>
                <Table >
                    <thead>
                        <tr>
                            <th><center className='text'>MY DETAILS</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text'>Level <span className='text-details'><StarRatings
          rating={4}
          starRatedColor="blue"
          changeRating={doNothing}
          numberOfStars={6}
          name='rating'
        /></span></td>
                        </tr>
                        <tr>
                            <td className='text'>Current Income <span className='text-details'> $ 1,000</span></td>
                        </tr>
                        <tr>
                            <td className='text'>Total Income <span className='text-details'> $ 5,000</span></td>
                        </tr>
                        <tr>
                            <td className='text'>TRX Balance <span className='text-details'> $ 10,000</span></td>
                        </tr>
                        <tr>
                            <td className='text'>VIDT Balance <span className='text-details'>$ 15,000</span></td>
                        </tr>
                        <tr>
                            <td className='text'>Redeposit Balance <span className='text-details'>$ 34,000</span></td>
                        </tr>
                        <tr>
                            <td className='text'>My Referal <span className='text-details'></span></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default MyDetail;
