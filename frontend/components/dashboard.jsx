import { DashboardBalance } from "../chunks/Dashboard/balance"
import { DashboardHeader } from "../chunks/Dashboard/headder"
import { DashboardUser } from "../chunks/Dashboard/user"


export const DashBoard = () => {
    document.body.style.backgroundColor = "White"
    return <div>
        <DashboardHeader />
        <DashboardBalance />
        <DashboardUser/>
    </div>
}