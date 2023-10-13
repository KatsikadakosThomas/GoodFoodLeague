"use client"
import Nav from "./Nav"
import { Fragment,useState,ReactNode } from "react"
import Modal from "./Modal"

type LayoutProps={
    children?:React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    const [open, setOpen] = useState<boolean>(false);

    const openModal = ():void => {
        console.log("fired")
      setOpen(!open);
    };


    return(
    <Fragment>
       
<Nav openModal={openModal} opened={open}></Nav>
<Modal openModal={openModal} opened={open}></Modal>

{children}
</Fragment>
    )
}