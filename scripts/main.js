var nav = document.getElementById('nav');
var hamburger = document.getElementById('hamburger');

function toggleNav() {
	if (nav.className === 'open') {
		nav.className = '';
	} else {
		nav.className = 'open';
	}
}

document.getElementById('gallery').addEventListener('click', function (e) {
	if (nav.className === 'open') {
		toggleNav();
	}
});

hamburger.addEventListener('click', function () {
	toggleNav();
});