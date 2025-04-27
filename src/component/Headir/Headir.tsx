import combined from "../../assets/icons/Combined.svg"
import dark from "../../assets/icons/darc.svg"
import { useState } from "react"
function Haider(){
    const[darc, useDarc] = useState(true)
    function addDark(){
        useDarc(!darc)
        
        if(darc){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }


    }
    return(
        <header className="w-full max-w-[541px]  mx-auto flex justify-between items-end">
            <h1 className="font-bold text-[#FFFFFF] text-4xl mt-[50px]">TODO</h1>
            <img onClick={()=>addDark()} src={darc?combined:dark} alt="" className="w-[25px] h-[25px] cursor-pointer" />
        </header>
    )
}
export default Haider