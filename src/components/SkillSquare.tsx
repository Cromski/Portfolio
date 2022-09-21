import React, {FC} from 'react'

interface Props{
    skillName: string
    pic: string
    skillRating: string
}

const SkillSquare: FC<Props> = ({skillName, pic, skillRating}) => (
    <div className='inline-block ml-[1%] mr-[1%] mb-[3%] min-w-[135px] w-[18%] content-center bg-slate-200 bg-opacity-5 border-2 rounded-2xl'>
        <img className=' w-[85%] mx-auto mt-[6%] rounded-lg' src={pic} />
        <div className=' h-16 flex justify-center'>
            <h1 className=' w-[95%] mt-[8px] inline-block leading-6 text-[20px] font-medium '>{skillName}</h1>
        </div>
        {/* <h1 className=' text-sm  italic mb-[3%]'>{skillRating}</h1> */}
    </div>
)

export default SkillSquare

