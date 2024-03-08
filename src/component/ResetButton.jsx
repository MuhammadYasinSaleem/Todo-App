import React,{useContext} from "react";
import { Context } from "../Provider/Context";

const ResetButton=()=>{
    const context = useContext(Context);
    return(
<button className="button" onClick={()=>context.setreset(context.reset=true)}>Reset</button>
    )
}

export default ResetButton
