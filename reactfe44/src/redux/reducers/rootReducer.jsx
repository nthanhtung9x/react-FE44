import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer';
import GameXucXacReducer from './GameXucXacReducer';

//rootReducer quản lý state toàn ứng dụng.
export const rootReducer = combineReducers({
    // Nơi khai báo các state (reducer) theo từng nghiệp vụ.
    BaiTapGioHangReducer,
    BaiTapGameBauCuaReducer,
    GameXucXacReducer
});
