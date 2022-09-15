import React, {FC} from 'react'

interface Props{
    hrefLink: string,
    icon: string,
    alt: string
}

const LinkIcons: FC<Props> = ({hrefLink, icon, alt}) => (
    <>
        <a href={hrefLink} target='_blank' className=" delay-1000 hover:delay-[0ms] hover:animate-wiggle transition transform min-w-[30px] w-[1.8%] h-[1.8%] ml-[1.5px] mr-[1.5px] inline-block ">
            <img src={icon} alt={alt} className=" mx-auto my-auto " />
        </a>
    
    </>
)

export default LinkIcons