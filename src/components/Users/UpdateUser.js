import React,{useState} from 'react';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Select from 'react-select';


const UpdateUser = (props) => {


    const stateList  = [ { value:1, label:'active' },{ value:2, label:'inactive' } ];
    const[error,setError] = useState(true);
    const [enteredUserName,setEnteredUserName] = useState('');
    // const [enteredHobby,setEnteredHobby] = useState('');
    const [enteredGender, setEnteredGender] = useState('');

    const [enteredState,setEnteredState] = useState(stateList.label);
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredAction,setEnteredAction] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
        console.log(event.target.value);
    }

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
        setError(false);
        props.stillEdit(false);
        console.log(props.data);
        console.log('updateId : '+(props.uid));
        console.log('name : '+enteredUserName);
        console.log('age : '+enteredAge);
        console.log('state : '+enteredState)

        // const stateValue = props.data.find((val) => 
        // {
        //     if(val.id === props.uid){
        //    console.log('expected return of state : '+ val.state);
        //     return val.state;
        // }} );
        // const genderValue = props.data.find((val) => 
        // {
        //     if(val.id === props.uid){
        //    console.log('expected return of gender : '+ val.gender);
        //     return val.state;
        // }} );
        // console.log('value of state'+stateValue);
        // console.log('value of gender'+genderValue);


        props.onUpdateUser({
            id : props.uid,
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
        // setEnteredHobby('');
    }
    return(
        <>
       {error && <ErrorModal onConfirm = {errorHandler}>
       <Card className = {classes.input}>
           <form onSubmit = {errorHandler}>
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
            
                <div>
                    <Select options = {stateList} onChange = {stateChangeHandler} />
                </div>
            <label htmlFor="action">Action</label>
            <input id="action" type="text" onChange={actionChangeHandler} value = {enteredAction}/>
           </form>
           </Card>
        
        {console.log('inside Update!!')}
        </ErrorModal >}
        </>
    )
}

export default UpdateUser;