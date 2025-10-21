import { H } from "../../components/Htag/H";
import Input from "../../components/InputAuth/Input";
import userIcon from '../../assets/icons/user.svg';
import passwordIcon from '../../assets/icons/password.svg';
const Register = () => {
    return (
      <div className="bg-white w-[408px]  ">
        <form className="flex flex-col gap-[53px]">
          <H tag="h2">Create your account</H> 
          <div className="flex flex-col gap-[28px]">
            <p className="text-[16px] sora">enter your full details</p>
            <div className="flex flex-col gap-[10px]">
                <Input placeholder="Username" name="userName" type="text" logo={userIcon}/>
                <Input placeholder="Username2" type="password" name="userPassword" logo={passwordIcon}/>
                <div className="flex gap-[12px] items-center">
                    <input type="checkbox" className="w-[14px] h-[14px] bg-[#56BFFF]"/>
                    <p className="text-[#56BFFF] text-[14px]">remember me</p>
                </div>
                <button>
                    
                </button>
            </div>
          </div> 
        </form>
      </div>
    )
}

export default Register;