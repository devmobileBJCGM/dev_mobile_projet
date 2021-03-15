export function accounts(state) {
    return state.token;
}

export const getAccounts = (state) => (getUser) => {
    return state.token.find((postman) => postman.name === signup);
}