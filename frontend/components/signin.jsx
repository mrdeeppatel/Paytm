import { useState } from "react"
import { Helding } from "../chunks/Signin_Login/helding"
import { Input } from "../chunks/Signin_Login/input"
import { Footer } from "../chunks/Signin_Login/footer"


export const SignIn = () => {
     document.body.style.backgroundColor="gray"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div className="flex justify-center m-20 items-center " >
        <div className="bg-white py-5 px-6 rounded-lg w-96">
            <Helding heading={"Sign In"} subheading={"Enter your credentials to access your account"} />
            <Input label={"Email"} placeholder={"jhondeo@example.com"} type={"text"} setState={setEmail} />
            <Input label={"Password"} placeholder={"!@#$%^&*"} type={"password"} setState={setPassword} />
            <Footer buttonTxt={"Sign In"} warnningTxt={"Don't have an account? "} route={"SignUp"} />
        </div>
    </div>

}