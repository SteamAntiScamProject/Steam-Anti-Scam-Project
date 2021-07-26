
$(document).ready(function () {
    console.log("Ready ...");
    registerHandlers();
	loadOptions();
	loadUsers();
	setupCounter();
    function registerHandlers() {
		//document.getElementById("update").onclick = updateUsers;
        $('#checkpp').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkpp', "true");
				localStorage.setItem('checkppi', "false");
				document.getElementById("checkppi").checked=false;
				return;
			}
			localStorage.setItem('checkpp', "false");
			return;
		});
		$('#checkl').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkl', "true");
				localStorage.setItem('checkli', "false");
				document.getElementById("checkli").checked=false;
				return;
			}
			localStorage.setItem('checkl', "false");
			return;
		});		
		$('#checktb').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checktb', "true");
				localStorage.setItem('checktbi', "false");
				document.getElementById("checktbi").checked=false;
				return;
			}
			localStorage.setItem('checktb', "false");
			return;
		});
		$('#checkpi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkpi', "true");
				localStorage.setItem('checkpii', "false");
				document.getElementById("checkpii").checked=false;
				return;
			}
			localStorage.setItem('checkpi', "false");
			return;
		});
		$('#checkn').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkn', "true");
				localStorage.setItem('checkni', "false");
				document.getElementById("checkni").checked=false;
				return;
			}
			localStorage.setItem('checkn', "false");
			return;
		});
		$('#checktie').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checktie', "true");
				localStorage.setItem('checktiei', "false");
				document.getElementById("checktiei").checked=false;
				return;
			}
			localStorage.setItem('checktie', "false");
			return;
		});
		$('#checkdie').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkdie', "true");
				localStorage.setItem('checkdiei', "false");
				document.getElementById("checkdiei").checked=false;
				return;
			}
			localStorage.setItem('checkdie', "false");
			return;
		});
		$('#checkcie').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkcie', "true");
				localStorage.setItem('checkciei', "false");
				document.getElementById("checkciei").checked=false;
				return;
			}
			localStorage.setItem('checkcie', "false");
			return;
		});






		//
		$('#checkppi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkppi', "true");
				localStorage.setItem('checkpp', "false");
				document.getElementById("checkpp").checked=false;
				return;
			}
			localStorage.setItem('checkppi', "false");
			return;
		});
		$('#checkli').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkli', "true");
				localStorage.setItem('checkl', "false");
				document.getElementById("checkl").checked=false;
				return;
			}
			localStorage.setItem('checkli', "false");
			return;
		});		
		$('#checktbi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checktbi', "true");
				localStorage.setItem('checktb', "false");
				document.getElementById("checktb").checked=false;
				return;
			}
			localStorage.setItem('checktbi', "false");
			return;
		});
		$('#checkpii').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkpii', "true");
				localStorage.setItem('checkpi', "false");
				document.getElementById("checkpi").checked=false;
				return;
			}
			localStorage.setItem('checkpii', "false");
			return;
		});
		$('#checkni').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkni', "true");
				localStorage.setItem('checkn', "false");
				document.getElementById("checkn").checked=false;
				return;
			}
			localStorage.setItem('checkni', "false");
			return;
		});
		$('#checktiei').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checktiei', "true");
				localStorage.setItem('checktie', "false");
				document.getElementById("checktie").checked=false;
				return;
			}
			localStorage.setItem('checktiei', "false");
			return;
		});
		$('#checkdiei').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkdiei', "true");
				localStorage.setItem('checkdie', "false");
				document.getElementById("checkdie").checked=false;
				return;
			}
			localStorage.setItem('checkdiei', "false");
			return;
		});
		$('#checkciei').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checkciei', "true");
				localStorage.setItem('checkcie', "false");
				document.getElementById("checkcie").checked=false;
				return;
			}
			localStorage.setItem('checkciei', "false");
			return;
		});

		//
		$('#checksrb').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('checksrb', "true");
				return;
			}
			localStorage.setItem('checksrb', "false");
			return;
		});
		$('#lvltb').change(function() {
			var lvl = document.getElementById("lvltb").value;
			console.log(lvl);
			localStorage.setItem('blocklvl', lvl);
		});

		//
		$('#syncpp').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncpp', "true");
				localStorage.setItem('syncppi', "false");
				document.getElementById("syncppi").checked=false;
				localStorage.setItem('syncpp2', "false");
				document.getElementById("syncpp2").checked=false;
				return;
			}
			localStorage.setItem('syncpp', "false");
			return;
		});
		
	    $('#syncpi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncpi', "true");
				localStorage.setItem('syncpii', "false");
				document.getElementById("syncpii").checked=false;
				localStorage.setItem('syncpi2', "false");
				document.getElementById("syncpi2").checked=false;
				return;
			}
			localStorage.setItem('syncpi', "false");
			return;
		});
		$('#synctb').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synctb', "true");
				localStorage.setItem('synctbi', "false");
				document.getElementById("synctbi").checked=false;
				localStorage.setItem('synctb2', "false");
				document.getElementById("synctb2").checked=false;
				return;
			}
			localStorage.setItem('synctb', "false");
			return;
		});
		$('#synccb').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synccb', "true");
				localStorage.setItem('synccbi', "false");
				document.getElementById("synccbi").checked=false;
				localStorage.setItem('synccb2', "false");
				document.getElementById("synccb2").checked=false;
				return;
			}
			localStorage.setItem('synccb', "false");
			return;
		});

		//
		$('#syncpp2').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncpp2', "true");
				localStorage.setItem('syncpp', "false");
				document.getElementById("syncpp").checked=false;
				localStorage.setItem('syncppi', "false");
				document.getElementById("syncppi").checked=false;
				return;
			}
			localStorage.setItem('syncpp2', "false");
			return;
		});
	    $('#syncpi2').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncpi2', "true");
				localStorage.setItem('syncpi', "false");
				document.getElementById("syncpi").checked=false;
				localStorage.setItem('syncpii', "false");
				document.getElementById("syncpii").checked=false;
				return;
			}
			localStorage.setItem('syncpi2', "false");
			return;
		});
		$('#synctb2').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synctb2', "true");
				localStorage.setItem('synctb', "false");
				document.getElementById("synctb").checked=false;
				localStorage.setItem('synctbi', "false");
				document.getElementById("synctbi").checked=false;
				return;
			}
			localStorage.setItem('synctb2', "false");
			return;
		});
		$('#synccb2').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synccb2', "true");
				localStorage.setItem('synccb', "false");
				document.getElementById("synccb").checked=false;
				localStorage.setItem('synccbi', "false");
				document.getElementById("synccbi").checked=false;
				return;
			}
			localStorage.setItem('synccb2', "false");
			return;
		});

		//
		$('#syncppi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncppi', "true");
				localStorage.setItem('syncpp', "false");
				document.getElementById("syncpp").checked=false;
				localStorage.setItem('syncpp2', "false");
				document.getElementById("syncpp2").checked=false;
				return;
			}
			localStorage.setItem('syncppi', "false");
			return;
		});
		
	    $('#syncpii').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('syncpii', "true");
				localStorage.setItem('syncpi', "false");
				document.getElementById("syncpi").checked=false;
				localStorage.setItem('syncpi2', "false");
				document.getElementById("syncpi2").checked=false;
				return;
			}
			localStorage.setItem('syncpii', "false");
			return;
		});
		$('#synctbi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synctbi', "true");
				localStorage.setItem('synctb', "false");
				document.getElementById("synctb").checked=false;
				localStorage.setItem('synctb2', "false");
				document.getElementById("synctb2").checked=false;
				return;
			}
			localStorage.setItem('synctbi', "false");
			return;
		});
		$('#synccbi').change(function() {
			if($(this).is(":checked")) {
				localStorage.setItem('synccbi', "true");
				localStorage.setItem('synccb', "false");
				document.getElementById("synccb").checked=false;
				localStorage.setItem('synccb2', "false");
				document.getElementById("synccb2").checked=false;
				return;
			}
			localStorage.setItem('synccbi', "false");
			return;
		});
    }
});

var loadOptions = function () {
    if (localStorage.getItem('checkpp') == "true") {
        console.log("checkpp checked");
        document.getElementById("checkpp").checked=true;
    } else {
        console.log("checkpp");
    }
	if (localStorage.getItem('checkl') == "true") {
        console.log("checkl checked");
        document.getElementById("checkl").checked=true;
    } else {
        console.log("checkl");
    }
	if (localStorage.getItem('checktb') == "true") {
        console.log("checktb checked");
        document.getElementById("checktb").checked=true;
    } else {
        console.log("checktb");
    }
	if (localStorage.getItem('checkpi') == "true") {
        console.log("checkpi checked");
        document.getElementById("checkpi").checked=true;
    } else {
        console.log("checkpi");
    }
	if (localStorage.getItem('checkn') == "true") {
        console.log("checkn checked");
        document.getElementById("checkn").checked=true;
    } else {
        console.log("checkn");
    }
    if (localStorage.getItem('checktie') == "true") {
        console.log("checktie checked");
        document.getElementById("checktie").checked=true;
    } else {
        console.log("checktie");
    }
	if (localStorage.getItem('checkcie') == "true") {
        console.log("checkcie checked");
        document.getElementById("checkcie").checked=true;
    } else {
        console.log("checkcie");
    }
	if (localStorage.getItem('checkdie') == "true") {
        console.log("checkdie checked");
        document.getElementById("checkdie").checked=true;
    } else {
        console.log("checkdie");
    }
    

    //
    if (localStorage.getItem('checkppi') == "true") {
        console.log("checkppi checked");
        document.getElementById("checkppi").checked=true;
    } else {
        console.log("checkppi");
    }
	if (localStorage.getItem('checkli') == "true") {
        console.log("checkli checked");
        document.getElementById("checkli").checked=true;
    } else {
        console.log("checkli");
    }
	if (localStorage.getItem('checktbi') == "true") {
        console.log("checktbi checked");
        document.getElementById("checktbi").checked=true;
    } else {
        console.log("checktbi");
    }
	if (localStorage.getItem('checkpii') == "true") {
        console.log("checkpii checked");
        document.getElementById("checkpii").checked=true;
    } else {
        console.log("checkpii");
    }
	if (localStorage.getItem('checkni') == "true") {
        console.log("checkni checked");
        document.getElementById("checkni").checked=true;
    } else {
        console.log("checkni");
    }
    if (localStorage.getItem('checktiei') == "true") {
        console.log("checktiei checked");
        document.getElementById("checktiei").checked=true;
    } else {
        console.log("checktiei");
    }
	if (localStorage.getItem('checkciei') == "true") {
        console.log("checkciei checked");
        document.getElementById("checkciei").checked=true;
    } else {
        console.log("checkciei");
    }
	if (localStorage.getItem('checkdiei') == "true") {
        console.log("checkdiei checked");
        document.getElementById("checkdiei").checked=true;
    } else {
        console.log("checkdiei");
    }
    
    //
    //
    if (localStorage.getItem('syncpp') == "true") {
        document.getElementById("syncpp").checked=true;
    } else {
        console.log("syncpp");
    }
	if (localStorage.getItem('syncpi') == "true") {
        document.getElementById("syncpi").checked=true;
    } else {
        console.log("syncpi");
    }
	if (localStorage.getItem('synctb') == "true") {
        document.getElementById("synctb").checked=true;
    } else {
        console.log("synctb");
    }
	if (localStorage.getItem('synccb') == "true") {
        document.getElementById("synccb").checked=true;
    } else {
        console.log("synccb");
    }

    //
    if (localStorage.getItem('syncppi') == "true") {
        document.getElementById("syncppi").checked=true;
    } else {
        console.log("syncppi");
    }
	if (localStorage.getItem('syncpii') == "true") {
        document.getElementById("syncpii").checked=true;
    } else {
        console.log("syncpii");
    }
	if (localStorage.getItem('synctbi') == "true") {
        document.getElementById("synctbi").checked=true;
    } else {
        console.log("synctbi");
    }
	if (localStorage.getItem('synccbi') == "true") {
        document.getElementById("synccbi").checked=true;
    } else {
        console.log("synccbi");
    }
    //
    if (localStorage.getItem('syncpp2') == "true") {
        document.getElementById("syncpp2").checked=true;
    } else {
        console.log("syncpp2");
    }
	if (localStorage.getItem('syncpi2') == "true") {
        document.getElementById("syncpi2").checked=true;
    } else {
        console.log("syncpi2");
    }
	if (localStorage.getItem('synctb2') == "true") {
        document.getElementById("synctb2").checked=true;
    } else {
        console.log("synctb2");
    }
	if (localStorage.getItem('synccb2') == "true") {
        document.getElementById("synccb2").checked=true;
    } else {
        console.log("synccb2");
    }



	if (localStorage.getItem('checksrb') == "true") {
        console.log("checksrb checked");
        document.getElementById("checksrb").checked=true;
    } else {
        console.log("checksrb");
    }
	var lvl = localStorage.getItem('blocklvl');
	document.getElementById("lvltb").value = lvl;
}
var loadUsers = function (){
		if (typeof(localStorage.busers) !== 'undefined') {
			var array = JSON.parse(localStorage.busers);
			var text = "";
			array.forEach(function(entry) {
				text = text + entry + ",";
			});
			document.getElementById("users").value = text;
	    }
}
var updateUsers = function () {
		var unsplit = document.getElementById("users").value;
		var split = unsplit.split(",");
		localStorage.busers = JSON.stringify(split);
		console.log("Updating Users");
}
var setupCounter = function (){
		if (typeof(localStorage.bucounter) == 'undefined') {
			localStorage.bucounter = "0";
		}
		$('#counter').html(localStorage.bucounter);
}