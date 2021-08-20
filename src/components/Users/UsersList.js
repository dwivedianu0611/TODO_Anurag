import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
// import Button from '../UI/Button';
import ListItem from './ListItem';

const UsersList = (props) => {
    // const deleteHandler = (id) => {
    //     console.log('id = '+id);
    //     props.onDelete(id)
    // }
    return( 
    <Card className = {classes.users}>
    <ul>
        {props.users.map((user) =><ListItem 
        className = {classes.liitem}
          key={user.id}
          id={user.id}
          onDelete={props.onDelete}
          onEdit={props.onEdit}>
                 {user.name}, {user.age}, {user.gender}, {user.state}, {user.date}, {user.task}, {user.action}
          </ListItem>
        // <li className = {classes.liitem}  key ={user.id} id={user.id} onDelete = {deleteHandler}>
        //     {user.id}, {user.name}, {user.age}, {user.gender}, {user.state}, {user.date}, {user.task}, {user.action}
        //     <Button onClick = {deleteHandler}>Delete</Button>
        //     {console.log('value of user.id'+user.id)}
        // </li>
        )
        }
    </ul>
    </Card>
    )
}

export default UsersList;