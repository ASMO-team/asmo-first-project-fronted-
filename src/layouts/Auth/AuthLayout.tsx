import {  Outlet } from "react-router-dom";
import authImage from "../../assets/authFont.svg";


const AuthLayout = () => {
  return (
    <div className="flex h-screen">
        <div className="flex-1 flex justify-center items-start mt-[10%]">
          <Outlet/>
        </div>
        <div className="flex-1 overflow-y-hidden relative">
          <img src={authImage} alt='Логотип' className="w-full h-full object-cover"/>
        </div>
    </div>
  )
}

export default AuthLayout

