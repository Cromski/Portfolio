import { Page } from '../extra/types'
import SkillSVG from '../assets/Skill.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import SkillSquare from '../components/SkillSquare'
import TempFacePic from '../assets/IotaHeroes-Logo.jpg'

const info: Page = {
    miniHeading: "Skills",
    bigHeading: "Skills",
    id: "Skills",
    svg: SkillSVG,
    color: "#291b40"
}

const Skills = () => {
    const pageContext = useContext(PageContext)

    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-full" >
        
        {pageContext.currentPage === info.id ? <PageContent/> : <MinimizedPage/>}
    </div>
    )
}

const PageContent = () => {
    const pageContext = useContext(PageContext)
    return (
        <div style={{ backgroundColor: `${info.color}`}} className=' overflow-y-auto h-screen scrollbar-hide'>
            <h1 className=" pt-[3%] pb-6 text-4xl cursor-pointer
                           transition-all hover:tracking-wider"
                onClick={() => pageContext.setCurrentPage("home")}
                >{info.bigHeading}</h1>
            <img src={info.svg} alt="svg" className=" w-[80px] mx-auto " />
            <div className=' content-center flex-row w-[65%] mx-auto'>
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
            </div>
            
        </div>
    )
}

const MinimizedPage = () => {
    const pageContext = useContext(PageContext)
    return (
        <div style={{ backgroundColor: `${info.color}`}} className='h-full  ' onClick={() => pageContext.setCurrentPage(info.id)}>
            <h1 className="  inline-block pt-[20%] text-4xl text-neutral-300 ">{info.miniHeading}</h1>
            <img src={info.svg} alt="svg" className="  w-[80px] mx-auto mt-[1%] " />
        </div>
    )
}

export default Skills