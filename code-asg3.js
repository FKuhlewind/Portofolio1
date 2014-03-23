$(document).ready(function() { 

eventsTemplate1 = {
    		"events|5-20":[{
      		"name|1-2": "@LOREM ",
      		"rating|1-7": 0,
      		"ficticious|0-1": true, }]
  		};
eventsTemplate2 = {
    		"events|10-25":[{
      		"name|1-3": "@LOREM ",
      		"rating|0-100": 0,
      		"ficticious|0-1": true, }]
  		};
eventsTemplate3 = {
    		"events|2-15":[{
      		"name|2-4": "@LOREM ",
      		"rating|1-3": 0,
      		"ficticious|0-1": true, }]
  		};
  		
eventsTemplate = eventsTemplate1;

createData = function () {
  	var events = $.mockJSON.generateFromTemplate(eventsTemplate);
  	var eventsJSON = JSON.stringify(events);  
  	localStorage.setItem("assignment", eventsJSON);
  	
  	myObject = JSON.parse(localStorage.assignment);
	xMax = d3.max(myObject.events, function(d) { return d.rating;}); // get highest value
	yMax = myObject.events.length; // get number of values
	};

createSVG = function () {
	//create scale functions
	var xScale = d3.scale.linear()
    		.domain([0, xMax])
    		.range([padding, width-(padding*2)]);
	var yScale = d3.scale.ordinal()
    		.domain(d3.range(yMax))
    		.rangeRoundBands([height-padding, padding], 0.1);
	//define X axis
	var xAxis = d3.svg.axis()
    		.scale(xScale)
    		.orient("bottom")
    		.ticks(xMax/(xMax/5));

	// create svg 
	var mySVG = d3.select(".here")
	 	.append("svg")
	 	.attr("width", width)
    		.attr("height", height);    
	//Create bars
	mySVG.selectAll("rect")
    		.data(myObject.events)
    		.enter()
    		.append("rect")
    		.attr("y", function(d, i) {
                 	return yScale(i);})
    		.attr("x", function(d) {
            		return xScale(0);})
    		.attr("height", yScale.rangeBand())
    		.attr("width", function(d) {
                 	return xScale(d.rating)-padding;})
    		.style("fill", function (d) {
            		if (!d.ficticious) {return "#8f9d45"}
            		else {return "#E89E0C"} ;});   
	// add labels
	mySVG.selectAll("text")
   		.data(myObject.events)
   		.enter()
		.append("text")
   		.text ( function name(d) {
  			return d.name;
			})
    		.attr("y", function(d, i) {
                 	return yScale(i) + yScale.rangeBand() / 2;})
    		.attr("x", function(d) {
            		return xScale(0)+10;})
    		.attr("alignment-baseline" , "middle")
    		.style({ /*'stroke': 'Black',*/ 'fill': 'black','font-family':'Arial' /*'stroke-width': '0.5px'*/ });
	//create X axis
	mySVG.append("g")
    		.attr("transform", "translate(0," + (height - padding) + ")")
    		.style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1px', 'font-family':'Arial'})
    		.call(xAxis);
	};

var width = 540;
var height = 360;
var padding = 30;

createData();
createSVG();

$("#newData").on("click", function () {
	eventsTemplate = eventsTemplate1;
	$("svg").remove();
	createData();
	createSVG();
	});
$("#newData2").on("click", function () {
	eventsTemplate = eventsTemplate2;
	$("svg").remove();
	createData();
	createSVG();
	});
$("#newData3").on("click", function () {
	eventsTemplate = eventsTemplate3;
	$("svg").remove();
	createData();
	createSVG();
	});
});
