import { Navigate } from "react-router-dom"

export const DashboardHeader = () => {

    const firstname = localStorage.getItem("firstname")
    
    if (!firstname) {
        return <Navigate to={"/signin"} />
    }

    return <div className="flex justify-between py-5 px-8 border-b-2">
        <div className=" text-xl font-bold">
            Payments App
        </div>
        <div className="flex gap-3 font-medium items-center">
            <div>
                Hello, {firstname}
            </div>
            <div className="flex bg-gray-100 justify-center h-8 w-8 rounded-full items-center ">{firstname[0].toUpperCase()}</div>

        </div>
    </div>
}