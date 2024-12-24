import { useState } from "react"
import { Input } from "../chunks/Signin_Login/input"
import { Helding } from "../chunks/Signin_Login/helding"
import { Footer } from "../chunks/Signin_Login/footer"


export function SignUp() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    document.body.style.backgroundColor="gray"

    return <div className="flex justify-center m-20 items-center " >
        <div className="bg-white py-5 px-6 rounded-lg w-96">


            <Helding heading={"SignUp"} subheading={"Enter your information to create an account"} />

            <Input label={"First Name"} placeholder={"Jhon"} type={"text"} setState={setFirstname} />
            <Input label={"Last Name"} placeholder={"Doe"} type={"text"} setState={setLastName} />
            <Input label={"Email"} placeholder={"jhondeo@example.com"} type={"email"} setState={setEmail} />
            <Input label={"Password"} placeholder={"!@#$%^&*"} type={"password"} setState={setPassword} />

            <Footer buttonTxt={"Sign Up"} route={"Login"} warnningTxt={"Already have an account? "}

            />

        </div>
    </div>
}