import { Page } from '../extra/types'
import SkillSVG from '../assets/Skill.svg'
import { useContext, ReactNode, FC } from "react"
import PageContext from "../PageContext"
import SkillSquare from '../components/SkillSquare'
import TempFacePic from '../assets/IotaHeroes-Logo.jpg'
import SkillSquareContainer from '../components/SkillSquareContainer'
import JavaScriptLogo from '../assets/js.png'
import TypeScriptLogo from '../assets/ts.png'
import CSharpLogo from '../assets/csharp.png'
import SQLLogo from '../assets/sql.png'
import PythonLogo from '../assets/python.png'
import FSharpLogo from '../assets/fsharp.png'
import GoLogo from '../assets/go.png'
import JavaLogo from '../assets/java.png'
import ReactLogo from '../assets/react.png'
import TailwindCSSLogo from '../assets/tailwindcss.png'
import GitLogo from '../assets/git.png'
import BlazorLogo from '../assets/blazor.png'
import JetBrainsLogo from '../assets/jetbrains.png'
import VSCodeLogo from '../assets/vscode.png'
import VisualStudioLogo from '../assets/visualstudio.png'
import PhotoshopLogo from '../assets/photoshop.png'
import PremiereProLogo from '../assets/premierepro.png'
import DesignerLogo from '../assets/designer.png'
import PhotoLogo from '../assets/photo.png'
import Office365Logo from '../assets/o365.png'
import LatexLogo from '../assets/latex.png'

const info: Page = {
    miniHeading: "Skills",
    bigHeading: "Skills",
    id: "Skills",
    svg: SkillSVG,
    color: "#291b40"
}

interface Props {
    children?: ReactNode
}

const Skills: FC<Props> = ({children}) => {
    const pageContext = useContext(PageContext)

    return (
    <div style={{ backgroundColor: `${info.color}`}} className=" h-full" >
        
        {pageContext.currentPage === info.id ? <PageContent>{children}</PageContent> : <MinimizedPage/>}
    </div>
    )
}

const PageContent: FC<Props> = ({children}) => {
    const pageContext = useContext(PageContext)
    return (
        <div className=" absolute w-full realsm:w-[90%] h-full overflow-hidden">
            {children}
            <div style={{ backgroundColor: `${info.color}`}} className=' overflow-y-auto h-screen scrollbar-hide'>
                <h1 className=" pt-[3%] pb-6 text-4xl cursor-pointer
                            transition-all hover:tracking-wider"
                    onClick={() => pageContext.setCurrentPage("home")}
                    >{info.bigHeading}</h1>
                <img src={info.svg} alt="svg" className=" w-[80px] mx-auto " />
                <SkillSquareContainer skillHeader='Languages'>
                    <SkillSquare skillName='JavaScript' pic={JavaScriptLogo} skillRating='Experienced' />
                    <SkillSquare skillName='TypeScript' pic={TypeScriptLogo} skillRating='Experienced' />
                    <SkillSquare skillName='C#' pic={CSharpLogo} skillRating='Experienced' />
                    <SkillSquare skillName='SQL' pic={SQLLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Python' pic={PythonLogo} skillRating='Experienced' />
                    <SkillSquare skillName='F#' pic={FSharpLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Go' pic={GoLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Java' pic={JavaLogo} skillRating='Experienced' />
                </SkillSquareContainer>
                
                <SkillSquareContainer skillHeader='Technologies'>
                    <SkillSquare skillName='Git' pic={GitLogo} skillRating='Experienced' />
                    <SkillSquare skillName='React' pic={ReactLogo} skillRating='Experienced' />
                    <SkillSquare skillName='TailwindCSS' pic={TailwindCSSLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Blazor' pic={BlazorLogo} skillRating='Experienced' />
                </SkillSquareContainer>

                <SkillSquareContainer skillHeader={`IDE's and editors`}>
                    <SkillSquare skillName='Jetbrains apps' pic={JetBrainsLogo} skillRating='Experienced' />
                    <SkillSquare skillName='VS Code' pic={VSCodeLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Visual Studio' pic={VisualStudioLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Adobe Photoshop' pic={PhotoshopLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Adobe Premiere Pro' pic={PremiereProLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Affinity Designer' pic={DesignerLogo} skillRating='Experienced' />
                    <SkillSquare skillName='Affinity Photo' pic={PhotoLogo} skillRating='Experienced' />
                </SkillSquareContainer>

                <SkillSquareContainer skillHeader='Other'>
                    <SkillSquare skillName='Office 365' pic={Office365Logo} skillRating='Experienced' />
                    <SkillSquare skillName='LaTeX' pic={LatexLogo} skillRating='Experienced' />
                    {/* <SkillSquare skillName='Power apps' pic={TempFacePic} skillRating='Experienced' />
                    <SkillSquare skillName='Service Now' pic={TempFacePic} skillRating='Experienced' /> */}
                </SkillSquareContainer>
                
            </div>
        </div>
    )
}

const MinimizedPage = () => {
    const pageContext = useContext(PageContext)
    return (
        <div className=' h-full' onClick={() => pageContext.setCurrentPage(info.id)}>
            <div style={{ backgroundColor: `${info.color}`}} className=' flex-col relative top-[40%] overflow-hidden ' >
                <h1 className=" cursor-default inline-block text-4xl text-neutral-300 ">{info.miniHeading}</h1>
                <img src={info.svg} alt="svg" className="  w-[80px] mx-auto mt-[1%] " />
            </div>
        </div>
    )
}

export default Skills