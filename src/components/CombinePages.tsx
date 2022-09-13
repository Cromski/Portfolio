import Profile from "../pages/Profile"
import Skills from "../pages/Skills"
import { useContext } from "react"
import PageContext from "../PageContext"

const amountOfPages:number = 2;

const CombinePages = () => {

    const pageContext = useContext(PageContext)

    return(
        <div className={` grid-cols-[${hmmm(pageContext.currentPage)}] gap-[3px] grid column min-h-screen max-h-screen`} > 
            <div>
                <Profile />
            </div>
            <div>
                <Skills />
            </div>
        </div>
    )
}

function hmmm(pc: string): string{
    switch (pc){
        case "Profile":
            return `9fr,_minmax(0px,_1fr)`
        case "Skills":
            return `1fr,_minmax(0px,_9fr)`
        default:
            return `1fr,_minmax(0px,_1fr)`
    }
}

export default CombinePages