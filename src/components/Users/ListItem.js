import React from 'react';
import Button from '../UI/Button';
import classes from './UsersList.module.css';


const ListItem = (props) =>{
    const deleteHandler = () => {
        console.log("ListItem ki id"+props.id);
        props.onDelete(props.id);
      };

      const editHandler = () => {
        console.log("ListItem ki id"+props.id);
        props.onEdit(props.id);
      };
    
      return (
        <li className = {classes.liitem} >
          
          <div>{props.children}</div>
          <div><Button onClick={deleteHandler}>Dlt</Button>
          <Button onClick={editHandler}>Ed</Button></div>
          
        </li>
      );
}

export default ListItem;