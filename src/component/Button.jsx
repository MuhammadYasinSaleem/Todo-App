import React, { useState,useContext } from "react";
import TodoItem from "./TodoItem";
import { Context } from "../Provider/Context";



const MyButton=()=>{
    const context=useContext(Context);
    const [visible,setvisible]=useState(false)
    const [inputvalue,setinputvalue]=useState("")

    const handleinput=(event)=>{
        setinputvalue(event.target.value);
        }
        const SetValue=()=>{
            context.setitem([...context.item,inputvalue])
            setinputvalue("")
            setvisible(false)
        }
    return (
    <div>
        {
    context.item.map((items,id)=>(
        <TodoItem name={items} key={id}/>
    ))
}
    <button className="button" onClick={()=>setvisible(true)}>Add Todo</button>
    {visible &&
    <div>
    <input type="text" className="input" placeholder="Add new task" onChange={(e)=>handleinput(e)}/>
    <button className="button" onClick={()=>SetValue()}>Confirm</button>
</div>
    }

    </div>
    )
}

export default MyButton