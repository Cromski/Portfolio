import React, {FC} from 'react'

interface Props{
    hrefLink: string,
    icon: string,
    alt: string
}

const LinkIcons: FC<Props> = ({hrefLink, icon, alt}) => (
    <>
        <a href={hrefLink} target='_blank' className=" hover:animate-wiggle transition transform w-[1.8%] h-[1.8%] ml-[0.1%] mr-[0.1%] inline-block ">
            <img src={icon} alt={alt} className=" mx-auto my-auto " />
        </a>
    
    </>
)

export default LinkIcons