import { Page } from '../extra/types'
import SkillSVG from '../../public/Skill.svg'

const info: Page = {
    heading: "Skills",
    svg: SkillSVG,
}

const Skills = () => (
    <div className=" bg-cyan-900 h-full">
        <h1 className=" text-4xl text-neutral-300">{info.heading}</h1>
        <img src={info.svg} alt="svg" className=" w-[80px] mx-auto " />
    </div>
)

export default Skills