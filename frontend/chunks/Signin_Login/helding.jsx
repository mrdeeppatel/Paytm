export const Helding = ({ heading, subheading }) => {

    return <div className="text-center">
        <div className="text-4xl font-bold">{heading}</div>
        <div className=" text-gray-500 m-2">{subheading}</div>
    </div>
}