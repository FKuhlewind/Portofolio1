$(document).ready(function() { 

var width = 600;
var height = 600;
var padding = 90;
var addToAxis = 0.1; 
xD = 4; yD = 5; // define values to display initially
myDataRef = new Firebase('https://vib-data.firebaseio.com/');

// define functions
function getDisplayRange () {
	// calculate display range for axis
	xExt = d3.extent(vibData[xD], function(d) { return d;});
	yExt = d3.extent(vibData[yD], function(d) { return d;});
	fromX = xExt[0] - ( (xExt[1]-xExt[0]) * addToAxis );
	toX = xExt[1] + ( (xExt[1]-xExt[0]) * addToAxis );
	fromY = yExt[0] - ( (yExt[1]-yExt[0]) * addToAxis );
	toY = yExt[1] + ( (yExt[1]-yExt[0]) * addToAxis );
	};
function getData () {
	// get data and label variables
	xyData = [];
	for ( var i = 0, l = 10; i < l; i++ ) {
    		xyData[i]= [vibData[xD][i], vibData[yD][i]] };
	xLabel = vibData[xD][10];
	yLabel = vibData[yD][10];
	};
function updateScaleDomains () {
	xScale = d3.scale.linear()
    		.domain([fromX, toX])
    		.range([padding, width-(padding)]);
	yScale = d3.scale.linear()
    		.domain([fromY, toY])
    		.range([height-padding, padding]);
	};
function defineXYaxis () {
	xAxis = d3.svg.axis()
    		.scale(xScale)
    		.orient("bottom")
    		.ticks(5);
	yAxis = d3.svg.axis()
    		.scale(yScale)
    		.orient("left")
    		.ticks(5);
	};
function createForm () {
	$("#myForm").remove();
	d3.json('https://vib-data.firebaseio.com/.json', function(data) {
		vibData = data; 
		// update dropdown menu
		a = '';
		f = '<form style="display:inline" id="myForm"><br/><u>Select values to be displayed: </u><br/><p style="display:inline">x-Axis:</p><select id="xAxisChoice">';
		n = '</select><p style="display:inline">    y-Axis:   </p><select id="yAxisChoice">';
		t = '</select><br/><a><i id="update">Click this text to update diagram</i></a></form>';
		$.each( vibData , function( index, value ) {
  			a = a.concat('<option value='+index+'>'+value[10]+'</option>');
			});
		$('body').append(f+a+n+a+t);

		// enable update
		$("#update").on("click", function() {

			// get info on which values to display on Axis
			xD = $("#xAxisChoice").val();
			yD = $("#yAxisChoice").val();

			getDisplayRange();
			getData();
			updateScaleDomains();
			defineXYaxis();

			//update circles
			mySVG.selectAll("circle")
		    		.data(xyData)
		    		.transition()
		    		.duration(1000)
		    		.attr("cx", function(d) {
		                	return xScale(d[0]);})
		    		.attr("cy", function(d) {
		            		return yScale(d[1]);});

			//update x and y axis
			mySVG.select(".x.axis")
		    		.transition()
		    		.duration(500)
		    		.call(xAxis);
		    	mySVG.select(".y.axis")
		    		.transition()
		    		.duration(500)
		    		.call(yAxis);

			//update text labels
			mySVG.select(".x.text")
				.text(xLabel)
		    		.transition()
		    		.duration(1000);

		    	mySVG.select(".y.text")
		    		.transition()
		    		.duration(1000)
		    		.text(yLabel);
			});
		});
	};
//// start of script
//get JSON data
d3.json('https://vib-data.firebaseio.com/.json', function(data) {

	vibData = data;
	getDisplayRange();
	getData();
	updateScaleDomains();
	defineXYaxis();

	//create svg 
	mySVG = d3.select("body")
	   .append("svg")
	  .attr("width", width)
	  .attr("height", height);    
	//create circles
	mySVG.selectAll("circle")
	  .data(xyData)
	  .enter()
	  .append("circle")
	  .attr("cx", function(d) {
                return xScale(d[0]);})
    	  .attr("cy", function(d) {
            	return yScale(d[1]);})
    	  .attr("r", 5);

	//create X axis
	mySVG.append("g")
    	  .attr("class", "x axis")	
    	  .attr("transform", "translate(0," + (height - padding) + ")")
    	  .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1px'})
    	  .call(xAxis);
	//create Y axis
	mySVG.append("g")
    	  .attr("class", "y axis")
    	  .attr("transform", "translate(" + padding + ",0)")
    	  .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1px'})
    	  .call(yAxis);

	//create axis labels and main title
	mySVG.append("text")
          .attr("x", width/2 )
          .attr("y", padding/2 )
          .style("text-anchor", "middle")
          .text("Vibrato Analysis")
          .style({ 'stroke': 'Black', 'fill': 'black', 'stroke-width': '0.5px' });
	mySVG.append("text")
	  .attr("class", "x text")
          .attr("x", width/2 )
          .attr("y", height-(padding/3) )
          .style("text-anchor", "middle")
          .text(xLabel)
          .style({ 'stroke': 'Black', 'fill': 'black', 'stroke-width': '0.5px' });
	mySVG.append("text")
	  .attr("class", "y text")
	  .text(yLabel)
          .attr("x", padding/3)
          .attr("y", height/2)
          .style("text-anchor", "middle")
          .style({ 'stroke': 'Black', 'fill': 'black', 'stroke-width': '0.5px' })
          .style("writing-mode", "tb");

	// creates update form
	createForm();

	var newValuesForm='<form id="newValues"><br/><u>Enter new Values to be stored: </u><br/>01: <input type="number" id="val1" class="required number" style="width: 50px;">02: <input type="number" id="val2" style="width: 50px;">03: <input type="number" id="val3" style="width: 50px;">04: <input type="number" id="val4" style="width: 50px;">05: <input type="number" id="val5" style="width: 50px;"><br/>06: <input type="number" id="val6" style="width: 50px;">07: <input type="number" id="val7" style="width: 50px;">08: <input type="number" id="val8" style="width: 50px;">09: <input type="number" id="val9" style="width: 50px;">10: <input type="number" id="val10" style="width: 50px;"><br/>Data type and unit (e.g. <i>Rate [Hz]</i>):<input type="text" id="newLabel" ><br/><a><i id="storeData">Click this text to store new data</i></a></form>';
	$('body').append(newValuesForm);

	// store new data
	$("#storeData")
		.on("click", function() {
			n = vibData.length;

			for ( var i = 0, l = 10; i < l; i++ ) {
				p = i + 1;
    				myDataRef.child(n).child(i).set( parseInt( $("#val"+p).val()) );
    				};
			myDataRef.child(n).child(10).set( $("#newLabel").val() );

			createForm();
			$('#newValues :input').val('');

			d3.json('https://vib-data.firebaseio.com/.json', function(data) {
				vibData = data; 
				alert("New data stored successfully, you can now select it from the dropdown menu to be diplayed.");
				});
		});
});


});
