$(document).ready(function () {
	var version = chrome.app.getDetails().version;
	$('#version').html(version); 
});