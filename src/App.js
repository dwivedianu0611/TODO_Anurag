import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import UpdateUser from './components/Users/UpdateUser';


function App() {

  const [usersList, setUsersList] = useState([]);
  const [edit,setEdit] = useState(false);
  const [updateId,setUpdateId] = useState();

  const addUserHandler = (user) =>{
    setUsersList((prevUsersList) =>{
      return [user,...prevUsersList]
    } );
    setEdit(false);
    setUpdateId(0);
  }
  const updateChangeHandler = (user) => {
    const indexValue = usersList.findIndex((val) => val.id === user.id);
    console.log('index : '+indexValue);
    // console.log('users objext expected'+usersList[indexVlue]);
    // usersList[indexValue] = user;
    // console.log('value expected'+listValue[indexValue].name);
    // console.log(listValue);
    setUsersList((prevList) => {
      prevList[indexValue].id = user.id;
      prevList[indexValue].name = user.name;
      prevList[indexValue].age = user.age;
      prevList[indexValue].state = user.state;
      prevList[indexValue].gender = user.gender;
      prevList[indexValue].task = user.task;
      prevList[indexValue].action = user.action;
      prevList[indexValue].date = user.date;
      return prevList;
    });

  }

  const deleteHandler = (id) => {
    console.log('id value =  '+id);

    setUsersList(prevList => {
      const newList = prevList.filter(goal => goal.id !== id);
      return newList;
    });
    }

    const editChangeHandler = (v) => {
      setEdit(v);
    }

    const editHandler = (id) =>{
      console.log('Pohcha edit me :'+id);
      setEdit(true);
      setUpdateId(id);
    }
  
  return (
    <div>
      <AddUser onAddUser = {addUserHandler} needsEditing = {edit} />
      <UsersList users={usersList} onDelete = {deleteHandler} onEdit={editHandler}/>
      {edit && <UpdateUser data = {usersList} uid = {updateId} stillEdit = {editChangeHandler} onUpdateUser = {updateChangeHandler}/>}

    </div>
  );
}

export default App;
