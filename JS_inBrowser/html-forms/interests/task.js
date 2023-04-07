
const interest = document.getElementsByClassName('interest__check');

console.log(interest)

interest[0].addEventListener('change', () => {
    if (interest[0].checked) {
        interest[1].checked = true;
        interest[2].checked = true;
    }
    else {
        interest[1].checked = false;
        interest[2].checked = false;
    }
})

interest[3].addEventListener('change', () => {
    if (interest[3].checked) {
        interest[4].checked = true;
        interest[5].checked = true;
    }
    else {
        interest[4].checked = false;
        interest[5].checked = false;
    }
})