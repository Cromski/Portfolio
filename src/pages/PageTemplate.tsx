import { Page } from '../extra/types'
import SkillSVG from '../../public/Skill.svg'
import { useContext } from "react"
import PageContext from "../PageContext"

const info: Page = {
    miniHeading: "Skills",
    bigHeading: "Skills",
    id: "TempId",
    svg: SkillSVG,
    color: "#291b40"
}

const PageTemplate = () => {
    const pageContext = useContext(PageContext)

    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-screen" onClick={() => pageContext.setCurrentPage(info.id)}>
        
        {pageContext.currentPage === info.id ? <PageContent/> : <MinimizedPage/>}
    </div>
    )
}

const PageContent = () => {
    return (
        <div style={{}} className=' overflow-y-auto max-h-screen scrollbar'>
            <h1 className=" text-4xl ">{info.bigHeading}</h1>
            <img src={info.svg} alt="svg" className=" w-[80px] mx-auto " />
            
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

export default PageTemplate