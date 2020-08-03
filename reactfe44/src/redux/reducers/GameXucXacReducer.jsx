const dsXucXac = [
    { ma: 1, img:"./images/1.png", soDiem:1 },
    { ma: 2, img:"./images/2.png", soDiem:2 },
    { ma: 3, img:"./images/3.png", soDiem:3 },
    { ma: 4, img:"./images/4.png", soDiem:4 },
    { ma: 5, img:"./images/5.png", soDiem:5 },
    { ma: 6, img:"./images/6.png", soDiem:6 },
]


const initialState = {
    mangXucXac: [
        { ma: 1, img:"./images/1.png", soDiem:0 },
        { ma: 2, img:"./images/2.png", soDiem:0 },
        { ma: 3, img:"./images/3.png", soDiem:0 },
    ],
    banChon: '',
    soBanThang: 0,
    SoBanChoi: 0,
    tongDiem: 0,
    stopRandom : true
};

const GameXucXacReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HANDLE_CHOSE': {
            state.banChon = action.chose;
            return {...state};
        }
        case 'RANDOM' : {
            let randomArr = [];
            for(let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * 6);
                randomArr.push(dsXucXac[random]);
            }
            state.stopRandom = false;
            state.mangXucXac = randomArr;

            return {...state};
        }
        case 'HANDLE_PLAY': {
            if(!state.banChon) {
                alert('Vui lòng chọn Tài hoặc Xỉu !!!');
                state.stopRandom = true;
                return {...state};
            };
            

            let randomArr = [...state.mangXucXac];

            let total = randomArr.reduce((total, item) => {
                return total += item.soDiem;
            },0);

            let temp = "";
            if(total % 2 === 0) {
                temp = "TÀI";
            } else {
                temp = "XỈU";
            }
            if(state.banChon === temp) {
                state.soBanThang += 1;
            }

            state.stopRandom = true;
            state.tongDiem = total;
            state.SoBanChoi += 1;


            return {...state};
        }
        default: 
            return {...state};
    }
}

export default GameXucXacReducer;