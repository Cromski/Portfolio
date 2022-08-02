import Profile from "../pages/Profile"
import Skills from "../pages/Skills"

const CombinePages = () => {
    return (
        <>
            <div className=' grid grid-cols-2 gap-1'>
                <div>
                    <Profile/>
                </div>
                <div>
                    <Skills/>
                </div>
            </div>
        </>
    )
}


export default CombinePages