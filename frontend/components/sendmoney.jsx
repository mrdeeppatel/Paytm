import { SendMoneyHealding } from "../chunks/SendMoney/healging"
import { Transfer } from "../chunks/SendMoney/Transfer"

export const SendMoney = () => {

    return <div className="flex h-screen bg-[#F3F5F7] ">
        <div className=" flex justify-center m-auto bg-white w-96 rounded-md shadow-md">

            <div className="w-full p-8">
                <SendMoneyHealding />
                <Transfer />
            </div>
        </div>
    </div>
}