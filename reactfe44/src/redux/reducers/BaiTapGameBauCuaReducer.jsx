const initialState = {
    list: [
        {ma: '1', ten:'ga', img: './images/ga.png', cuoc: 0},
        {ma: '2', ten:'bau', img: './images/bau.png', cuoc: 0},
        {ma: '3', ten:'nai', img: './images/nai.png', cuoc: 0},
        {ma: '4', ten:'ca', img: './images/ca.png', cuoc: 0},
        {ma: '5', ten:'cua', img: './images/cua.png', cuoc: 0},
        {ma: '6', ten:'tom', img: './images/tom.png', cuoc: 0},
    ],
    tienThuong: 100,
    XucXac: [   
        {ma: '', img: ''},
        {ma: '', img: ''},
        {ma: '', img: ''},
    ],
    visible: false,
    result: 0
};

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE': {
            const FINAL_TOTAL = 100;
            console.log(FINAL_TOTAL)

            let temp = [...state.list];
            let findItem = temp.findIndex(item => item.ma === action.ma);

            let total = temp.reduce((total, item) => {
                return total += item.cuoc;
            },0);
            if(findItem !== -1) {
                if(action.tienCuoc < 0) {
                    if(temp[findItem].cuoc >= 10) {
                        temp[findItem].cuoc += action.tienCuoc;
                        state.tienThuong -= action.tienCuoc;
                    } else {
                        alert('Mức cược tối thiểu là 0 !');
                    }  
                } else if(action.tienCuoc > 0) {
                    if(total >= FINAL_TOTAL) {
                        alert('Bạn đã đặt cược ở mức tối đa !!!');
                    } else {
                        temp[findItem].cuoc += action.tienCuoc;
                        state.tienThuong -= action.tienCuoc;
                    }
                }
            }
            state.list = temp;
            return {...state};
        }
        case 'HANDLE_REPLAY': {
            let temp = {
                list: [
                    {ma: '1', ten:'ga', img: './images/ga.png', cuoc: 0},
                    {ma: '2', ten:'bau', img: './images/bau.png', cuoc: 0},
                    {ma: '3', ten:'nai', img: './images/nai.png', cuoc: 0},
                    {ma: '4', ten:'ca', img: './images/ca.png', cuoc: 0},
                    {ma: '5', ten:'cua', img: './images/cua.png', cuoc: 0},
                    {ma: '6', ten:'tom', img: './images/tom.png', cuoc: 0},
                ],
                tienThuong: 100,
                XucXac: [   
                    {ma: '', img: ''},
                    {ma: '', img: ''},
                    {ma: '', img: ''},
                ],
                visible: false
            };
            state = temp;
            return {...state}
        }
        case 'HANDLE_PLAY': {
            let temp = [];
            let list = [...state.list];

            let num1 = Math.ceil(Math.random()*12);
            let num2 = Math.ceil(Math.random()*12);
            let num3 = Math.ceil(Math.random()*12);

            if(num1 <= 2) {
                temp.push(list[0]);
            } else if(num1 > 2 && num1 <= 4) {
                temp.push(list[1]);
            } else if(num1 > 4 && num1 <= 6) {
                temp.push(list[2]);
            } else if(num1 > 6 && num1 <= 8) {
                temp.push(list[3]);
            } else if(num1 > 8 && num1 <= 10) {
                temp.push(list[4]);
            } else if(num1 > 10 && num1 <= 12) {
                temp.push(list[5]);
            } 

            if(num2 <= 2) {
                temp.push(list[0]);
            } else if(num2 > 2 && num2 <= 4) {
                temp.push(list[1]);
            } else if(num2 > 4 && num2 <= 6) {
                temp.push(list[2]);
            } else if(num2 > 6 && num2 <= 8) {
                temp.push(list[3]);
            } else if(num2 > 8 && num2 <= 10) {
                temp.push(list[4]);
            } else if(num2 > 10 && num2 <= 12) {
                temp.push(list[5]);
            } 

            if(num3 <= 2) {
                temp.push(list[0]);
            } else if(num3 > 2 && num3 <= 4) {
                temp.push(list[1]);
            } else if(num3 > 4 && num3 <= 6) {
                temp.push(list[2]);
            } else if(num3 > 6 && num3 <= 8) {
                temp.push(list[3]);
            } else if(num3 > 8 && num3 <= 10) {
                temp.push(list[4]);
            } else if(num3 > 10 && num3 <= 12) {
                temp.push(list[5]);
            } 

            // cách 2: 
            // let mangXucXacNgauNhien = [];
            // for(let i = 0; i < 3; i++) {
            //     let soNgauNhien = Math.floor(Math.random() * 6);
            //     let XucXacNgauNhien = {
            //         ma: state.list[soNgauNhien].ma,
            //         hinhAnh: state.list[soNgauNhien].hinhAnh
            //     };
            //     mangXucXacNgauNhien.push(XucXacNgauNhien);
            // }

            state.XucXac = temp;
            let result = [];
            for(let i = 0; i < temp.length; i++) {
                for(let j = 0; j < list.length; j++) {
                    if(temp[i].ma === list[j].ma) {
                        result.push(temp[i]);
                        break;
                    }
                }
            };
            let arrTemp = [...result];

            arrTemp = arrTemp.filter((item, index) => arrTemp.indexOf(item) === index);

            let tienDaCuoc =  arrTemp.reduce((total, item) => {
                return total += item.cuoc;
            },0);
            
            let totalMoney = result.reduce((total, item) => {
                return total += item.cuoc;
            },0);
            state.tienThuong += totalMoney + tienDaCuoc;
            

            const TIEN_THUONG = 100;

            if(state.tienThuong > TIEN_THUONG) {
                state.result = state.tienThuong - TIEN_THUONG;
            } else if(state.tienThuong < TIEN_THUONG) {
                state.result = state.tienThuong - TIEN_THUONG;
            }

            if(state.tienThuong <= 0) {
                state.visible = true;
                alert('Bạn đã hết tiền !!!');
                return {...state};
            }
            
            state.list = [
                {ma: '1', ten:'ga', img: './images/ga.png', cuoc: 0},
                {ma: '2', ten:'bau', img: './images/bau.png', cuoc: 0},
                {ma: '3', ten:'nai', img: './images/nai.png', cuoc: 0},
                {ma: '4', ten:'ca', img: './images/ca.png', cuoc: 0},
                {ma: '5', ten:'cua', img: './images/cua.png', cuoc: 0},
                {ma: '6', ten:'tom', img: './images/tom.png', cuoc: 0},
            ]
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}

export default BaiTapGameBauCuaReducer;