
function redirect() {
	let deviceWidth = document.documentElement.clientWidth; // Taking the width of the device
	let mainArea = document.querySelector('.main-div');     // Accessing the div in HTML
	let mobileLink = document.createElement('a');           // Creating anchor tag element
	mobileLink.href = "./mobile.html";                      // Giving the path/source to tha anchor tag
	let desktopLink = document.createElement('a');          // Creating another tag
	desktopLink.href = "./index.html";                      // giving source
	mainArea.appendChild(mobileLink);                        // Storing the anchor tag in div element
	mainArea.appendChild(desktopLink);
	if ((deviceWidth > 320) && (deviceWidth < 720)) {   // if the device width is in mobile range 
		mobile();                            // Then call the mobile function
	} else if (deviceWidth > 1200) {    // if the device width is in desktop range
		desktop();                   // Then call the desktop function
	} 

	function desktop() {
		desktopLink.click();  // Go to desktop file i.e index.html without clicking the anchor tag
	}

	function mobile() {
		mobileLink.click(); // Go to mobile file i.e mobile.html without clicking the anchor tag
	}
}
redirect();    // Whenever page loads call the direct function.
let body = document.querySelector('body');
body.style.display = 'block';