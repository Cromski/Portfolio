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
    color: "#343434"
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
        <div className=" absolute w-full realsm:w-[90%] h-full overflow-hidden">
        
            <div style={{ backgroundColor: `${info.color}`}} className=' scroll-smooth overflow-y-scroll h-screen scrollbar-hide'> 
                
                <h1 className="pt-[3%] pb-6 text-4xl cursor-pointer
                            transition-all hover:tracking-wider" 
                    onClick={() => pageContext.setCurrentPage("home")}
                            >Jakob Henriksen</h1>
                <img src={tempFaceIcon} alt="me" className="rounded-[40px] min-w-[170px] w-[17%] mx-auto mt-6
                                                            duration-[50ms] hover:rounded-[10px] " />
                
                <div className=" flex h-[45px] w-full pt-3 pb-3 justify-center ">
                    <LinkIcons hrefLink={'https://www.github.com/cromski'} alt={'github'} icon={githubSVG} />
                    <LinkIcons hrefLink={'https://www.youtube.com/krowell'} alt={'youtube'} icon={youtubeSVG} />
                    <LinkIcons hrefLink={'https://www.linkedin.com/in/jakob-henriksen-9863b8243/'} alt={'linkedin'} icon={linkedinSVG} />
                    <LinkIcons hrefLink={'https://www.instagram.com/kr0well/'} alt={'instagram'} icon={instagramSVG} />
                </div>

                <div className=" mx-auto ">
                    <Thing overHeader={"About me"}>
                        <div className=" mb-3">
                            <p className=" w-3/4 mx-auto">My name is Jakob Henriksen and I'm currently on my third year, taking a Bachelor in Software Development.</p>
                        </div>
                    </Thing>
                </div>
                <div className=" mx-auto">
                    <Thing overHeader={"Information"}>
                        <div className=" mb-3">
                            <div className=" grid grid-cols-2 grid-flow-row gap-x-3">
                                <h1 className=" text-lg font-semibold col-span-2
                                               md:col-span-1 md:text-right ">Email:</h1>
                                <h1 className=" my-auto col-span-2 mb-2
                                                md:col-span-1 md:text-left md:mb-0">jakobrhenriksen@outlook.com</h1>
                                <h1 className=" text-lg font-semibold col-span-2
                                               md:col-span-1 md:text-right ">Phone:</h1>
                                <h1 className=" my-auto col-span-2 mb-2
                                                md:col-span-1 md:text-left md:mb-0">+45 1234 1234</h1>
                                <h1 className=" text-lg font-semibold col-span-2
                                               md:col-span-1 md:text-right ">Birthyear:</h1>
                                <h1 className=" my-auto col-span-2 mb-2
                                                md:col-span-1 md:text-left md:mb-0">2001</h1>
                            </div>
                        </div>
                    </Thing>
                </div>

                <div className=" mx-auto">
                    <Thing overHeader={'Experience'}>
                        <div className="mb-3">
                            <Block header={'Chr. Hansen'} date={'2020-present'}>
                                <p className=" mt-[10px] text-lg font-semibold">IT Supporter - Student worker</p>
                                <ul className=" list-disc inline-block ml-[6%] text-left w-full
                                                sm:ml-[20%]
                                                md:ml-[10%]">
                                    <li className="">Solving tickets in ServiceNow</li>
                                    <li>Managing Sharepoint sites</li>
                                    <li>Creating Power Apps</li>
                                    <li>Creating Automation flows</li>
                                </ul>
                            </Block> 
                        </div>
                    </Thing>
                </div>

                <div className=" mx-auto mb-32">
                    <Thing overHeader={'Education'}>
                        <div className="mb-3">
                            <Block header={'University'} date={'2020-present'} >
                                <p className="mt-[10px] text-lg font-semibold">IT University of Copenhagen</p>
                                <p className="">BSc - Software Development</p>
                            </Block>
                            <Block header={'High school'} date={'2017-2020'}>
                                <p className="mt-[10px] text-lg font-semibold">NEXT Sydkysten Gymnasium</p>
                                <p>HTX</p>
                            </Block>
                        </div>
                    </Thing>
                </div>

            </div>
        </div>
    )
}

const MinimizedPage = () => {
    const pageContext = useContext(PageContext)

    return (
        <div className=' h-full' onClick={() => pageContext.setCurrentPage(info.id)}>
            <div style={{ backgroundColor: `${info.color}`}} className=" flex-col relative top-[40%] overflow-hidden " onClick={() => pageContext.setCurrentPage(info.id)}> {/*put pt-20% in maybe line below */}
                
                <h1 className=" cursor-default inline-block text-4xl text-neutral-300">{info.miniHeading}</h1>
                <img src={info.svg} alt="svg" className="  w-[80px] mx-auto mt-[1%] " />
            
            </div>
        </div>
    )
}


export default Profile