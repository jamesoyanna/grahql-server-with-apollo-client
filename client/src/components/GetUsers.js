import React, {useEffect, useState} from 'react';
import {useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from './../Graphql/Queries';

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const { error, loading, data } = useQuery(LOAD_USERS);

    useEffect(() => {
        if(data){
        setUsers(data.getAllUsers);    
        }
    }, [data])

    return (
        <div>
         {/* {users.map((val) =>{
             return <h4 key={val.id}>{val.firstName}</h4>;
         } )} */}
        </div>
    );
}

export default GetUsers;
