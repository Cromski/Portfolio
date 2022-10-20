import { FC, ReactNode } from 'react'

interface Props{
    skillHeader: string
    children: ReactNode
}

const SkillSquareContainer: FC<Props> = ({skillHeader, children}) => {
    return (
        <div className=' 
                        realsm:inline-block realsm:align-top realsm:min-w-[200px] realsm:w-[300px] '>
            <h1 className=' font-medium text-3xl mb-[10px]'>{skillHeader}</h1>
            <div className=' content-center flex-row w-[85%] mx-auto
                            realsm:flex-column realsm:w-full realsm:content-start '>
                {children}
            </div>
        </div>
    )

}

export default SkillSquareContainer