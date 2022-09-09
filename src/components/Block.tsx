import React, { FC } from 'react';

interface Props {
    header: string
    date: string
    thing: string
}

const Block: FC<Props> = ({header, date, thing}) => (
    <div className=' mx-auto  w-[80%] mb-7'>
        <h1 className=' float-left text-3xl '>{header}</h1>
        <h1 className=' float-left '   >{date}</h1>
        <h1>{thing}</h1>
    </div>
)

export default Block
