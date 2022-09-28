import React, {FC} from 'react'

interface Props{
    skillName: string
    pic: string
    skillRating: string
}

const SkillSquare: FC<Props> = ({skillName, pic, skillRating}) => (
    <div className=' h-16 w-[90%] my-[6px] mx-auto content-center bg-slate-200 bg-opacity-5 border-2 rounded-2xl
                     group hover:bg-opacity-[0.15] duration-150 transition-all'>
        <img className=' inline-block h-[85%] my-auto rounded-lg float-left ml-1 mt-1
                        ' src={pic} />
        <div className=' inline-block h-full w-[70%]'>
            <h1 className=' w-full leading-6 text-[20px] font-medium 
                             '>{skillName}</h1>
        </div>
        {/* <h1 className=' text-sm  italic mb-[3%]'>{skillRating}</h1> */}
    </div>
)

export default SkillSquare

