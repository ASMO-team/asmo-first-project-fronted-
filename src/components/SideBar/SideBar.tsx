import LogoIcon from '../../assets/icons/Logo.svg';
import HomeIcon from '../../assets/icons/home.svg';
import PostsIcon from '../../assets/icons/posts.svg';
import AddPostIcon from '../../assets/icons/addPost.svg';
import LogoutIcon from '../../assets/icons/Logout.svg';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (<div className="flex flex-col w-[340px] py-[33.48px] px-[25.11px] gap-[50.22px] shadow-[0_3.57px_40.21px_0_rgba(0,0,0,0.08)] min-h-full relative">
        <div className='flex items-center gap-[16.74px]'>
            <img src={LogoIcon} alt="logo"/>
            <h1 className='text-[24.06px] text-[#5D7285] tracking-[0.5%]'>
                Asmo
            </h1>
        </div>
        <ul className='flex flex-col gap-[16px]  p-[8.37px]  '>
            <li className='list-none  p-[8.37px] hover:bg-[#E9F5FE] '>
                <Link to="/home" className='flex gap-[14px] items-center  no-underline'>
                    <img src={HomeIcon} alt="home" />
                    <div className='text-[16.74px] tracking-[1%] text-[#5D7285]'>home</div>
                </Link>
            </li>
            <li className='list-none  p-[8.37px] hover:bg-[#E9F5FE] '>
                <Link to="/add-post" className='flex gap-[14px] items-center   1 no-underline'>
                    <img src={AddPostIcon} alt="addPost" />
                    <div className='text-[16.74px] tracking-[1%] text-[#5D7285]'>addPost</div>
                </Link>
            </li>
            <li className='list-none  p-[8.37px] hover:bg-[#E9F5FE] '>
                <Link to="/posts" className='flex gap-[14px] items-center   no-underline'>
                    <img src={PostsIcon} alt="otherUsersPost" />
                    <div className='text-[16.74px] tracking-[1%] text-[#5D7285]'>otherUsersPost</div>
                </Link>
            </li>
        </ul>
        <div className="absolute bottom-[25.11px] left-[25.11px] right-[25.11px] flex flex-col gap-[25.11px]    ">
            <div className="flex gap-4 items-center p-[8.37px] w-full">
                fdsfdsf
            </div>
            <button className='bg-[#667A8A] flex gap-4 items-center p-[8.37px]  cursor-pointer rounded-[5px]'>
                <img src={LogoutIcon} alt='LogoutIcon'/>
                <div className="text-[16.74px] tracking-[1%] text-white">
                    Logout
                </div>
            </button>
        </div>
    </div>)
}

export default SideBar;