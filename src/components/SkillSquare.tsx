import React, {FC} from 'react'

interface Props{
    skillName: string
    pic: string
    skillRating: string
}

const SkillSquare: FC<Props> = ({skillName, pic, skillRating}) => (
    <div className='inline-block ml-[1%] mr-[1%] mb-[3%] min-w-[135px] w-[14%] content-center bg-slate-200 bg-opacity-5 border-2 rounded-2xl
                     realsm:h-16 realsm:w-[90%] realsm:my-[6px] realsm:mx-auto  
                     group hover:bg-opacity-[0.15] duration-150 transition-all'>
        <img className=' w-[85%] mx-auto mt-[6%] rounded-lg aspect-square
                         realsm:inline-block realsm:h-[85%] realsm:mx-0 realsm:my-auto realsm:float-left realsm:ml-1 realsm:mt-1 realsm:w-fit
                        ' src={pic} />
        <div className=' h-16 flex justify-center
                         realsm:inline-block realsm:h-full realsm:w-[70%]'>
            <h1 className=' w-[95%] mt-[8px] inline-block leading-6 text-[20px] font-medium
                            realsm:w-full  realsm:my-auto 
                             '>{skillName}</h1>
        </div>
        {/* <h1 className=' text-sm  italic mb-[3%]'>{skillRating}</h1> */}
    </div>
)

export default SkillSquare

