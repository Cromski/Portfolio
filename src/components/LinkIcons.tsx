import React, {FC} from 'react'

interface Props{
    hrefLink: string,
    icon: string,
    alt: string
}

const LinkIcons: FC<Props> = ({hrefLink, icon, alt}) => (
    <>
        <a href={hrefLink} target='_blank' className=" w-[2.5%] ml-[0.1%] mr-[0.1%] inline-block ">
            <img src={icon} alt={alt} className=" rounded-lg mx-auto" />
        </a>
    
    </>
)

export default LinkIcons