import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
function MainContainer(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default MainContainer;