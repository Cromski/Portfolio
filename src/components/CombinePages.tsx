import Profile from "../pages/Profile"
import Skills from "../pages/Skills"
import amountOfPages from "../amountOfPages.json"

const returnsTwo = (): number => {
    return amountOfPages.amount
}

const CombinePages = () => (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${returnsTwo()}, 1fr)` }}> {/* className={`grid grid-cols-[repeat(2,_minmax(0px,_1fr))] gap-1`} */} {/* grid-cols-[${numberOfPages}px_minmax(0px,_1fr)] */}
        <div>
            <Profile />
        </div>
        <div>
            <Skills />
        </div>
    </div>
)

export default CombinePages