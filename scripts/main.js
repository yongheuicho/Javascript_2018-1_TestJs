function getIdPw() {
    var id = prompt('ID 입력', '');
    var passwoard = prompt(id + '가 사용할 초기 비번 입력', '');
    localStorage.setItem('id', id);
    localStorage.setItem('password', password);
}
var password = localStorage.getItem('password');
if (!password) {
    getIdPw();
}
// Password?

var id = localStorage.getItem('id');
var heading = document.querySelector('h1');
heading.innerHTML = id + '\'s Homepage';