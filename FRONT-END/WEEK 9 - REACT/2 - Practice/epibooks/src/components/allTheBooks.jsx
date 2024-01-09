import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import fantasyBooks from '../books/fantasy.json'
import horrorBooks from '../books/horror.json'
import scifiBooks from '../books/scifi.json'
import romanceBooks from '../books/romance.json'
import historyBooks from'../books/history.json' 


function AllTheBooks() {
    console.log('books: ' , horrorBooks);
     return (
        <div className='row mt-5 mx-auto'>
        {horrorBooks.map(book => (
            <>
             <Card style={{ width: '18rem', height: '31rem' }} className='mx-auto my-1'>
                <Card.Img variant="top" src={book.img} style={{height: '300px'}} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush bt-0" >
                    <ListGroup.Item>{book.price}</ListGroup.Item>
                    <ListGroup.Item>{book.category}</ListGroup.Item>
                    {/* <ListGroup.Item>{book.asin}</ListGroup.Item> */}
                </ListGroup>
            </Card>
            </>
        ))}
        </div>
    ) 
}

export default AllTheBooks
