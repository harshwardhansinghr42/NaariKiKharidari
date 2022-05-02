const setToken = (userObj) => {
    return {
        type: "SET_TOKEN",
        payload: userObj
    }
}

const unsetToken = () => {
    return {
        type: "UNSET_TOKEN"
    }
}

export default {
    setToken,
    unsetToken
}