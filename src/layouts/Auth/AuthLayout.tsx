import {  Outlet } from "react-router-dom";
 

const AuthLayout = () => {
  return (
    <div className="flex  flex-row">
        <div className="">
            <Outlet/>
        </div>
        <div className="text-red-500">
             fdfdf
        </div>
    </div>
  )
}

export default AuthLayout

