
import {React, useState} from 'react'
import './ShoppingList.css'
// To-Do List from : 
// https://mdbootstrap.com/docs/standard/extended/to-do-list/
const ShoppingCart = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState('');
    const [id_, setId] = useState(0);

    const textChange = (e) => {
        let value = e.target.value; //This is how we read the value in an input field in REACT for onChange events in this case
        setText(value); // This is how we store the value in an input field in REACT for onChange events in this case
    }

    const save = () => {
        // e.preventDefault();
        if(!thereIsText()) {
        }
        else{
            let newId = id_ + 1
            setId(newId) 
            let todoObj = {
                text: text, 
                id_: id_,
            }
            todo.push(todoObj);
            setText('')
        }
    }

    const thereIsText = () => {
        if(!text){
            return false;
        }
        else{
            return true;
        }
    }

    return (
        <div className="shop-list">
            <form >
                <label>Add to list:</label>
                <input 
                    onChange={textChange}
                    type="text"
                    value={text} 
                    >

                </input>
                <button id="addTask" type='button' onClick={save}>Add</button>
            </form>
            <ul>
                {
                    todo.map((prod) => <li key={prod.id_} >{prod.text}</li>)
                }
            </ul>
        </div>
    );

}

export default ShoppingCart