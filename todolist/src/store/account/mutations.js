export function connexion(state, data) {
    console.log(data);
    state.token = data["token"];
}