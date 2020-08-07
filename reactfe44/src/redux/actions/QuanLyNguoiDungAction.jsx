import * as types from './types/QuanLyNguoiDungType';

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
};

export const deleteUser = (taiKhoan) => {
    return {
        type: types.DELETE_USER,
        taiKhoan
    }
};

export const updateUser = (user) => {
    return {
        type: types.UPDATE_USER,
        user
    }
};