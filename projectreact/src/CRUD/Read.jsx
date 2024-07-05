import { Table } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import { API_URL } from '../Url/Url';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();
   
  const updateData = ({name,cost,agree,id}) =>
    {
      localStorage.setItem('ID',id)
      localStorage.setItem('name',name)
      localStorage.setItem('cost',cost)
      localStorage.setItem('agree',agree)
      navigate('/update')
    }

  const deleteData = async (id) =>{
    {
      await axios.delete(`${API_URL}/${id}`)
    callGetApi()
    }
  }

  const callGetApi = async () => {
   {
      const res = await axios.get(API_URL);
      setAPIData(res.data);
    } 
  };

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <>
      <h2>Read data</h2>
      <Table border={2} celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.cost}</Table.Cell>
              <Table.Cell>{data.agree ? 'Yes' : 'No'}</Table.Cell>
              <Table.Cell><button onClick={()=>deleteData(data.id)}>Delete</button></Table.Cell>
              <Table.Cell><button onClick={()=>updateData(data)}><Link to='/update'>Update</Link></button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <div>
        {apiData.map((data) =>(
         <ul key={data.id}>
          <li>{data.name}</li>
          <li>{data.cost}</li>
          <li>{data.agree ? 'Yes' : 'No'}</li>
         </ul>

        ))}
      </div> */}
    </>
  );
}

export default Read;
