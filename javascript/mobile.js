
function redirect() {
	let deviceWidth = document.documentElement.clientWidth;
	let mainArea = document.querySelector('.main-div');
	let tabletLink = document.createElement('a');
	tabletLink.href = "./tablet.html";
	let desktopLink = document.createElement('a');
	desktopLink.href = "./index.html";
	mainArea.appendChild(tabletLink);
	mainArea.appendChild(desktopLink);
	if ((deviceWidth > 721) && (deviceWidth < 1199)) {
		tablet();
	} else if (deviceWidth > 1200) {
		desktop();
	}

	function desktop() {
		desktopLink.click();
	}

	function tablet() {
		tabletLink.click();
	}
}
redirect();
let body = document.querySelector('body');
body.style.display = 'block';