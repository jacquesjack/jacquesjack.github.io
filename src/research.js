import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import './Home.css'


const Research = () => {
    return ( 
        <div className="bg-dark">
        <div className="bg-secondary py-2">
            <Container>
            <Row id="banner">
                <Col className='py-4 bg-secondary'>
                    <h1>Start Researching</h1>
                    <h5>Define your search parameters and fetch your articles</h5>
                </Col>
            </Row>
        </Container>
        </div>
        <Container className="text-light text-start p-5">
            <p>The Reseacher has 6 search parameters to use to refine your search. You may choose to fill all of them or none of them.
                The search options allow you to select which newspaper publication to search through, which date to start looking and which date to stop looking
                , Which Keywords to prioritize, Which Author's articles to search and which article type to search. 
            </p>
        </Container>
        <Container className="bg-dark pt-4">
            <Row>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Enter the newspaper to search through</p>
                                <Form.Select aria-label="Default select example">
                                        <option>No Newspaper Selected</option>
                                        <option value="1">New York Times</option>
                                        <option value="2">Ottawa Citizen</option>
                                        <option value="3">Washington Post</option>
                                </Form.Select>
                            </Container>
                            
                            <Container className="py-4">
                                <p>Select some Keywords to prioritize</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        
                                        <Form.Control type="email" placeholder="No Keywords Selected" />
                                    </Form.Group>
                                </Form>
                            </Container>
                    </Container>
               </Col>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Select start date</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        
                                        <Form.Control type="email" placeholder="dd/mm/yyyy" />
                                    </Form.Group>
                                </Form>
                            </Container>
                            
                            <Container className="py-2">
                                <p>Select Article author</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        
                                        <Form.Control type="email" placeholder="No Author Selected" />
                                    </Form.Group>
                                </Form>
                            </Container>
                    </Container>
               </Col>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Select end date</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        
                                        <Form.Control type="email" placeholder="dd/mm/yyyy" />
                                    </Form.Group>
                                </Form>
                            </Container>
                            
                            <Container className="py-2">
                                <p>Select the type of article</p>
                                <Form.Select aria-label="Default select example">
                                        <option>No Type Selected</option>
                                        <option value="1">Opinion</option>
                                        <option value="2">Sports</option>
                                        <option value="3">Current Events</option>
                                </Form.Select>
                            </Container>
                    </Container>
               </Col>
            </Row>
        </Container>
        
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                
                <Col></Col>
                
                <Col><Button variant="secondary" className="mb-3 text-start px-3 py-2">Fetch Articles</Button></Col>
            </Row>
        </Container>
        <Container className="p-4 text-start text-light">
            <p>Results of Search</p>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Article Title</th>
                    <th>Date Published</th>
                    <th>Author</th>
                    <th>Publication</th>
                    <th>Article Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Article Title 1</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 1</td>
                    <td>New York Times</td>
                    <td>Opinion</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Article Title 2</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 2</td>
                    <td>Ottawa Citizen</td>
                    <td>Sports</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Article Title 3</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 3</td>
                    <td>Washington Post</td>
                    <td>Current Events</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Article Title 4</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 4</td>
                    <td>Daily Mail</td>
                    <td>Current Events</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Article Title 5</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 5</td>
                    <td>Toronto Sun</td>
                    <td>Opinion</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Article Title 6</td>
                    <td>dd/mm/yyyy</td>
                    <td>Author Name 6</td>
                    <td>Chigaco Tribune</td>
                    <td>Current Events</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <Container className="p-5">

        </Container>
    </div>
    
     );
}
 
export default Research;