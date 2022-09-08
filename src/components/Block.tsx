import React, { FC } from 'react';

interface Props {
    header: string
    date: string
    thing: string
}

const Block: FC<Props> = ({header, date, thing}) => {
    return(
        <div className=' text-neutral-300 mx-auto w-[30%]'>
            <h1>{header}</h1>
            <h1>{date}</h1>
            <h1>{thing}</h1>
        </div>
    )
}

export default Block
