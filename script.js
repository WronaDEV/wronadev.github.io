var upClass = 'toggle-up';
var downClass = 'toggle-down';
var show = 'show';
var unshow = 'unshow';

function toggle() {
    const languages_list = document.querySelector('.languages-list');
    const square = document.querySelector('.arrow');
    if (~square.className.indexOf(downClass)) {
        languages_list.className = languages_list.className.replace(unshow, show);
        square.className = square.className.replace(downClass, upClass);
    } else {
        languages_list.className = languages_list.className.replace(show, unshow);
        square.className = square.className.replace(upClass, downClass);
    }
}