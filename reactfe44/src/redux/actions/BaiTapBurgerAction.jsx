import * as type from './types/BaiTapBurgerType';

export const handleChange = (num, name) => {
    return {
        type: type.HANDLE_CHANGE,
        num,
        name
    }
}

export const buyBurger = () => {
    return {
        type: type.BUY_BURGER,
    }
}