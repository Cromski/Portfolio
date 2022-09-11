import React, { FC, ReactNode } from 'react';

interface Props {
    header: string
    date: string
    children: ReactNode
}

const Block: FC<Props> = ({header, date, children}) => (
    <div>
        <hr className='w-[0%]'></hr>
        <div className=' mx-auto  w-[80%] mb-11 flex-row' >
            <div className='flex-col float-left'>
                <h1 className=' text-[#EEE8AA] text-3xl '>{header}</h1>
                <h1 className='  '>{date}</h1>
            </div>
            <div className=' '>
                {children}
            </div>
            
        </div>
    </div>
)

export default Block
