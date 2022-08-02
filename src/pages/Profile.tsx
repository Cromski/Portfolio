import { Page } from "../extra/types"
import ProfileSVG from '../../public/Profile.svg'

var info: Page = {
    heading: "helsfdfsfsfdsflo",
    svg: ProfileSVG
}

const Profile = () => {
    return (
        <>
            <div className=" bg-cyan-900 h-full">
                <h1 className=" text-4xl text-neutral-300">{info.heading}</h1>
                <img src={info.svg} alt="svg" className=" w-7 mx-auto " />
            </div>
        </>

    )
    
}

export default Profile