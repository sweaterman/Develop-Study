import { Menu } from "./model/restaurant"

interface OwnProps extends Menu {
   // 눈에는 안보이지만 Menu 타입 다 가져왔음
   showBestMenuName(name:string): string
}

// interface 말고 타입에서 extends 같은 것을 사용할 때는?
type OwnProps2 = Menu & {
    // 추가할 것들 작성..
}

const BestMenu:React.FC<OwnProps> = ({name, price, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    )
}

export default BestMenu