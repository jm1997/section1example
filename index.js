//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {

	//set up listener for button click
	$(document).on('click', getPosition);

	//change time box to show message
	$('#time').val("Press the button to get location data");

});


//Call this function when you want to get the current position
function getPosition() {

	//change time box to show updated message
	$('#time').val("Getting data...");

	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {

	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp


	//lets get some stuff out of the position object

	//gets time in unix time and assigns it to variable
	var time = position.timestamp;
	//gets latitude and assigns it to variable
	var latitude = position.coords.latitude;
	//gets just longitude and assigns it to varibale
	var longitude = position.coords.longitude;

//	//gets the time the position was taken
	var unixtime = new Date(position.timestamp);
//	//converts unix time to a string of the date
	var date = unixtime.toDateString();
//
//	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data on " + date);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);




}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);

}
