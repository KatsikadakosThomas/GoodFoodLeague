
import Link from "next/link"
import Burger from  "./Burger"


type NavProps={
    openModal:()=>void,
    opened:boolean;
}


export default function Nav( {openModal,opened}:NavProps){

    return(
        <nav className="absolute bg-white left-0 top-0 z-200 h-[8vh]  w-full  shadow font-bold flex flex-row justify-start sm:justify-center items-center">
            <div className="block sm:hidden mr-10" >
                <Burger openModal={openModal} opened={opened}></Burger>
                </div>
         
       
          
                
        </nav>
    )
}