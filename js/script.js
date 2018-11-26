
// Run all functions
loadEventListeners();

// load all event listeners
function loadEventListeners()
{
	window.addEventListener('scroll', stickyNav, false);
}

// Sticky Navigation Bar
const sticky = document.querySelector("#navbar").offsetTop;

function stickyNav() 
{
	if (window.pageYOffset > sticky) 
	{
		// Navigation Bar
		document.querySelector("#navbar .content-wrap").classList.remove("shrink-navbar");
		document.querySelector("#navbar .content-wrap").classList.add("widen-navbar");
		document.querySelector("#navbar").style.background = "#fff";
		document.querySelector("#navbar").style.opacity = "0.9";
	}
	else 
	{
		// Navigation Bar
		document.querySelector("#navbar .content-wrap").classList.remove("widen-navbar");
		document.querySelector("#navbar .content-wrap").classList.add("shrink-navbar");
		document.querySelector("#navbar").style.background = "transparent";
		document.querySelector("#navbar").style.opacity = "1";
	}
}