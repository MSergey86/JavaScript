
let book = document.getElementById('book');
let size = document.getElementsByClassName('font-size')

console.log(size);

[...size].forEach(el => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		[...size].forEach(el1 => {
			if (el1.classList.contains('font-size_active')) {
				el1.classList.remove('font-size_active')
			}
		})
		let textSize = el.getAttribute('data-size')
		el.classList.toggle('font-size_active');
		book.classList = `book book_fs-${textSize}`
		return false;
	})
}) 

