import { Page } from "../extra/types"
import ProfileSVG from '../../public/Profile.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import Thing from "../components/Thing"

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
        <div className=' overflow-y-scroll max-h-screen '> {/* overflow-y-auto */}
            <h1 className=" mt-[10%] mb-12 text-4xl ">Jakob Henriksen</h1>
            <img src="../../public/IotaHeroes-Logo.jpg" alt="svg" className=" rounded-[40px] w-[230px] mx-auto " />
            
            <div className=" mx-auto">
                <Thing overHeader={'Education'}></Thing>
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