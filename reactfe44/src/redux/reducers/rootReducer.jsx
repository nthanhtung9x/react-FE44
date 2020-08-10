import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer';
import GameXucXacReducer from './GameXucXacReducer';
import BaiTapQuanLyNguoiDung from './BaiTapQuanLyNguoiDung';
import BaiTapBurger from './BaiTapBurger';
import BaiTapDatVeXemPhim from './BaiTapDatVeXemPhim';
import QuanLyPhimReducer from './QuanLyPhimReducer';

//rootReducer quản lý state toàn ứng dụng.
export const rootReducer = combineReducers({
    // Nơi khai báo các state (reducer) theo từng nghiệp vụ.
    BaiTapGioHangReducer,
    BaiTapGameBauCuaReducer,
    GameXucXacReducer,
    BaiTapQuanLyNguoiDung,
    BaiTapBurger,
    BaiTapDatVeXemPhim,
    QuanLyPhimReducer
});
