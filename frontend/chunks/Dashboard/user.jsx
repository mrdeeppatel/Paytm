import axios from "axios"
import { useEffect, useState } from "react"
import { getToken } from "../../API/userApi"
import { useNavigate } from "react-router-dom"


export const DashboardUser = () => {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")
    const navigate = useNavigate()

    useEffect(() => {

        const timeout = setTimeout(() => {

            const token = getToken()
            console.log("called")
            if (!token) {
                alert("No Saved Token")
                return
            }

            axios.get("http://localhost:3001/api/v1/user/bulk", {
                params: {
                    name: filter
                },
                headers: {
                    Authorization: token
                }
            }).then(res => {
                console.log(res.data.users)
                setUsers(res.data.users)
            })

        }, 500)

        return () => {
            clearTimeout(timeout)
        }

    }, [filter])


    return <div className=" py-5  px-8 ">
        <div className=" text-xl font-medium">
            Users
        </div>
        <div className=" pt-5">
            <input type="text" className=" w-full rounded-md border-2 px-2 py-1" placeholder="Search user.." onChange={e => {
                setFilter(e.target.value)
            }} />
        </div>

        {users.map(obj => {

            return <div key={obj.id} className="flex justify-between items-center mt-8">
                <div className="flex items-center gap-3 ">
                    <div className="flex h-10 w-10 p-1 rounded-full justify-center items-center  bg-slate-200">{obj.firstname[0] + "" + obj.lastname[0]}</div>
                    <div>{obj.firstname} {obj.lastname}</div>
                </div>
                <div>
                    <button className="bg-black text-white p-2 rounded-md" onClick={() => {

                        navigate(`/Send?name=${obj.firstname}&id=${obj.id}`)
                    }}>Send Money</button>
                </div>
            </div>

        })}


    </div>
}
