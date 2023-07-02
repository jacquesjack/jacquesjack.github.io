import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import lib from './librarypng.png';

const Home = () => {
    return ( 
        <div className="bg-dark">
            <div className="bg-secondary py-2">
                <Container>
                <Row id="banner">
                    <Col className='py-4 bg-secondary'>
                        <h1>Welcome To The Researcher</h1>
                        <h5>where you can find any archived newspaper!</h5>
                    </Col>
                </Row>
            </Container>
            </div>
            
            <Container className="bg-dark py-4">
                <Row>
                    <Col md={6} className="text-light" >
                        <p id="textbox">Newspapers contain the news of the day the day they are printed. They contain opinions pieces,
                        letters to the editor, sports media, movie reviews, important events, advertisements etc. They are like a snapshot
                        into the past and give valuable insight into what the world was like. Newspapers are so very useful
                        if you wish to do any research in the modern era. Anything
                        important that happened anywhere in the 20th century was written down in some newspaper somewhere.</p>
                        <p>

                        </p>
                        <p id="textbox">
                        The purpose
                        of this website is to give you the tools to find any newspaper form any era that that contains the information you desire.
                        Do you care to know how the vietnam war was perceived by the american public from a conservative standpoint?
                        Then search for articles written by the American Spectator between 1965 and 1973 with keywords "Vietnam" and "War."
                        Such historical and political analysis is possible with The Researcher
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={lib} alt="Logo" id="lib"/>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5">

            </Container>
        </div>
        
     );
}
 
export default Home;