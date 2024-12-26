import { useState } from "react"
import { DashboardBalance } from "../chunks/Dashboard/balance"
import { DashboardHeader } from "../chunks/Dashboard/headder"
import { DashboardUser } from "../chunks/Dashboard/user"
import { Navigate, useSearchParams } from "react-router-dom"

export const DashBoard = () => {


    document.body.style.backgroundColor = "White"
    return <div>
        <DashboardHeader/>
        <DashboardBalance />
        <DashboardUser />
    </div>
}


//Seating up the user name at login time