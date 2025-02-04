import Button from "../../components/Button/Button";
import { StyledInput } from "../../components/Input/Input";
export default function Rough(){
    function click(){
        alert("Clicked");
    }
    return (
        <div className="
        box-border
        w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]  
        min-h-[400px] md:min-h-[500px]             
        max-w-[1200px]                            
        mx-auto           
        mt-[8%]                         
        p-[3%] md:p-6 lg:p-[7%]                        
        rounded-lg                                
        bg-white shadow-md                         
        flex flex-col gap-4                     
      ">
            {/* <Input placeholder="Enter name" size="large" /> */}
            <StyledInput placeholder="Enter your name" size="medium" />
            <StyledInput placeholder="Enter your name" size="medium" />
            <StyledInput placeholder="Enter your name" size="medium" />
            <StyledInput placeholder="Enter your name" size="medium" />
            <Button className=" !bg-orange-500 text-2x !mt-6" size="medium" onClick={click}>
                Click me
            </Button>
        </div>
    );
}