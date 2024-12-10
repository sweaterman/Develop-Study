// 타입은 interface, type 두 가지 방법으로 만들 수 있다.
// 그렇게 큰 차이는 없는데 사용하는 문법이랑 함수가 조금 다름

// Number와 number의 차이? 두 가지는 다른 타입이다.
// Number => interface type (공식문서에서 사용하지 않는게 좋다고 권고)
// number => 원시 type

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[]
}

export type Address = {
    city: string;
    detail: string;
    zipCode?: Number; // 물음표붙이면 있을수도있고, 없을수도있고..  조심해서쓰기
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}


// 위에서 설정한 타입 중 속성 뭔가 하나를 빼고 싶다면..?
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// 선택해서 가지고 오고 싶다면?
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

// API 받는 타입만들어보기
export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    page: number
}
export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResporse = ApiResponse<Menu>