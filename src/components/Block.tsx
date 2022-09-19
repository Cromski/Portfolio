import React, { FC, ReactNode } from 'react';

interface Props {
    header: string
    date: string
    children: ReactNode
}

const Block: FC<Props> = ({header, date, children}) => (
    <div>
        <hr className='w-[0%]'></hr>
        <div className=' mx-auto  w-[80%] mb-5 flex' >
            <div className='flex-col w-1/2 text-right inline-block mr-[5%]'>
                <h1 className=' text-[#EEE8AA] text-3xl '>{header}</h1>
                <h1 className=' italic '>{date}</h1>
                {/* <div className=' mr-[7%] border-r-2  border-gray-200' >&#8205;</div> */}
            </div>
            <div className=' w-1/2 '>
                {children}
            </div>
            
        </div>
    </div>
)

export default Block
