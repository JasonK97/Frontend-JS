function listStuff() {
    var list = document.getElementById('list');
    var arrayList = ['./week1/form.html']
    var arrayName = ['Week 1']

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