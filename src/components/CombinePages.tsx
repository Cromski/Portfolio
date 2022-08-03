import Profile from "../pages/Profile"
import Skills from "../pages/Skills"
import {promises as fsPromises} from "fs"

const returnsTwo = (): number => {
    return 2
}

const CombinePages = () => {
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${returnsTwo}, 1fr)`  }}> {/* className={`grid grid-cols-[repeat(2,_minmax(0px,_1fr))] gap-1`} */} {/* grid-cols-[${numberOfPages}px_minmax(0px,_1fr)] */}
                <div>
                    <Profile/>
                </div>
                <div>
                    <Skills/>
                </div>
            </div>
        </>
    )
}

// async function numberOfPages(): Promise<number> {
//     console.log('en')
//     var dir = ' ../pages '
//     console.log('to')
//     const files =  await fsPromises.readdir(dir)
//     console.log('tre')
//     console.log(files.length)
//     return files.length
// }

export default CombinePages