export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num  //receive argument(5)

    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}