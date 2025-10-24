import {  Outlet } from "react-router-dom";
import style from './Layout.module.css';
import SideBar from "../../components/SideBar/SideBar";
import cn from "classnames";
 
export function Layout()  {
  return (
    <div className={cn(  style.menu)}>
      <header className={cn(style.header, 'flex items-center justify-end p-[42px] w-full opacity-100')}>
        <div className="w-14 h-14">
          <img src="" alt="avatar"/>
        </div>
      </header>
      <main className={style.content}>
        <Outlet/>
      </main>
      <div className={cn(style.sidebar )}>
        <SideBar/>
      </div>
    </div>
  )
}

 

