import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

//rootReducer quản lý state toàn ứng dụng.
export const rootReducer = combineReducers({
    // Nơi khai báo các state (reducer) theo từng nghiệp vụ.
    BaiTapGioHangReducer
});
