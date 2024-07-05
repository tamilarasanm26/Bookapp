import React,{useState,useEffect} from 'react'
import { Checkbox, Form,Button } from 'semantic-ui-react';
import {API_URL} from '../Url/Url'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function Update() {
 
  const [name,setName] = useState('');
  const [cost,setCost] = useState('');
  const [agree,setAgree] = useState(false);
  const [id,setId] = useState('');
  const navigate = useNavigate();
  const updateUser = async () =>{
      await axios.put(API_URL+id,{
       name,
       cost,
       agree
      });
      navigate('/read');
  }
  
  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setCost(localStorage.getItem('cost'))
    setAgree(localStorage.getItem('agree'))
  },[])
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
        <br />
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
        <Button onClick={updateUser}>Update</Button>
    </Form>
    </>
  )
}

export default Update