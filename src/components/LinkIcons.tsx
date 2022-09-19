import React, {FC} from 'react'

interface Props{
    hrefLink: string,
    icon: string,
    alt: string
}

const LinkIcons: FC<Props> = ({hrefLink, icon, alt}) => (
    <>
        <a href={hrefLink} target='_blank' className=" duration-[200ms] hover:w-[33px] transition-all min-w-[30px] w-[25px] ml-[1.5px] mr-[1.5px] inline-block ">
            <img src={icon} alt={alt} className=" mx-auto my-auto " />
        </a>
    
    </>
)

export default LinkIcons