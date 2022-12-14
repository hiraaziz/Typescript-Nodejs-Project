import gradient from "gradient-string";
export function ShowTodo(todoList) {
    console.log(gradient.cristal('\n Your TO DO list! \n'));
    todoList.map((list, ind) => console.log(gradient.cristal(`${ind + 1} - ${list}`)));
    console.log('\n');
}
