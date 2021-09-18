
function redirect() {
	let deviceWidth = document.documentElement.clientWidth; // Taking the width of the device
	let mainArea = document.querySelector('.main-div');     // Accessing the div in HTML
	let tabletLink = document.createElement('a');           // Creating anchor tag element
	tabletLink.href = "./tablet.html";                      // Giving the path/source to tha anchor tag
	let desktopLink = document.createElement('a');          // Creating anchor tag
	desktopLink.href = "./index.html";                      // giving source
	mainArea.appendChild(tabletLink);                       // Storing the anchor tag in div element
	mainArea.appendChild(desktopLink);
	if ((deviceWidth > 721) && (deviceWidth < 1199)) {     // if the device width is in tablet range
		tablet();                                          // Then call the tablet function
	} else if (deviceWidth > 1200) {                       // if the device width is in desktop range
		desktop();                                         // Then call the desktop function
	}

	function desktop() {
		desktopLink.click();         // Go to desktop file i.e index.html without clicking the anchor tag
	}

	function tablet() {
		tabletLink.click();         // Go to tablet file i.e tablet.html without clicking the anchor tag
	}
}
redirect();                        // Whenever page loads call the direct function.
let body = document.querySelector('body');  // Take the body element
body.style.display = 'block';                // show the body element when the page loads