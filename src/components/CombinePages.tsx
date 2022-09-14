import Profile from "../pages/Profile"
import Skills from "../pages/Skills"
import { useContext } from "react"
import PageContext from "../PageContext"
import { useMediaQuery } from 'react-responsive'

const amountOfPages:number = 2;

const CombinePages = () => {

    const pageContext = useContext(PageContext)

    const isSmall = useMediaQuery( { query: '(max-width: 1020px)' } )

    return(
        <div className="">
            { isSmall ? <SmallScreen /> : <BigScreen />}
        </div>
    )
}

function hmmm(pc: string): string[]{
    switch (pc){
        case "Profile":
            return ['span 9 / span 9','span 1 / span 1']
        case "Skills":
            return ['span 1 / span 1','span 9 / span 9']
        case "home":
            return ['span 5 / span 5','span 5 / span 5']
        default:
            return ['span 5 / span 5','span 5 / span 5']
    } 
}

const BigScreen = () => {
    const pageContext = useContext(PageContext)

    return (

        <div className={` gap-[3px] grid h-screen  grid-cols-10 `} > 
            {/* 1fr,_minmax(0px,_1fr) */}
            {/* grid-cols-[${hmmm(pageContext.currentPage)}] lg:grid-cols-1 */}

            <div style={{ gridColumn: hmmm(pageContext.currentPage)[0]}} className={`  `}>
                <Profile />
            </div>
            <div style={{ gridColumn: hmmm(pageContext.currentPage)[1]}} className={`  `}>
                <Skills />
            </div>
        </div>
    )
}

const SmallScreen = () => {
    const pageContext = useContext(PageContext)

    {
        if (pageContext.currentPage === "Profile") {
            return (
                <div>
                    <Profile />
                </div>
            )
        } else {
            if (pageContext.currentPage === "Skills") {
                return (
                    <div>
                        <Skills />
                    </div>
                )
            } else {
                return (
                    <div className={` gap-[3px] grid h-screen grid-rows-2 `} > 

                        <div className={` row-span-1 overflow-scroll scrollbar-hide `}>
                            <Profile />
                        </div>
                        <div className={` row-span-1 overflow-scroll scrollbar-hide `}>
                            <Skills />
                        </div>
                    </div>
                )
            }
            
        }
    }
    
    return (

        <div className={` gap-[3px] grid h-screen grid-rows-2 `} > 

            <div className={` row-span-1 overflow-scroll scrollbar-hide `}>
                <Profile />
            </div>
            <div className={` row-span-1 overflow-scroll scrollbar-hide `}>
                <Skills />
            </div>
        </div>

    )
}


export default CombinePages