import { Page } from "../extra/types"
import ProfileSVG from '../assets/Profile.svg'
import { useContext, FC } from "react"
import PageContext from "../PageContext"
import Thing from "../components/Thing"
import Block from "../components/Block"
import LinkIcons from "../components/LinkIcons"
import tempFaceIcon from "../assets/IotaHeroes-Logo.jpg"
import instagramSVG from '../assets/InstagramSVG.svg'
import linkedinSVG from '../assets/LinkedInSVG.svg'
import youtubeSVG from '../assets/YoutubeSVG.svg'
import githubSVG from '../assets/GithubSVG.svg'

const info: Page = {
    miniHeading: "About me",
    bigHeading: "Jakob Henriksen",
    id: "Profile",
    svg: ProfileSVG,
    color: "#025c00"
}

const Profile: FC<{}> = () => {
    const pageContext = useContext(PageContext)
    
    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-full" >

        {pageContext.currentPage === info.id ? <PageContent /> : <MinimizedPage/>}
        
    </div>
)}

const PageContent: FC<{}> = () => {
    const pageContext = useContext(PageContext)

    return (
        <div style={{ backgroundColor: `${info.color}`}} className='overflow-y-scroll h-screen scrollbar-hide'> 
            
            <h1 className="pt-[3%] pb-6 text-4xl cursor-pointer
                           transition-all hover:tracking-wider" 
                onClick={() => pageContext.setCurrentPage("home")}
                           >Jakob Henriksen</h1>
            <img src={tempFaceIcon} alt="me" className="rounded-[40px] min-w-[170px] w-[17%] mx-auto mt-6
                                                        grayscale-0 duration-100 transition-all hover:grayscale-[20%] " />
            
            <div className=" flex-row mt-5 w-full">
                <LinkIcons hrefLink={'https://www.github.com/cromski'} alt={'github'} icon={githubSVG} />
                <LinkIcons hrefLink={'https://www.youtube.com/c/krowell'} alt={'youtube'} icon={youtubeSVG} />
                <LinkIcons hrefLink={'https://www.linkedin.com/in/jakob-henriksen-9863b8243/'} alt={'linkedin'} icon={linkedinSVG} />
                <LinkIcons hrefLink={'https://www.instagram.com/kr0well/'} alt={'instagram'} icon={instagramSVG} />
             </div>
            

            <div className=" mx-auto">
                <div className=" grid-cols-2">
                    <Thing overHeader={"About me"}>
                    
                    </Thing>
                    <Thing overHeader={"Contact"}>
                    
                    </Thing>
                </div>
                
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
                        <p className="mt-[20px]">IT University of Copenhagen</p>
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
    const pageContext = useContext(PageContext)

    return (
        <div style={{ backgroundColor: `${info.color}`}} className=" h-full pt-[20%] " onClick={() => pageContext.setCurrentPage(info.id)}>
            <h1 className="  inline-block text-4xl text-neutral-300 ">{info.miniHeading}</h1>
            <img src={info.svg} alt="svg" className="  w-[80px] mx-auto mt-[1%] " />
        </div>
    )
}


export default Profile