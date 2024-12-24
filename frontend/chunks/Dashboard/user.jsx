export const DashboardUser = () => {

    return <div className=" py-5  px-8 ">
        <div className=" text-xl font-medium">
            Users
        </div>
        <div className=" pt-5">
            <input type="text" className=" w-full rounded-md border-2 px-2 py-1" placeholder="Search user.." />
        </div>

        <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-3 ">
                <div className="flex h-10 w-10 p-1 rounded-full justify-center items-center  bg-slate-200">U1</div>
                <div>User 1</div>
            </div>
            <div>
                <button className="bg-black text-white p-2 rounded-md">Send Money</button>
            </div>
        </div>

        <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-3 ">
                <div className="flex h-10 w-10 p-1 rounded-full justify-center items-center  bg-slate-200">U1</div>
                <div>User 2</div>
            </div>
            <div>
                <button className="bg-black text-white p-2 rounded-md">Send Money</button>
            </div>
        </div>

        <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-3 ">
                <div className="flex h-10 w-10 p-1 rounded-full justify-center items-center  bg-slate-200">U1</div>
                <div>User 3</div>
            </div>
            <div>
                <button className="bg-black text-white p-2 rounded-md">Send Money</button>
            </div>
        </div>
    </div>
}