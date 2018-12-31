// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody"); 

// use arrow functions

tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
var sightings = data;
var filterButton =d3.select("#filter-btn");

filterButton.on("click", function() {
    
    d3.event.preventDefault();
    d3.selectAll("td").remove()

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(inputElement);

    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    
    console.log("Here are your search results:", filteredData);

    var tbody = d3.select("tbody");
        //console.log(data);

    filteredData.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});






