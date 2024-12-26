function Input({ label, placeholder, type, setState,Val }) {

    return <div className="mt-4 font-[#303030]">
        <div>
            {label}
        </div>
        <div className=" mt-2">
            <input type={type} value={Val} className=" border-gray-200 border-2 rounded-md px-3 py-1 w-full" placeholder={placeholder} onChange={e => {
                setState(e.target.value)
            }} />
        </div>
    </div>
}

export { Input }