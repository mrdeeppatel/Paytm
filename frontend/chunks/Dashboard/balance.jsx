import axios from "axios"
import { useEffect, useState } from "react"
import { getToken } from "../../API/userApi"

export const DashboardBalance = () => {

    const [balance, setBalance] = useState(0)
    useEffect(() => {
        const token = getToken()
        axios.get("http://localhost:3001/api/v1/account/balance", {
            headers: {
                authorization: token
            }
        }).then(res => {
            setBalance(res.data.balance)
        })
    }, [])

    return <div className="  px-8 py-5">
        <div className=" text-xl font-medium">
            Your Balance ${balance}
        </div>
    </div>
}