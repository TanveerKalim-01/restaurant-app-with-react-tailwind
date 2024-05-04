
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Hamburger({isToggle, setIsToggle}) {
    
  return (
     <div  className=' h-fit  text-2xl lg:hidden mr-8 hover:scale-110 duration-200 ease-in-out' onClick={() => setIsToggle(!isToggle)}> 
       { isToggle 
            ?
            <AiOutlineClose  />
            :
            <CiMenuBurger  />}
     </div>
        
    

  )
}

export default Hamburger;