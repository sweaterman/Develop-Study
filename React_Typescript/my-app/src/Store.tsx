// Store 컴포넌트 파일

import { Address, Restaurant } from "./model/restaurant"

interface OwnProps {
    info: Restaurant,
    changeAddress(address:Address): void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>{info.name}</div>
    )
}

export default Store