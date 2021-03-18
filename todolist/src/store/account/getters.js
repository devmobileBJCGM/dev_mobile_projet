export function accounts(state) {
    return state.token;
}

export function connexion({commit},values){
    return state.token.find((postman) => postman.name === signup);
}