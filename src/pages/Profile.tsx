import { Page } from "../extra/types"
import ProfileSVG from '../../public/Profile.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import Thing from "../components/Thing"
import Block from "../components/Block"
import LinkIcons from "../components/LinkIcons"
import tempFaceIcon from "../../public/IotaHeroes-Logo.jpg"
import youtubeLogo from '../../public/youtube-logo.png'

const info: Page = {
    miniHeading: "About me",
    bigHeading: "Jakob Henriksen",
    id: "Profile",
    svg: ProfileSVG,
    color: "#221b40"
}

const Profile = () => {
    const pageContext = useContext(PageContext)

    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-screen" onClick={() => pageContext.setCurrentPage(info.id)}>

        {pageContext.currentPage === info.id ? <PageContent/> : <MinimizedPage/>}
        
    </div>
)}

const PageContent = () => {
    return (
        <div className=' overflow-y-scroll max-h-screen '> {/* overflow-y-auto */}
            <h1 className=" mt-[3%] mb-12 text-4xl ">Jakob Henriksen</h1>
            <img src="../../public/IotaHeroes-Logo.jpg" alt="svg" className=" rounded-[40px] w-[17%] mx-auto " />
            
            <div className=" flex-row mt-5 w-full">
                <LinkIcons hrefLink={'https://www.github.com/cromski'} alt={'github'} icon={tempFaceIcon} />
                <LinkIcons hrefLink={'https://www.youtube.com/c/krowell'} alt={'youtube'} icon={youtubeLogo} />
                <LinkIcons hrefLink={'https://www.linkedin.com/in/jakob-henriksen-9863b8243/'} alt={'linkedin'} icon={tempFaceIcon} />
                <LinkIcons hrefLink={'https://www.instagram.com/kr0well/'} alt={'instagram'} icon={tempFaceIcon} />
             </div>
            

            <div className=" mx-auto">
                <Thing overHeader={'Experience'}>
                    <Block header={'Chr. Hansen'} date={'2020-present'}>
                        <p>IT Supporter</p>
                    </Block> 
                </Thing>
            </div>

            <div className=" mx-auto">
                <Thing overHeader={'Education'}>
                    <Block header={'University'} date={'2020-present'} >
                        <p>IT University of Copenhagen</p>
                        <p className=" text-sm">BSc - Software Development</p>
                    </Block>
                    <Block header={'High school'} date={'2017-2020'}>
                        <p>NEXT Sydkysten Gymnasium</p>
                        <p>HTX</p>
                    </Block>
                </Thing>
            </div>

            
           
        </div>
    )
}

const MinimizedPage = () => {
    return (
        <div>
            <h1 className=" relative text-4xl text-neutral-300 top-72 ">{info.miniHeading}</h1>
            <img src={info.svg} alt="svg" className=" relative w-[80px] mx-auto top-72 " />
        </div>
    )
}


export default Profile