import { FC, ReactNode } from 'react'

interface Props{
    skillHeader: string
    children: ReactNode
}

const SkillSquareContainer: FC<Props> = ({skillHeader, children}) => {
    return (
        <div className=''>
            <h1 className=' font-medium text-3xl mb-[10px]'>{skillHeader}</h1>
            <div className=' content-center flex-row w-[75%] mx-auto
                            realsm:w-[75%]'>
                {children}
            </div>
        </div>
    )

}

export default SkillSquareContainer