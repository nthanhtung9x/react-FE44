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
    ]
};

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE': {
            const FINAL_TOTAL = 100;
            let temp = [...state.list];
            let findItem = temp.findIndex(item => item.ma === action.ma);

            let total = temp.reduce((total, item) => {
                return total += item.cuoc;
            },0);
            if(findItem !== -1) {
                if(total >= FINAL_TOTAL) {
                    alert('Bạn đã đặt cược ở mức tối đa !!!');
                } else {
                    temp[findItem].cuoc += action.tienCuoc;
                    state.tienThuong -= action.tienCuoc;
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
                tienThuong: 100
            };
            state = temp;
            return {...state}
        }
        case 'HANDLE_PLAY': {
            let temp = [];
            let list = [...state.list];
            if(Math.ceil(action.num1) <= 2) {
                temp.push(list[0]);
            } else if(Math.ceil(action.num1) > 2 && Math.ceil(action.num1) <= 4) {
                temp.push(list[1]);
            } else if(Math.ceil(action.num1) > 4 && Math.ceil(action.num1) <= 6) {
                temp.push(list[2]);
            } else if(Math.ceil(action.num1) > 6 && Math.ceil(action.num1) <= 8) {
                temp.push(list[3]);
            } else if(Math.ceil(action.num1) > 8 && Math.ceil(action.num1) <= 10) {
                temp.push(list[4]);
            } else if(Math.ceil(action.num1) > 10 && Math.ceil(action.num1) <= 12) {
                temp.push(list[5]);
            } 

            if(Math.ceil(action.num2) <= 2) {
                temp.push(list[0]);
            } else if(Math.ceil(action.num2) > 2 && Math.ceil(action.num2) <= 4) {
                temp.push(list[1]);
            } else if(Math.ceil(action.num2) > 4 && Math.ceil(action.num2) <= 6) {
                temp.push(list[2]);
            } else if(Math.ceil(action.num2) > 6 && Math.ceil(action.num2) <= 8) {
                temp.push(list[3]);
            } else if(Math.ceil(action.num2) > 8 && Math.ceil(action.num2) <= 10) {
                temp.push(list[4]);
            } else if(Math.ceil(action.num2) > 10 && Math.ceil(action.num2) <= 12) {
                temp.push(list[5]);
            } 

            if(Math.ceil(action.num3) <= 2) {
                temp.push(list[0]);
            } else if(Math.ceil(action.num3) > 2 && Math.ceil(action.num3) <= 4) {
                temp.push(list[1]);
            } else if(Math.ceil(action.num3) > 4 && Math.ceil(action.num3) <= 6) {
                temp.push(list[2]);
            } else if(Math.ceil(action.num3) > 6 && Math.ceil(action.num3) <= 8) {
                temp.push(list[3]);
            } else if(Math.ceil(action.num3) > 8 && Math.ceil(action.num3) <= 10) {
                temp.push(list[4]);
            } else if(Math.ceil(action.num3) > 10 && Math.ceil(action.num3) <= 12) {
                temp.push(list[5]);
            } 

            state.XucXac = temp;
            console.log(state.XucXac);
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}

export default BaiTapGameBauCuaReducer;