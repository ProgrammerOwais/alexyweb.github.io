function redirect() {
	let deviceWidth = document.documentElement.clientWidth;   // Taking the width of the device
	let mainArea = document.querySelector('.main-div');      // Accessing the div in HTML
	let tabletLink = document.createElement('a');            // Creating anchor tag element
	tabletLink.href = "./tablet.html";                       // Giving the path/source to tha anchor tag
	let mobileLink = document.createElement('a');            // Creating another tag
	mobileLink.href = "./mobile.html";                        // giving source
	mainArea.appendChild(mobileLink);                          // Storing the anchor tag in div element
	mainArea.appendChild(tabletLink);
	if ((deviceWidth > 320) && (deviceWidth < 720)) {   // if the device width is in mobile range         
		mobile();                                      // Then call the mobile function
	} else if ((deviceWidth > 721) && (deviceWidth < 1199)) { // if the device width is in tablet range
		tablet();                                          // Then call the tablet function
	}

	function mobile() {
		mobileLink.click(); // Go to mobile file i.e mobile.html without clicking the anchor tag
	}

	function tablet() {
		tabletLink.click();   // Go to tablet file i.e tablet.html without clicking the anchor tag
	}
}
redirect();  // Whenever page loads call the direct function.
let body = document.querySelector('body');
body.style.display = 'block';
// window.onresize = redirect();