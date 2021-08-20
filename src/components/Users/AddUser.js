import React, {useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Select from 'react-select';

const AddUser = (props) => {

    const stateList  = [ { value:1, label:'active' },{ value:2, label:'inactive' } ];


    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    // const [enteredHobby,setEnteredHobby] = useState('');
    const [enteredState,setEnteredState] = useState(stateList.label);
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredAction,setEnteredAction] = useState('');
    const [error,setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.match(/\d/) || (/[!@#$%^&*(),.?]/g.test(enteredUserName))  || enteredUserName.trim().length === 0){
            setError({
                title: 'Invalid Name',
                message: 'ERROR!! make sure name should contain only alphabet and space '
            });
            return;
        }
        if( enteredAge.trim().length === 0 || enteredAge>50 || enteredAge<18 ){
            setError({
                title: 'Invalid Input',
                message: 'ERROR!! make sure age should be between 18-50'
            
            });
            return;
        }
        console.log(enteredUserName,enteredAge,enteredTask,enteredDate,enteredAction,enteredGender,enteredState);
        // let listId = Math.random().toString();
        props.onAddUser({
            id : Math.floor(Math.random()*10000),
            name : enteredUserName,
            age : enteredAge,
            state: enteredState,
            gender: enteredGender,
            task : enteredTask,
            action : enteredAction,
            date : enteredDate});

        setEnteredUserName('');
        setEnteredAge('');
        setEnteredDate('');
        setEnteredTask('');
        setEnteredAction('');
        setError(false);
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    };

    const actionChangeHandler = (event) => {
        setEnteredAction(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    const genderChangeHandler = (event) => {
        setEnteredGender(event.target.value);

    }
    const stateChangeHandler = (event) => {
        setEnteredState(event.label);

    }

    const errorHandler =() => {
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
        <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
        

                <label htmlFor="username">Name</label>
                 <input id="username" type="text" value = {enteredUserName} onChange={userNameChangeHandler} />

                <div className = {classes.rc}>
                    <label >Male</label>
                    <input name="gender" type="radio" value="Male" onChange = {genderChangeHandler}/>
                    <label >Female</label>
                    <input name="gender" type="radio" value="Female" onChange = {genderChangeHandler}/> 
                </div>

                <div className = {classes.rc}>
                <input type="checkbox" name="Sports" /> Sports&nbsp;&nbsp;
                <input type="checkbox" name="Reading" /> Reading&nbsp;&nbsp;
                <input type="checkbox" name="Music" /> Music&nbsp;&nbsp;
                </div>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={ageChangeHandler} value = {enteredAge}/>
            
                <label htmlFor="date">Date</label>
                <input id="date" type="date" onChange={dateChangeHandler} value = {enteredDate}/>
            
                <label htmlFor="taskName">Task Name</label>
                <input id="taskName" type="text" onChange={taskChangeHandler} value = {enteredTask}/>
            
                <div  >
                    <Select options = {stateList} onChange = {stateChangeHandler} />
                </div>

                {/* <div className = {classes.rc}>
                <label >Active</label>
                <input name="status" type="radio" value="Active" onChange = {stateChangeHandler}/>
                <label >Inactive</label>
                <input name="status" type="radio" value="Inactive" onChange = {stateChangeHandler}/>
                </div> */}
            <label htmlFor="action">Action</label>
            <input id="action" type="text" onChange={actionChangeHandler} value = {enteredAction}/>
            
            <Button type="submit">Okay</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUser;