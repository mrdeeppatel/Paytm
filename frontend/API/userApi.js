import axios from "axios"
import { userListAtom } from "../Recoil/atom"
import { RecoilRoot, useSetRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

// const setUserListAtom = useSetRecoilState(userListAtom)
const userSignup = async ({ fname, lname, email, pass }) => {


    await axios.post("http://localhost:3001/api/v1/user/signup", {}, {
        headers: {
            username: email,
            password: pass,
            firstname: fname,
            lastname: lname
        }
    }).then((res) => {

        alert("User Created")
        // navigate("/signin")

        window.location.href = "http://localhost:5173/signin"
    }).catch((err) => {

        if (err.response) {
            alert(err.response.data.msg)
            console.log(err.response)
        }

        else if (err.request) {
            alert("No Response received")
        }

        else {
            alert(err)
        }

    })
}
/////////////////////////////////////////////////////////////////////////
const userSignin = async ({ email, pass }) => {

    axios.post("http://localhost:3001/api/v1/user/signin", {}, {

        headers: {
            username: email,
            password: pass
        }
    }).then(res => {

        
        alert("Sign Success")
        localStorage.setItem("firstname", res.data.firstname)
        document.cookie = `token=${res.data.token}; max-age=3600; path=/;`
        window.location.href = `http://localhost:5173/dashboard`
    }).catch(err => {

        if (err.response) {
            alert(err.response.data.msg)
            console.log(err.response)
        }
        else if (err.request) {
            alert("No Response received")

        } else {
            alert("Somthing went wrong")
        }
    })
}
/////////////////////////////////////////////////////////////////////////
const searchUser = async ({ name }) => {
    const token = getToken()

    if (!token) {

        return
    }

    await axios.get("http://localhost:3001/api/v1/user/bulk", {
        name: name ? name : ""
    }, {
        headers: {
            authorization: token
        }
    }).then(res => {

        console.log(res.data)
        setUserListAtom(res.data)

    })
}

/////////////////////////////////////////////////////////////////////////
function getToken() {

    const cookies = document.cookie

    const arr = cookies.split(";")

    let token = undefined

    arr.map(obj => {
        if (obj.trim().startsWith("token")) {
            token = obj.trim().split("=")[1]
        }
    })

    if (!token) {

        alert("No Saved token")
        window.location.href = "http://localhost:5173/signin"
        return token
    }

    return "Bearer " + token
}
export {
    userSignup,
    userSignin,
    searchUser,
    getToken
}