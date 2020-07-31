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
        { ma: 1, img:"./images/1.png", soDiem:1 },
        { ma: 2, img:"./images/2.png", soDiem:1 },
        { ma: 3, img:"./images/3.png", soDiem:1 },
    ],
    banChon: 'TÀI',
    soBanThang: 0,
    SoBanChoi: 0
};

const GameXucXacReducer = (state = initialState, action) => {
    switch(action.type) {

        default: 
            return {...state};
    }
}

export default GameXucXacReducer;