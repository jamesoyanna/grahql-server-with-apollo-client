import React, {useState} from 'react';
import { CREATE_USER_MUTATION} from '../Graphql/Mutations';
import {useMutation } from '@apollo/client';
const Form = () => {
    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const [createUser, {error}] = useMutation(CREATE_USER_MUTATION);

const addUser = () => {
    createUser({
        variables: {
            firstName,
            lastName: lastName,
            email: email,
            password: password
        }
    })
    if(error){
        console.log(error)
    }
}
    return (
      <div style={{ marginTop: "50px" }}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
             onChange={(e) => {setLastName(e.target.value)}}
        />
        <input
          type="text"
          placeholder="Email"
            onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          type="password"
          placeholder="Password"
             onChange={(e) => {setPassword(e.target.value)}}
        />
        <button
          onClick={addUser}
          style={{
            padding: "7px",
            borderRadius: "5px",
            background: "#00004d",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Create User
        </button>
      </div>
    );
}
export default Form;
