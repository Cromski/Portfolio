import React, { FC, ReactNode } from 'react'
import Block from './Block'


interface Props {
    overHeader: string,
    children: ReactNode
}

const Thing: FC<Props> = ({ overHeader, children }) => (
    <div className='bg-slate-200 bg-opacity-5 border-2 inline-block w-[62%] rounded-2xl mt-[3%] group
                    '> {/* hover:rounded-md duration-300 transition-all */}
        <h1 className=" font-medium mt-3 text-3xl ">{overHeader}</h1>
        <hr className=' border-dashed mt-[1%] mb-[2%] w-[2%] mx-auto
                        transform transition-all group-hover:w-[10%]'></hr>
        <div className=' mx-auto'>
            {children}
        </div>
    </div>
)

export default Thing