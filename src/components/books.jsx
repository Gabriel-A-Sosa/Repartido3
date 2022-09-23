import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function Books(props) {
  return (
    
    <Table striped="columns" className='d-flex justify-content-center'>
      
      <tbody className='d-flex justify-content-around'>
        <tr>
          <th> {props.title}</th>
          <td> {props.genere}</td>
          <td> {props.author}</td>
          <td> {props.year}</td>
          <td> {props.pages}</td>
        </tr>
     
      </tbody>
    </Table>
  );
}

export default Books;