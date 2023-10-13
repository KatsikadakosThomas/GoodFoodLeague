import Image from "next/image"

type props={
    twProps:string
}
function GflLogo({twProps}:props) {
    return ( 
        <div className={`flex items-center ${twProps}`}>
       <a href="https://en.wikipedia.org/wiki/Gyros" target="_blank"><Image className="mr-5 hover:scale-125 transition-all duration-300 cursor-pointer" src="/logo.png" height={50} width={50} alt="gfl-logo"></Image></a>
        <span className="text-4xl font-extrabold text-gfl-red hover:mb-5 transition-all duration-300 cursor-default ">G</span>
          <span className="text-4xl font-extrabold text-gfl-blue hover:mb-5 transition-all duration-300 cursor-default ">F</span>
          <span className="text-4xl font-extrabold text-gfl-orange hover:mb-5 transition-all duration-300  cursor-default">L</span>
        </div>
     );
}

export default GflLogo;