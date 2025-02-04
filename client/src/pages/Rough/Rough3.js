import { useState } from "react";
import { StyledInput } from "../../components/Input/Input";
export default function Rough3(){
    const [val, setVal] = useState("");
    function submitForm(){  
        console.log("Current val: ", val);
        setVal("");
    }
    return (
        <div className="flex flex-col items-center">
            <StyledInput placeholder="Enter your name" size="large" value={val} onChange={(e) => setVal(e.target.value)} className="m-8"/>
            <button onClick={submitForm} className="h-12 w-24 bg-emerald-600 rounded-md text-white font-bold m-4">Submit</button>
        </div>  
    );
}