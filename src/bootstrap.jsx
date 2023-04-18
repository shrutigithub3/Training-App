import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
function BasicExample() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>shruti</td>
            <td>teacher</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Anshu</td>
            <td>student</td>
          </tr>
        </tbody>
      </Table>

      
    );
  }
  
  export default BasicExample;