import { Page } from '../extra/types'
import SkillSVG from '../assets/Skill.svg'
import { useContext } from "react"
import PageContext from "../PageContext"
import SkillSquare from '../components/SkillSquare'
import TempFacePic from '../assets/IotaHeroes-Logo.jpg'
import SkillSquareContainer from '../components/SkillSquareContainer'

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
            <SkillSquareContainer skillHeader='Languages'>
                <SkillSquare skillName='JavaScript' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='TypeScript' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='C#' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='SQL' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='F#' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Go' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Java' pic={TempFacePic} skillRating='Experienced' />
            </SkillSquareContainer>
            
            <SkillSquareContainer skillHeader='Technologies'>
                <SkillSquare skillName='React' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='TailwindCSS' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Git' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Materialize' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Blazor' pic={TempFacePic} skillRating='Experienced' />
            </SkillSquareContainer>

            <SkillSquareContainer skillHeader='Other'>
                <SkillSquare skillName='Office 365' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='LaTeX' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Power apps' pic={TempFacePic} skillRating='Experienced' />
                <SkillSquare skillName='Service Now' pic={TempFacePic} skillRating='Experienced' />
            </SkillSquareContainer>
            
        </div>
    )
}

const MinimizedPage = () => {
    const pageContext = useContext(PageContext)
    return (
        <div style={{ backgroundColor: `${info.color}`}} className=' flex-col relative top-[40%] overflow-hidden ' onClick={() => pageContext.setCurrentPage(info.id)}>
            <h1 className="  inline-block text-4xl text-neutral-300 ">{info.miniHeading}</h1>
            <img src={info.svg} alt="svg" className="  w-[80px] mx-auto mt-[1%] " />
        </div>
    )
}

export default Skills