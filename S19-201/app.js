let toDoList = [];
let ans = prompt("what do you want to do?");

while (ans !== 'quit' && ans !== 'q') {
    if (ans === 'new') {
        const n = prompt("what do you want to add?");
        toDoList.push(n);
        console.log(`${n} added to list`);
    } else if (ans === 'list') {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(i + ' ' + toDoList[i]);
        }
    } else if (ans === 'delete') {
        let index = parseInt(prompt("which one do you want to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index.")
        }
    }

    ans = prompt("what do you want to do?");
}

console.log("Ok you've quit!");