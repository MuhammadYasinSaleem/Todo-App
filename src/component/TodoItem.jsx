import React, { useState,useContext } from "react";
import { Context } from "../Provider/Context";
const TodoItem=(props)=>{
    const context=useContext(Context);
    const  [isEditing, setIsEditing]=useState(false)
    let [status,setstatus]=useState(true)
    const [newitem,setnewitem]=useState("")
    const [dropdown,setdropdown]=useState(false);

    const deleteentry=(name)=> {
   const updateditem=context.item.filter(item=>item!==name)
   context.setitem(updateditem);
    }
const setchange=(event)=>{
setnewitem(event.target.value)
}

const setupdated=(name)=>{
const index=context.item.indexOf(name)
if(index!==-1)
{
    const UpdatedItems= [...context.item];
   UpdatedItems[index]=newitem;
   context.setitem(UpdatedItems); 
}
setIsEditing(false);
setnewitem("")
}

return(
    <div>
    <li className="todo-Item">
        <span>
            {context.reset?status=true:status} {/*error*/}
      {status?  <input type="checkbox" onClick={()=>setstatus(!status)}/>:""}
<span className="todo-item-text">{props.name}</span>
</span>
<button className="btn" onClick={()=>setdropdown(!dropdown)}>...</button>
{dropdown && <div>
    <ul style={{listStyle:"none"}}>
        <li className="dropmenu" onClick={()=>setstatus(true)}>Reset</li>
    <li className="dropmenu" onClick={()=>deleteentry(props.name)}>Delete</li>
    <li className="dropmenu" onClick={()=>{setdropdown(false);setIsEditing(true)}}>Edit</li>
    </ul>
</div>
}
    </li>
    {isEditing ? <>
<input type="text" placeholder="Edit" className="input" onChange={(e)=>setchange(e)}/>
<button className="button" onClick={()=>setupdated(props.name)}>Update</button>
</>
    :""    
}
    </div>
)
}


export default TodoItem