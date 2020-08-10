import * as type from './types/QuanLyPhimType';
import axios from 'axios';

export const layDanhSachPhimAPI = () => {
    return dispatch => {
        axios({
            method:'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06'
        }).then(res => {
            dispatch(layDanhSachPhim(res.data));
        }).catch(err => console.log(err.response.data));
    }
}

export const layDanhSachPhim = (danhSach) => {
    return {
        type: type.LAY_DANH_SACH_PHIM,
        danhSach
    }
}