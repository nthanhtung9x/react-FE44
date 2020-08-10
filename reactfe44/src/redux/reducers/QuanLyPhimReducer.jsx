import * as type from '../actions/types/QuanLyPhimType';

const initialState = {
    danhSachPhim: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.LAY_DANH_SACH_PHIM: {
            let temp = [...state.danhSachPhim, ...action.danhSach];
            state.danhSachPhim = temp;
            return {...state};
        }
    default:
        return {...state};
    }
}
