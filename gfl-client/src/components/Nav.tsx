
import Link from "next/link"
import Burger from  "./Burger"
import GflLogo from "./GflLogo"
import Socials from "./Socials"


const links = [

    { href: "/resume", name: "Food" },
    { href: "/about", name: "Drinks" },
    { href: "/contact", name: "Nearby" },

  ]

type NavProps={
    openModal:()=>void,
    opened:boolean;
}


export default function Nav( {openModal,opened}:NavProps){

    return(
        <nav className="absolute bg-white left-0 top-0 z-[200000] h-[8vh] min-h-[60px] w-full  shadow font-bold flex flex-row justify-between sm:justify-between items-center">
         
          <GflLogo twProps={"ml-8"} ></GflLogo>
      
      <div id="nav-link-wrapper" className="hidden md:flex">
          {links.map((link,idx) => {
            return(
            <Link key={idx} className="text-slate-800 font-bold text-3xl mr-5 hover:opacity-70" onClick={openModal}href={link.href}>
            {link.name}
            </Link>
            )
          })}
        </div>

          <div className=" mr-8 hidden md:flex">
          <Socials color="black"></Socials>
          <Link  className="text-gfl-red font-bold text-3xl hover:text-black " href={"/login"}>
           Login
            </Link>
          </div>

            <div className="block md:hidden mr-10" >
                <Burger openModal={openModal} opened={opened}></Burger>
            </div>
          
                
        </nav>
    )
}