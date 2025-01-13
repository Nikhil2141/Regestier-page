
import { createContext, useState } from "react";
import img1 from "../../src/assets/java.png";
import img2 from "../../src/assets/php.png";
import img3 from "../../src/assets/magento.png";
import img4 from "../../src/assets/php.png";

 const UserContext  = createContext();
 const  UserContextProvider = ({children}) =>{
    const [selectedTech, setSelectedTech] = useState(0);
    const images = [img1, img2, img3, img4];
    return(
        <>
        <UserContext.Provider selectedTech={selectedTech} setSelectedTech={setSelectedTech} images={images} >

            {children}
            </UserContext.Provider>
        </>
    )

}
export default UserContextProvider;