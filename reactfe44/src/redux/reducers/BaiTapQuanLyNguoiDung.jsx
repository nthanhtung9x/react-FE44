import * as type from '../actions/types/QuanLyNguoiDungType';

const initialState = {
    mangNguoiDung: [
        {taiKhoan: 'a', matKhau: '123', hoTen: 'Hello world', email:"world@gmail.com", soDt: 123123123, maLoaiNguoiDung: 'KhachHang'},
        {taiKhoan: 'b', matKhau: '123', hoTen: 'Hello friend', email:"hello@gmail.com", soDt: 123123123, maLoaiNguoiDung: 'KhachHang'}
    ],
    nguoiDungEdit: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: ""
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_USER: {
            let temp = [...state.mangNguoiDung, action.user];
            state.mangNguoiDung = temp;
            return { ...state};
        }
        case type.DELETE_USER: {
            let temp = [...state.mangNguoiDung];
            let index = temp.findIndex(item => {
                return item.taiKhoan === action.taiKhoan;
            });
            if(index !== -1) {
                temp.splice(index,1);
            }
            state.mangNguoiDung = temp;
            return {...state};
        }
        case type.UPDATE_USER: {
            let temp = {...state.nguoiDungEdit};
            temp = action.user;
            state.nguoiDungEdit = temp;
            return {...state};
        }
        default:
            return {...state};
        }
}
