import LogoIcon from '../../assets/icons/Logo.svg';
const SideBar = () => {
    return (<div className="w-[340px] py-[33.48px] px-[25.11px]">
        <div className='flex items-center'>
            <img src={LogoIcon} alt="logo"/>
            <h1 className='text-[24.06px] text-[#5D7285] tracking-[0.5%]'>
                Asmo
            </h1>
        </div>
    </div>)
}

export default SideBar;