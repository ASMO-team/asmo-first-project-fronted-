import { H } from "../../components/Htag/H";
import Input from "../../components/InputAuth/Input";
import userIcon from '../../assets/icons/user.svg';
import passwordIcon from '../../assets/icons/password.svg';
import { Link } from "react-router-dom";
const  Login = () => {
    return (
      <div className="bg-white w-[408px]  ">
        <form className="flex flex-col gap-[53px]">
          <H tag="h2">Login your account!</H>  
           <div className="flex flex-col gap-[10px]">
                <Input placeholder="Username" name="userName" type="text" logo={userIcon}/>
                <Input placeholder="Username2" type="password" name="userPassword" logo={passwordIcon}/>

                <button className="bg-[#A3DCFF] text-[16px] py-[16px] text-white">
                  Continue
                </button>
                <div className="flex gap-0">
                  <div className="text-[16px]">
                    don't have an account yet ?
                  </div>
                  <Link to="fdfef" className="text-[#A3DCFF] text-[16px]">
                    Create an account
                  </Link>
                </div>
           </div>
        </form>
      </div>
    )
}

export default Login;