
const progress = document.getElementById('progress');
const send = document.getElementById('send');
const formData = new FormData(form);
const xhr = new XMLHttpRequest();

send.addEventListener('click', showProgress);

function showProgress(event) {
	event.preventDefault();
	xhr.open('POST', '/form/');
	xhr.onprogress = function (event) {

		progress.value = event.loaded / 10000000;
	}
	xhr.send(formData);

}
