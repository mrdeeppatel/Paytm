import { useState } from "react"
import { Helding } from "../chunks/Signin_Login/helding"
import { Input } from "../chunks/Signin_Login/input"
import { Footer } from "../chunks/Signin_Login/footer"
import { userSignin } from "../API/userApi"
import { Link } from "react-router-dom"


export const SignIn = () => {
    document.body.style.backgroundColor = "gray"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div className="flex justify-center m-20 items-center " >
        <div className="bg-white py-5 px-6 rounded-lg w-96">
            <Helding heading={"Sign In"} subheading={"Enter your credentials to access your account"} />
            <Input label={"Email"} placeholder={"deojhon@example.com"} type={"text"} setState={setEmail} Val={email} />
            <Input label={"Password"} placeholder={"********"} type={"password"} setState={setPassword} Val={password} />

            <div className="mt-4 text-center">
                <button className=" bg-[#18181A] text-white w-full rounded-md py-1" onClick={() => {
                    userSignin({ email: email, pass: password })
                }}>Sign In</button>
                <div className="mt-2">Don't have an account?
                    <Link to={"/signup"}><u>SignUp</u></Link>

                </div>
            </div>
        </div>
    </div>

}

