import { StaticImage } from "gatsby-plugin-image";
import portrait from '../assets/portrait.jpg'

const portraitt = () => (
    <StaticImage src={portrait} 
                             alt="me" 
                             placeholder="blurred"
                             layout="fixed"
                             width={200}
                             height={200}/>
)

export default portrait