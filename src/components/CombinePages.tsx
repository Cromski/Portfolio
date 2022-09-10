import Profile from "../pages/Profile"
import Skills from "../pages/Skills"
import { useContext } from "react"
import PageContext from "../PageContext"

const amountOfPages:number = 2;

const CombinePages = () => {

    const pageContext = useContext(PageContext)

    return(
        <div  style={{ display: 'grid', gridTemplateColumns: `${hmmm(pageContext.currentPage)}`, gap: '3px'}} className="  min-h-screen max-h-screen " > 
    {/* style={{ display: 'grid', gridTemplateColumns: `repeat(${amountOfPages}, 1fr)` } */} 
    {/* className={`grid grid-cols-[repeat(2,_minmax(0px,_1fr))] gap-1`} */} 
    {/*             grid-cols-[${numberOfPages}px_minmax(0px,_1fr)] */}
            <div>
                <Profile />
            </div>
            <div>
                <Skills />
            </div>
        </div>
    )
}

function hmmm(pc: string){
    switch (pc){
        case "Profile":
            return `9fr 1fr`
        case "Skills":
            return `1fr 9fr`
        default:
            return `1fr 1fr`
    }
}

export default CombinePages