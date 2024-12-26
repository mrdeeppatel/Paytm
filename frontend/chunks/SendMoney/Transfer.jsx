import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams, Navigate } from "react-router-dom"
import { getToken } from "../../API/userApi"


export const Transfer = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams()
    const toUserName = params.get("name")

    const toUserId = params.get("id")
    const [amount, setAmount] = useState(0)

    // useEffect(() => {
    if (toUserId == undefined || toUserName == undefined) {


        console.log("No params in the URL")
        return <Navigate to={"/dashboard"} />
    }
    // }, [])

    async function transfermoney() {

        if (amount <= 0) {

            setAmount(0)
            alert("Only Positive numbers")
            return
        }
        const token = getToken()

        await axios.post("http://localhost:3001/api/v1/account/transfer", {
            to: toUserId,
            amount: amount,
        },
            {
                headers: {
                    Authorization: token
                }
            }).then(res => {

                alert("transferd Success")
            }).catch(err => {

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
    return <div className="mt-8 w-full">
        <div className="flex  items-center gap-3">

            <div className="flex justify-center items-center h-12 w-12 bg-[#20C65D] rounded-full text-xl text-white font-medium">
                {toUserName[0].toUpperCase()}
            </div>
            <div className=" items-center font-medium text-lg">
                {toUserName}
            </div>
        </div>
        <div className=" font-medium">
            Amount (in Rs)
        </div>
        <input type="number" value={amount} placeholder="Enter Amount" className=" border-2 w-full my-2 py-1 px-1.5 rounded-md" onChange={e => {

            setAmount(e.target.value)
        }} />

        <div className="flex  justify-center">
            <button className=" bg-[#20C65D] w-full py-2 rounded-md text-white" onClick={() => {
                transfermoney()
            }}>Invite Transfer</button>
        </div>
    </div>
}