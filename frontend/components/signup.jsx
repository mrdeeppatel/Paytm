import { useState } from "react"
import { Input } from "../chunks/Signin_Login/input"
import { Helding } from "../chunks/Signin_Login/helding"
import { Footer } from "../chunks/Signin_Login/footer"
import { userSignup } from "../API/userApi"
import { Link } from "react-router-dom"

export function SignUp() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    document.body.style.backgroundColor = "gray"


    return <div className="flex justify-center m-20 items-center " >
        <div className="bg-white py-5 px-6 rounded-lg w-96">


            <Helding heading={"SignUp"} subheading={"Enter your information to create an account"} />

            <Input label={"First Name"} placeholder={"Jhon"} type={"text"} setState={setFirstname} />
            <Input label={"Last Name"} placeholder={"Doe"} type={"text"} setState={setLastName} />
            <Input label={"Email"} placeholder={"jhondeo@example.com"} type={"email"} setState={setEmail} />
            <Input label={"Password"} placeholder={"********"} type={"password"} setState={setPassword} />
            {/* <Footer buttonTxt={"Sign Up"} route={"Login"} warnningTxt={"Already have an account? "}/> */}
            <div className="mt-4 text-center">

                <button className=" bg-[#18181A] text-white w-full rounded-md py-1" onClick={() => {

                    userSignup({ fname: firstname, lname: lastname, email: email, pass: password })

                }}>Sign Up</button>
                <div className="mt-2"> Already have an account?
                    <Link to={"/signin"}>
                        <u>SignIn</u>
                    </Link>
                </div>
            </div>

        </div>
    </div>
}