import React, { useState } from 'react';
import { Checkbox, Form,Button } from 'semantic-ui-react';
import {API_URL} from '../Url/Url'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Create() {
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    const [agree,setAgree] = useState(false);
    const navigate = useNavigate();
    const postData = async () =>
    {await axios.post
    (API_URL,{name,cost,agree})
    navigate('/read');
    }

return (
    <>
    <Form>
        <Form.Field>
            <label >Name</label>
            <input type="text"
            value={name}
            onChange={e=>{
                setName(e.target.value)
            }}
            />
        </Form.Field>
        <br/>
        <Form.Field>
            <label >cost</label>
            <input type="number"
            value={cost}
             onChange={e=>{
                 setCost(e.target.value)
             }} 
            />
        </Form.Field>
        <br />
        <Form.Field>
            <label >Agree terms and conditions</label>
            <Checkbox type="checkbox"
            checked={agree}
            onChange={() =>setAgree(!agree)}
            />
        </Form.Field>
        <br />
        <br />
        <Button onClick={postData}>Submit</Button>
    </Form>
    </>
  )
}
export default Create