
$(document).ready(function(){initialize();})

function initialize(){


	$("#send").click(function(){
		alert("clicked");

		$.get("/login/shabu", function(data){
			console.log(data);
		})

		
	})

	 $.ajax({
        type: "GET",
        url: "testCSV.txt",
        dataType: "text",
        success: function(data) {
        	console.log(data);

        	var jsonObject = csvToJSON(data); 
        	
        	var OBJc = JSON.parse(jsonObject); 
        	console.log(OBJc);

        	var obj2 = {users: OBJc};
 			console.log(obj2);

        	$.post("/data", obj2, function(){
        		alert("done");
        	})
        }
     });




}



function csvToJSON(csv){

	alert("inside");
	var lines = csv.split("\n"); 

	var result = []; 

	var keysFromHeaders = lines[0].split(","); 

	for(var i=1;i<lines.length;i++){

		var obj = {}; 
		var currentline = lines[i].split(","); 


		for(var j=0; j<keysFromHeaders.length; j++){
			obj[keysFromHeaders[j]] = currentline[j];
		}

		result.push(obj);
		console.log(obj); 
	}

	return JSON.stringify(result); 
}