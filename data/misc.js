//value for next Maintenance Date
var expiryDate = "08 February 2016 11:00 GMT+0900";

//list of blacklisted api_shipgraph IDs which contains 404 links.
//api_id values are integers, hence no quotes.
var blacklistID = [ 563, 568 , 569 , 580 , 593 , 596 ];

//variable for current and expirydate (to be moved later)
var currentDate = new Date();
var expiryDate = new Date(expiryDate);

//only execute if it's before expiry date
//if (currentDate < expiryDate) execute
