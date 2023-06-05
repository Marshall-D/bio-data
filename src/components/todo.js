import React, { useState } from 'react';
import "../styles/todo.css";
import { doc,setDoc } from "firebase/firestore";
import {db} from '../firebase';



const Todo = () => {
    const [todo, setTodo] = useState("");
  
   
  
   
    const addTodo = async (e) => {
       
        try {
            const docRef = await setDoc(doc(db, "89","89"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    setTodo("") 

          
    }
   
  

 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
change name                 </h1>
   
                <div>
   
                    <div>
                        <input
                        value={todo}
                            type="text"
                            // placeholder="What do you have to do today?"
                            onChange={(e)=>setTodo(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container" 
                    >
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo} 
                        >

                            Submit
                        </button>
                    </div>
   
                </div>
   
            
            </div>
        </section>
    )
}
 
export default Todo