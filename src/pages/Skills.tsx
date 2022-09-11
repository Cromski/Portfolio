import { Page } from '../extra/types'
import SkillSVG from '/images/Skill.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import SkillSquare from '../components/SkillSquare'
import TempFacePic from '/images/IotaHeroes-Logo.jpg'

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
    <div style={{ backgroundColor: `${info.color}`}} className=" h-screen" onClick={() => pageContext.setCurrentPage(info.id)}>
        
        {pageContext.currentPage === info.id ? <PageContent/> : <MinimizedPage/>}
    </div>
    )
}

const PageContent = () => {
    return (
        <div style={{}} className=' overflow-y-auto max-h-screen scrollbar-hide'>
            <h1 className=" mt-[3%] mb-12 text-4xl ">{info.bigHeading}</h1>
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
    return (
        <div className=' h-screen sticky'>
            <h1 className=" relative text-4xl text-neutral-300 top-72 ">{info.miniHeading}</h1>
            <img src={info.svg} alt="svg" className=" relative w-[80px] mx-auto top-72 " />
        </div>
    )
}

export default Skills