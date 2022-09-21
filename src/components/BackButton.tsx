import React, { FC, useContext } from "react"
import PageContext from "../PageContext"


const BackButton: FC<{}> = () => {
    const pageContext = useContext(PageContext)

    return (
        <div className=" rounded-br-2xl min-h-[50px] min-w-[50px] bg-slate-200 bg-opacity-5 border-2 absolute"
            onClick={() => pageContext.setCurrentPage("home")}>
            <h1 className=" flex ml-[30%] mt-[20%]">&#8920;</h1> 
        </div>
    )
}

export default BackButton