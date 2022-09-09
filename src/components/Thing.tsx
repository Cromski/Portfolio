import React, { FC } from 'react'
import Block from './Block'


interface Props {
    overHeader: string
}

const Thing: FC<Props> = ({ overHeader }) => (
    <div className=' bg-slate-200 bg-opacity-5 border-2 inline-block w-[50%] rounded-2xl mt-[3%]'>
        <h1 className=" mt-3 text-3xl ">{overHeader}</h1>
        <div className=' mx-auto'>
            <Block header={'University'} date={'2020-2023'} thing={'IT University of Copenhagen'} />
            <Block header={'High school'} date={'2017-2020'} thing={'Sydkysten Gymnasium HTX'} />
        </div>
    </div>
)

export default Thing