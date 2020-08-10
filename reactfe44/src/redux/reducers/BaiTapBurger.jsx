import * as type from '../actions/types/BaiTapBurgerType';

const initialState = {
    burger: { 
        salad : 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 10 
    },
    total: 30
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.HANDLE_CHANGE: {
            let burger = {...state.burger};
            let menu = {...state.menu};
            let total = state.total;
            if(action.num) {
                burger[action.name] += 1;
                total += menu[action.name];
            } else {
                if(burger[action.name] === 0) {
                    return {...state};
                }
                burger[action.name] -= 1;
                total -= menu[action.name];
            }
            state.burger = burger;
            state.total = total;
            return {...state};
        }
        case type.BUY_BURGER: {
            if(state.total === 0) {
                alert('Bạn chưa chọn nguyên liệu cho bánh');
                return {...state};
            } 
            state.burger = {
                salad: 1,
                cheese: 1,
                beef: 1
            }
            state.total = 30;
            alert('Bạn đã mua thành công !!!');
            return {...state};
        }
        default:
            return {...state};
    }
}
