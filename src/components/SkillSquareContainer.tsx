import { FC, ReactNode } from 'react'

interface Props{
    skillHeader: string
    children: ReactNode
}

const SkillSquareContainer: FC<Props> = ({skillHeader, children}) => {
    return (
        <div className=' inline-block min-w-[200px] w-1/3'>
            <h1 className=' font-medium text-3xl mb-[10px]'>{skillHeader}</h1>
            <div className=' flex-column mx-auto'>
                {children}
            </div>
        </div>
    )

}

export default SkillSquareContainer