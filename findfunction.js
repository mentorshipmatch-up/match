window.onload = function() { init() };

  var mentee_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Fzl9HRP99j-y0-gErpfyg-aydvazZZFwmAXWkUDuxpQ/pubhtml';
	var mentor_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1qPY0iwZWHokKvEaJshfQRMC1CDprCqLvOlVyosY7GF4/pubhtml';
  function init() {
    Tabletop.init( { key: mentee_spreadsheet_url,
                     callback: matchMentee,
                     simpleSheet: true } )// ending for tabletop.init
                     
    Tabletop.init( { key: mentor_spreadsheet_url,
                     callback: matchMentor,
                     simpleSheet: true } )// ending for tabletop.init              
  }//ending for function init


var menteeFields = [];
var menteeName = [];
var menteeGoal = [];
function matchMentee(dataMentee) {
					       //matchMentor is for mentee spreadsheet
	for(var i = 0;i<dataMentee.length;i++){
		var menteeF = dataMentee[i].Field
		menteeFields.push(menteeF);
		var menteeN = dataMentee[i].Name
		menteeName.push(menteeN);
		var menteeG = dataMentee[i].Goals
		menteeGoal.push(menteeG);
	}  //end for loop  
	} // end for function 

var mentorFields = [];
var mentorName = [];
function matchMentor(dataMentor){         //matchMentor is for mentor spreadsheet
	for(var i = 0;i<dataMentor.length;i++){
		var mentorF = dataMentor[i].Expertise
		mentorFields.push(mentorF);
		var mentorN = dataMentor[i].Name
		mentorName.push(mentorN);
		
		
	}  //end for loop 
	} // end for function 
	
 /*function loop() {
	for(var i = 0;i<menteeFields.length;i++){
		for(var j = 0;j<mentorFields.length;i++){ 
		if(menteeFields[i] == mentorFields[j]){
		alert(menteeName[i] + " & " + mentorName[j]);
		} // end for if conditional
		} //end for j loop
		} //end for i loop
		} // end for function      this is for group option and gets activated when button is clicked */
	
function oneP() {
Tabletop.init( { key: mentee_spreadsheet_url,
                     callback: matchMentee,
                     simpleSheet: true } )// ending for tabletop.init
	for(var j=0;j<mentorFields.length;j++){
		if(menteeFields[menteeFields.length-1] == mentorFields[j]) {
		document.getElementById("mentor").innerHTML += mentorName[j];
		document.getElementById("mentor").innerHTML += " : ";
		document.getElementById("mentor").innerHTML += mentorFields[j];
		document.getElementById("mentor").innerHTML += "<p> </p>";
				} // end for if conditional
		} // end for loop 
		} // end for function 
		
 function display() {
	document.getElementById("name").innerHTML +=menteeName[menteeName.length-1];
	 document.getElementById("fields").innerHTML +=menteeFields[menteeFields.length-1];
	 document.getElementById("goals").innerHTML += menteeGoal[menteeGoal.length-1];
	} 

			
