export function loadUser(state, data) {
    state.data = data;
}

export function loadTodolist(state, data) {
    state.todolist = data;
}

export function loadTodoInTodolist(state, data){
    state.todolisttask = data;
}

export function creatTodolist(state, data){
    console.log("createlistdata "+data);
    state.test = data;
}

export function deleteTodolist(state, data){
    console.log("deletedata "+data);
    state.test = data;
}

export function creatUserTodoInTodolist(state, data){
    console.log("createtododata "+data);
    state.test = data;
}


export function deleteTodoInTodolist(state, data){
    console.log("deletetododata "+data);
    state.test = data;
}

export function changeCompleteTodo(state, data){
    console.log("changetododata "+data);
    state.test = data;
}


export function modifyTodo(state, data){
    console.log("modifytododata "+data);
    state.test = data;
}