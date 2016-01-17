var nav = document.getElementById('nav');
document.getElementById('hamburger').addEventListener('click', function () {
	if (nav.className === 'open') {
		nav.className = '';
	} else {
		nav.className = 'open';
	}
});