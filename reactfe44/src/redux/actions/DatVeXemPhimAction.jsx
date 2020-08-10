import * as type from './types/DatVeXemPhimType';

export const handleChange = (ghe,hang) => {
    return {
        type: type.HANDLE_CHANGE,
        ghe,
        hang
    }
}

export const deleteTicket = (soGhe) => {
    return {
        type: type.DELETE_TICKET,
        soGhe
    }
}

export const bookTicket = () => {
    return {
        type: type.BOOK_TICKET,
    }
}