
function redirect() {
	let deviceWidth = document.documentElement.clientWidth;
	let mainArea = document.querySelector('.main-div');
	let mobileLink = document.createElement('a');
	mobileLink.href = "./mobile.html";
	let desktopLink = document.createElement('a');
	desktopLink.href = "./index.html";
	mainArea.appendChild(mobileLink);
	mainArea.appendChild(desktopLink);
	if ((deviceWidth > 320) && (deviceWidth < 720)) {
		mobile();
	} else if (deviceWidth > 1200) {
		desktop();
	}

	function desktop() {
		desktopLink.click();
	}

	function mobile() {
		mobileLink.click();
	}
}
redirect();
let body = document.querySelector('body');
body.style.display = 'block';