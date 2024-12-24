
export const Footer = ({ buttonTxt, warnningTxt, route }) => {

    return <div className="mt-4 text-center">
        <button className=" bg-[#18181A] text-white w-full rounded-md py-1">{buttonTxt}</button>
        <div className="mt-2">  {warnningTxt}<a href=""><u>{route}</u></a>
        </div>
    </div>
}

function sing() {

}