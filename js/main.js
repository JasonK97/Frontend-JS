function listStuff() {
    var list = document.getElementById('list');
    var arrayList = ['./Notes/W01story.html', './Notes/W02Notes.html', './Notes/W03Notes.html', './Notes/W04Notes.html', './Notes/W05Notes.html', './ToDo/todo.html', './Notes/W07Notes.html', './Notes/W08Notes.html'];
    var arrayName = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'To Do Project', 'Week 7', 'Week 8'];

    for (let i = 0; i < arrayList.length; i++) {
        const element = arrayList[i];
        const name = arrayName[i];
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.setAttribute('href', element);

        a.innerText = name;

        li.appendChild(a);

        list.appendChild(li);
    }
}