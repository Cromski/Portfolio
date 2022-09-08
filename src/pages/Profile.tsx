import { Page } from "../extra/types"
import ProfileSVG from '../../public/Profile.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import Block from "../components/Block"

const info: Page = {
    heading: "About me",
    svg: ProfileSVG,
    color: "#221b40"
}

const Profile = () => {
    const pageContext = useContext(PageContext)

    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-screen" onClick={() => pageContext.setCurrentPage("Profile")}>

        {pageContext.currentPage === "Profile" ? <PageContent/> : <MinimizedPage/>}
        
    </div>
)}

const PageContent = () => {
    return (
        <div style={{}} className=' overflow-y-scroll max-h-screen '> {/* overflow-y-auto */}
            <h1 className=" mt-[10%] mb-12 text-4xl ">Jakob Henriksen</h1>
            <img src="../../public/IotaHeroes-Logo.jpg" alt="svg" className=" rounded-[40px] w-[230px] mx-auto " />
            <h1 className=" text-3xl ">Education</h1>
            <div className="flex-col ">
                <Block header={'University'} date={'2020-2023'} thing={'IT University of Copenhagen'}></Block>
                <Block header={'High school'} date={'2017-2020'} thing={'Sydkysten Gymnasium HTX'}></Block>
            </div>
           
            
           


        </div>
    )
}

const MinimizedPage = () => {
    return (
        <div>
            <h1 className=" relative text-4xl text-neutral-300 top-72 ">{info.heading}</h1>
            <img src={info.svg} alt="svg" className=" relative w-[80px] mx-auto top-72 " />
        </div>
    )
}


export default Profile