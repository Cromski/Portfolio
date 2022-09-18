import React, {FC} from 'react'

interface Props{
    hrefLink: string,
    icon: string,
    alt: string
}

const LinkIcons: FC<Props> = ({hrefLink, icon, alt}) => (
    <>
        <a href={hrefLink} target='_blank' className=" hover:-mt-3 mt-0 transition transform min-w-[30px] w-[1.8%] h-[1.8%] ml-[1.5px] mr-[1.5px] inline-block ">
            <img src={icon} alt={alt} className=" mx-auto my-auto " />
        </a>
    
    </>
)

export default LinkIcons