import { Page } from "../extra/types"
import ProfileSVG from '../../public/Profile.svg'

const info: Page = {
    heading: "About me",
    svg: ProfileSVG
}

const Profile = () => (
    <div className=" bg-cyan-900 h-full">
        <h1 className=" text-4xl text-neutral-300">{info.heading}</h1>
        <img src={info.svg} alt="svg" className=" w-20 mx-auto " />
    </div>
)

export default Profile