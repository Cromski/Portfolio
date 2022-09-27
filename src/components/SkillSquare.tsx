import React, {FC} from 'react'

interface Props{
    skillName: string
    pic: string
    skillRating: string
    bgColor: string
    outlineColor: string
}

const SkillSquare: FC<Props> = ({skillName, pic, skillRating, bgColor, outlineColor}) => (
    <div style={{ backgroundImage: `${outlineColor}`}} className='min-w-[135px] w-[14%] inline-block ml-[1%] mr-[1%] mb-[3%] rounded-2xl bg-gradient-to-r p-[3px] '>
        <div style={{ backgroundColor: `${bgColor}` }} className={` w-full content-center flex flex-col justify-between h-full text-white rounded-xl p-4
                        group duration-150 transition-all`}>
            <img className=' w-[85%] mx-auto mt-[6%] rounded-lg 
                            ' src={pic} />
            <div className=' h-16 flex justify-center'>
                <h1 className=' w-[95%] mt-[8px] inline-block leading-6 text-[20px] font-medium 
                                '>{skillName}</h1>
            </div>
            {/* <h1 className=' text-sm  italic mb-[3%]'>{skillRating}</h1> */}
        </div>
    </div>
)

export default SkillSquare

