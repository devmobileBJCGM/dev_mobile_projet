export function connexion(state, data) {
    state.token = data["token"];
}

export function deconnexion(state) {
    console.log("deconnexion");
    state.token = [];
    state.data = [];
}
