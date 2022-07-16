
jstoggle.onclick = function() {
    let headerElement = document.querySelectorAll('.jsenable');  
    let backElement = document.querySelectorAll('.jswrap');  
    for (let i = 0; i < headerElement.length; i++) {
        headerElement[i].style.display = 'flex'
    }
    for (let i = 0; i < backElement.length; i++) {
        backElement[i].style.display = 'none'
    }
};