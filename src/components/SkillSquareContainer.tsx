import { FC, ReactNode } from 'react'

interface Props{
    skillHeader: string
    children: ReactNode
}

const SkillSquareContainer: FC<Props> = ({skillHeader, children}) => {
    return (
        <div className=''>
            <h1 className=' font-medium text-3xl'>{skillHeader}</h1>
            <div className=' content-center flex-row w-[65%] mx-auto'>
                {children}
            </div>
        </div>
    )

}

export default SkillSquareContainer