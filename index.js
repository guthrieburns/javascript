// JavaScript Document
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredData = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      var ufo_data = filteredData[i];
      var fields = Object.keys(ufo_data);
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = ufo_data[field];
      }
    }
  }

function handleSearchButtonClick() {
    var filterState = $stateInput.value.trim();
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.datetime;
        return addressState === filterState;
    });
    renderTable();
  }
renderTable();
