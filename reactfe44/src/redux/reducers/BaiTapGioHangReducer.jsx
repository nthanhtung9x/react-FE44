
const stateDefault = {
    danhSachSanPham: [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
    ],
    stateGioHang: []
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': {
            let cart = [...state.stateGioHang];
            let findProduct = cart.findIndex(data => {
                return data.maSP === action.spGH.maSP;
            })
            let result = {};
            if(findProduct >= 0) {
                cart[findProduct].count += 1;
                result = {...state, stateGioHang:cart};
                state = result;
                return {...state};
            } else {
                result = {...state, stateGioHang: [...state.stateGioHang, action.spGH]};
                state = result;
                return {...state};
            }
        }
        default: {
            return {...state};
        }
    }
}

export default BaiTapGioHangReducer;