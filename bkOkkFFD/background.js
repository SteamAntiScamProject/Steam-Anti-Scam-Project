
// STARTUP
$(document).ready(function () {
	startUp();
});



/*----------------------------------------------------------------------------------------------------------------------------------*/
/* 													VARIABLES OF THIS SCRIPT		 												*/
/* Regex Vars */
var processURLExp 	= /var processURL = '(.+)';/;
var sessionIDExp 	= /<input type="hidden" name="sessionID" value="(.+)" id="sessionID">/;
var sessionIDJSExp 	= /g_sessionID = \"(.+)\";/;

// Steam Invite
var inviteLvlExp 	= /<a class="linkStandard" href="javascript:FriendAccept\( '(\d+)', 'block' \)">/g;

// Steam REP
var nameExp 	= /<span id="steamname" title="(.+)" class="steamname ">/g;
var loadingExp 	= /<div id="profileloading" style="display: none;">/g;
var profileExp 	= /<span id="privacystate"><span class="a03">(.+)<\/span><\/span>/g;
var tradebanExp = /<span id="tradebanstatus"><span class="a03">(.+)<\/span><\/span>/g;
var combanExp 	= /<span id="communitybanstatus"><span class="a01">(.+)<\/span><\/span>/g;
var scammerExp 	= /<span id="steamname" title="(.+)" class="steamname scammername">/g;
var vacbanExp 	= /<span id="vacbanned"><span class="a03">(.+)<\/span>/g;

// Steam Profile
var privprofExp 	= /<div class="profile_private_info">/g;
var stradebanExp 	= /<div class="profile_ban">(.+)<\/div>/g;
var csgoInvExp 		= /<span class="games_list_tab_name">Counter-Strike: Global Offensive<\/span>/g;
var snameExp		= /<span class="actual_persona_name">(.+)<\/span>/g;
var svacbanExp		= /<span class="profile_ban_info">| <a class="whiteLink" href="http:\/\/steamcommunity.com\/actions\/WhatIsVAC">Informationen<\/a><\/span>/g;
var failpIDExp 		= /<div class="error_ctn">/g;
var busersExp		= /<span class="blockedText">/g;
var idExp			= /<input type="hidden" name="abuseID" value="(.+)">/g;

// Steam Inv Empty/Private    false = steam inv not private/empty!

/* Storage Vars */
// PROFILES TO IGNORE
var checkppi 	= false;
var checkli		= false;
var checktbi 	= false;
var checkpii 	= false;
var checkni		= false;
var checktiei 	= false;
var checkciei	= false;
var checkdiei 	= false;
var checksrbi 	= false;

// PROFILES TO BLOCK
var checksrb 	= false;
var checkpp 	= false;
var checkl 		= false;
var checktb 	= false;
var checkpi 	= false;
var checkn 		= false;
var checktie 	= false;
var checkcie 	= false;
var checkdie 	= false;


// Database Vars
var syncpp 		= false;
var syncpi		= false;
var synccb		= false;
var synctb 		= false;

var syncpp2		= false;
var syncpi2		= false;
var synccb2		= false;
var synctb2		= false;

var syncppi		= false;
var syncpii		= false;
var synccbi		= false;
var synctbi		= false;

// OVER BLOCKED USER LIMIT
var over		= false;

// ID OF THE USER OF THIS EXTENSION
var id 			= "0";

var timersd		= false;

var checkedU 	= [];
/*----------------------------------------------------------------------------------------------------------------------------------*/


var startUp = function (){
	checkBusers();
	getScammer();
	setupVars();
	refreshVars();
	checkFriendInvites();
	getID();
	console.log("finished Setup!");
	createTimers(0);
	chrome.alarms.create('120min', {
		delayInMinutes: 120,
		periodInMinutes: 120
	});
	chrome.alarms.create('5min', {
		delayInMinutes: 5,
		periodInMinutes: 5
	});
}


var refreshVars = function (){
	/*-------------------------------------------------------------*/
	//REFRESH Vars
	//
	checksrb 	= JSON.parse(localStorage.getItem('checksrb'));
	checkpp 	= JSON.parse(localStorage.getItem('checkpp'));
	checkl 		= JSON.parse(localStorage.getItem('checkl'));
	checktbi 	= JSON.parse(localStorage.getItem('checktb'));
	checkpi 	= JSON.parse(localStorage.getItem('checkpi'));
	checkn 		= JSON.parse(localStorage.getItem('checkn'));
	checktie 	= JSON.parse(localStorage.getItem('checktie'));
	checkdie 	= JSON.parse(localStorage.getItem('checkdie'));
	checkcie 	= JSON.parse(localStorage.getItem('checkcie'));

	//
	checkppi 	= JSON.parse(localStorage.getItem('checkppi'));
	checkli 	= JSON.parse(localStorage.getItem('checkli'));
	checktbi 	= JSON.parse(localStorage.getItem('checktbi'));
	checkpii 	= JSON.parse(localStorage.getItem('checkpii'));
	checkni 	= JSON.parse(localStorage.getItem('checkni'));
	checktiei 	= JSON.parse(localStorage.getItem('checktiei'));
	checkdiei 	= JSON.parse(localStorage.getItem('checkdiei'));
	checkciei 	= JSON.parse(localStorage.getItem('checkciei'));

	//
	syncpp = JSON.parse(localStorage.getItem('syncpp'));
	syncpi = JSON.parse(localStorage.getItem('syncpi'));
	synctb = JSON.parse(localStorage.getItem('synctb'));
	synccb = JSON.parse(localStorage.getItem('synccb'));

	//
	syncpp2 = JSON.parse(localStorage.getItem('syncpp2'));
	syncpi2 = JSON.parse(localStorage.getItem('syncpi2'));
	synctb2 = JSON.parse(localStorage.getItem('synctb2'));
	synccb2 = JSON.parse(localStorage.getItem('synccb2'));

	//
	syncppi = JSON.parse(localStorage.getItem('syncppi'));
	syncpii = JSON.parse(localStorage.getItem('syncpii'));
	synctbi = JSON.parse(localStorage.getItem('synctbi'));
	synccbi = JSON.parse(localStorage.getItem('synccbi'));

	/*-------------------------------------------------------------*/
}
var setupVars = function () {
	/*Checks if 1 Variable is not set, if so it will be false*/


	if (typeof(localStorage.bucounter) == 'undefined') {
		localStorage.bucounter = "0";
	}

	//
	if (typeof(localStorage.checkppi) == 'undefined') {
		localStorage.setItem('checkppi', "false");	
	}
	if (typeof(localStorage.checkli) == 'undefined') {
		localStorage.setItem('checkli', "false");
	}
	if (typeof(localStorage.checktbi) == 'undefined') {
		localStorage.setItem('checktbi', "false");
	}
	if (typeof(localStorage.checkpii) == 'undefined') {
		localStorage.setItem('checkpii', "false");
	}
	if (typeof(localStorage.checkni) == 'undefined') {
		localStorage.setItem('checkni', "false");
	}
	if (typeof(localStorage.checktiei) == 'undefined') {
		localStorage.setItem('checktiei', "false");
	}
	if (typeof(localStorage.checkdiei) == 'undefined') {
		localStorage.setItem('checkdiei', "false");
	}
	if (typeof(localStorage.checkciei) == 'undefined') {
		localStorage.setItem('checkciei', "false");
	}


	//
	if (typeof(localStorage.checkpp) == 'undefined') {
		localStorage.setItem('checkpp', "false");	
	}
	if (typeof(localStorage.checkl) == 'undefined') {
		localStorage.setItem('checkl', "false");
	}
	if (typeof(localStorage.checktb) == 'undefined') {
		localStorage.setItem('checktb', "false");
	}
	if (typeof(localStorage.checkpi) == 'undefined') {
		localStorage.setItem('checkpi', "false");
	}
	if (typeof(localStorage.checkn) == 'undefined') {
		localStorage.setItem('checkn', "false");
	}
	if (typeof(localStorage.checksrb) == 'undefined') {
		localStorage.setItem('checksrb', "false");
	}
	if (typeof(localStorage.checktie) == 'undefined') {
		localStorage.setItem('checktie', "false");
	}
	if (typeof(localStorage.checkdie) == 'undefined') {
		localStorage.setItem('checkdie', "false");
	}
	if (typeof(localStorage.checkcie) == 'undefined') {
		localStorage.setItem('checkcie', "false");
	}

	//
	if (typeof(localStorage.blocklvl) == 'undefined') {
		localStorage.blocklvl = "0";
	}

	//
	if (typeof(localStorage.syncpp) == 'undefined') {
		localStorage.setItem('syncpp', "false");
	}
	if (typeof(localStorage.syncpi) == 'undefined') {
		localStorage.setItem('syncpi', "false");	
	}
	if (typeof(localStorage.synctb) == 'undefined') {
		localStorage.setItem('synctb', "false");
	}
	if (typeof(localStorage.synccb) == 'undefined') {
		localStorage.setItem('synccb', "false");
	}
	//
	if (typeof(localStorage.syncpp2) == 'undefined') {
		localStorage.setItem('syncpp2', "false");
	}
	if (typeof(localStorage.syncpi2) == 'undefined') {
		localStorage.setItem('syncpi2', "false");	
	}
	if (typeof(localStorage.synctb2) == 'undefined') {
		localStorage.setItem('synctb2', "false");
	}
	if (typeof(localStorage.synccb2) == 'undefined') {
		localStorage.setItem('synccb2', "false");
	}
	// 
	if (typeof(localStorage.syncppi) == 'undefined') {
		localStorage.setItem('syncppi', "false");
	}
	if (typeof(localStorage.syncpii) == 'undefined') {
		localStorage.setItem('syncpii', "false");	
	}
	if (typeof(localStorage.synctbi) == 'undefined') {
		localStorage.setItem('synctbi', "false");
	}
	if (typeof(localStorage.synccbi) == 'undefined') {
		localStorage.setItem('synccbi', "false");
	}
}

// TIMER SECTION

var createTimers = function (id){
	if(id < 30){
		chrome.alarms.create('thread' + id, {
			delayInMinutes: 1,
			periodInMinutes: 1
		});
		setTimeout(function() {
			createTimers(id+1);
		},2000);
	}
	//console.log("createTimer" + id);
}
//TIMER LISTENER
chrome.alarms.onAlarm.addListener(function (alarm) {
	refreshVars();
	checkFriendInvites();
	if(!over){
		checkBusers();
	}
	if(alarm.name == "120min"){
		proof();
	}
	if(alarm.name == "5min"){
		getScammer();
		getID();
	}
});

// GET SCAMMER OF DATABASE
var getScammer = function (){
	var counters = 0;
	var max = 100;
	$.ajax({
            method: "GET",
            url: 'http://steam-antiscam.eu/system/getEntries.php',
			success: function (response, textStatus, jqXHR) {
				var split1 = response.split("|-|-|");
				split1.forEach(function (entry) {
					var split2 = entry.split(",");
					if(split2[1]== "support"){
						if (localStorage.blockedUsers == 'undefined' || localStorage.getItem('blockedUsers') == null){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}else if(localStorage.getItem('blockedUsers').indexOf(split2[0]) == -1){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}
					}
					if(split2[1]== "Private Profile" && syncpp){
						if (localStorage.blockedUsers == 'undefined' || localStorage.getItem('blockedUsers') == null){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}else if(localStorage.getItem('blockedUsers').indexOf(split2[0]) == -1){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}
					}
					if(split2[1]== "Community Banned" && synccb){
						if (localStorage.blockedUsers == 'undefined' || localStorage.getItem('blockedUsers') == null){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}else if(localStorage.getItem('blockedUsers').indexOf(split2[0]) == -1){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}
					}
					if(split2[1]== "Trade Banned" && synctb){
						if (localStorage.blockedUsers == 'undefined' || localStorage.getItem('blockedUsers') == null){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}else if(localStorage.getItem('blockedUsers').indexOf(split2[0]) == -1){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}
					}
					if(split2[1]== "Private Inventory" && syncpi){
						if (localStorage.blockedUsers == 'undefined' || localStorage.getItem('blockedUsers') == null){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}else if(localStorage.getItem('blockedUsers').indexOf(split2[0]) == -1){
							counters++;
							if(counters < max){
								blockUser(split2[0]);
							}
						}
					}
					// Don't Spam AJAX Posts
					if(counters == max){
						//console.log(max +" Synced");
						return;
					}
				});
			}
	});
}


// CUSTOM BLOCK FUNCTION (BLOCKING WITH NEW SESSIONID)
var blockUser = function (id64) {
	// Security Reasons
	if (localStorage.blockedUsers !== 'undefined' && localStorage.getItem('blockedUsers') !== null){
		if(!(localStorage.getItem('blockedUsers').indexOf(id64) == -1)){
			return;
		}
	}
	$.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/profiles/' + id64,
            success: function (response, textStatus, jqXHR) {
				var sessionID = sessionIDJSExp.exec(response);
				if (sessionID) sessionID = sessionID[1];
				block(id64,sessionID);
			}
	});		
}
var block = function(id64,sessionID){
	/*$.post('http://steamcommunity.com/actions/BlockUserAjax',{sessionID: sessionID, steamid: id64 }
			).done( function() {
				if (localStorage.blockedUsers == 'undefined'){
					localStorage.setItem('blockedUsers', id64+",");
				}else{
					localStorage.setItem('blockedUsers',localStorage.getItem('blockedUsers') + id64 + ",");
				}
			} ).fail( function() {
				console.log("Error could not block " +id64);
	});*/
	$.ajax({
		type: "POST",
		url: "http://steamcommunity.com/actions/BlockUserAjax",
		data: {sessionID: sessionID, steamid: id64 },
		success: function(response){
			if (localStorage.blockedUsers == 'undefined'){
				localStorage.setItem('blockedUsers', id64+",");
			}else{
				localStorage.setItem('blockedUsers',localStorage.getItem('blockedUsers') + id64 + ",");
			}
		},
		error: function(request, status, error) {
			if(error == "Bad Request"){
				if (localStorage.blockedUsers == 'undefined'){
					localStorage.setItem('blockedUsers', id64+",");
				}else{
					localStorage.setItem('blockedUsers',localStorage.getItem('blockedUsers') + id64 + ",");
				}
				console.log("Already blocked user with id " +id64 +", ignore the error above (400 Bad Request)");
			}
		}
	});
}


var checkIfchecked = function (id){
	var checked;
	if(checkedU == null || checkedU == [] || checkedU == undefined){
		checkedU[0] = id;
		console.log(checkedU);
		return false;
	}else if ($.inArray(id,checkedU) != -1){
		console.log(checkedU);
		return true;
	}else{
		var l = checkedU.length;
		checkedU[l] = id;
		console.log(checkedU);
		return false;
	}
	

}


/* FUNCTIONS TO CHECK PROFILE/INVENTORY/BAN etc.*/
var checkFriendInvites = function () {
	//console.log("Bool: " +" "+ syncpp +" "+ syncpi +" "+ synctb +" "+ synccb);
    if (checkpp || checkl || checktb || checkpi || checkn || checkppi || checkli || checktbi || checkpii || checkni || checkdie || checkcie || checktie || checkdiei || checkciei || checktiei || checksrb || checksrbi ) {
        $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/my/home/invites',
            success: function (response, textStatus, jqXHR) {
						var sessionID = sessionIDExp.exec(response);
						var processURL = processURLExp.exec(response);
						if (sessionID) sessionID = sessionID[1];
						if (processURL) processURL = processURL[1];
						var m = null;
						var counter = 0;
						while (m = inviteLvlExp.exec(response)) {
							if(counter < 2 && checkIfchecked(m[1]) == false){
								checkFriendInvitesDelayed(m,sessionID,processURL,response);
								counter++;
							}
						}
						if(counter == 0){
							for(var i = 1 ; i < 30; i++)
							chrome.alarms.clear("thread" + i);
							//console.log("Stopping Timers because of No Load");
							timersd = true;
						}else{
							if(timersd){
								createTimers(0);
								timersd = false;
								//console.log("Recreating Timers because of High Load");
							}else{
								//console.log("Enough Timers there...");
							}
						}
            }
        });
    }
}
var checkFriendInvitesDelayed = function(m,sessionID,processURL,response){
	var friendID = m[1];
	sipbool = false;
	checkIfDB(friendID,sessionID,processURL);
	if(checkpp || checktb || checkpi || checkn || checkppi || checktbi || checkpii || checkni || checkdie || checkcie || checktie || checkdiei || checkciei || checktiei){ checkProfiles(friendID,sessionID,processURL);}
	if(checksrb || checksrbi){ checkProfile(friendID,sessionID,processURL);}
	if(checkl || checkli) {
		var idx = m.index;
		var idx2 = response.indexOf('<span class="friendPlayerLevelNum">', idx);
		idx2 += 35;
		var len = response.indexOf('</span>', idx2) - idx2;
		var lvl = parseInt(response.substr(idx2, len));
		if (JSON.parse(localStorage.blocklvl) > lvl) {
			if(checkl){
				FriendAccept(friendID, 'block', sessionID, processURL,false);
			}
			if(checkli){
				FriendAccept(friendID, 'ignore', sessionID, processURL,false);
			}
		}
	}
}
/* Using SteamREP */
var checkProfile = function (friendID2,sessionIDB,processURLB){
	 $.ajax({
            method: "GET",
            url: 'http://steamrep.com/profiles/' + friendID2,
			async: true,
            success: function (response) {
					var m = null;
					if(checksrb){
						while(m = scammerExp.exec(response)){
							var name = m[1];
							FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
						}
					}
				}
        });
}
/* Using Steam */
var checkProfiles = function (friendID2,sessionIDB,processURLB){ 
	 $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/profiles/' + friendID2,
			async: true,
            success: function (response) {
					var m = null;	
					if(checkn || checkni) {
						m = null;						
							while (m = snameExp.exec(response)) {
								var name = m[1];
								if (typeof(localStorage.busers) !== 'undefined') {
									var array = JSON.parse(localStorage.busers);
									var equals = false;
									array.forEach(function(entry) {
										if(entry.toUpperCase() === name.toUpperCase()){
											equals = true;
										}
									});
									if(equals){
										if(checkni){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
										}else{
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
										}
										return;
								}
									
							}
						}
					}
					// Private Profile
					if(checkpp || checkppi){
						m = null;
						while(m = privprofExp.exec(response)){
							if(checkppi){
								FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
							}else{
								FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
							}
							return;
						}
					}
					// Trade banned
					if(checktb || checktbi){
						m = null;
						while(m = stradebanExp.exec(response) && svacbanExp.exec(response) === null){
							if(checktbi){
								FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
							}else{
								FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
							}
							return;
						}
					}


					// Private Inventory & EMTPY/NO CSGO/DOTA/TF2 INV
					if((checkpi && checkcie) || (checkpii && checkciei) || (checkcie && checkpii) || (checkciei && checkpi)){
						$.ajax({
							method: "GET",
							url: 'http://steamcommunity.com/profiles/' + friendID2 + '/inventory/json/730/2',
							async: true,
							datatype: "json",
							success: function (response) {
									if(!response['success'] && response['Error'] != undefined && response['Error'] != null && response['Error'] != NaN &&  response['Error'] != ""){
										// Private INV
										if(checkpii){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkpi){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
										if(checkciei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkcie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
										
									}else if (!response['success']){
										// NO CSGO INV
										if(checkciei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
											return;
										}else if (checkcie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
											return;
										}
										
									}
								}
							});
					}else if((checkpi && checkdie) || (checkpii && checkdiei) || (checkdie && checkpii) || (checkdiei && checkpi)){
						$.ajax({
							method: "GET",
							url: 'http://steamcommunity.com/profiles/' + friendID2 + '/inventory/json/570/2',
							async: true,
							datatype: "json",
							success: function (response) {
									if(!response['success'] && response['Error'] != undefined && response['Error'] != null && response['Error'] != NaN &&  response['Error'] != ""){
										// Private INV
										if(checkpii){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkpi){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
										if(checkdiei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkdie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
									}else if (!response['success']){
										// NO DOTA INV
										if(checkdiei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
											return;
										}else if (checkdie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
											return;
										}
									}
								}
							});
					}else if((checkpi && checktie) || (checkpii && checktiei) || (checkcie && checkpii) || (checktiei && checkpi)){
						$.ajax({
							method: "GET",
							url: 'http://steamcommunity.com/profiles/' + friendID2 + '/inventory/json/440/2',
							async: true,
							datatype: "json",
							success: function (response) {
									if(!response['success'] && response['Error'] != undefined && response['Error'] != null && response['Error'] != NaN &&  response['Error'] != ""){
										// Private INV
										if(checkpii){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkpi){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
										if(checktiei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checktie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
										}
									}else if (!response['success']){
										// NO TF2 INV
										if(checktiei){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
											return;
										}else if (checktie){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
											return;
										}
										
									}
								}
							});
					}else if(checkpi || checkpii){
						$.ajax({
							method: "GET",
							url: 'http://steamcommunity.com/profiles/' + friendID2 + '/inventory/json/570/2',
							async: true,
							datatype: "json",
							success: function (response) {
									if(!response['success'] && response['Error'] != undefined && response['Error'] != null && response['Error'] != NaN &&  response['Error'] != ""){
										// Private Profile
										if(checkpii){
											FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,true);
											return;
										}else if (checkpi){
											FriendAccept(friendID2, 'block', sessionIDB, processURLB,true);
											return;
									}
								}
							}
						});
					}
            	}
        	});
}




// DATABASE CHECKS
var checkIfDB = function(friendID2,sessionIDB,processURLB) {
	// Database Checks
	$.ajax({
			method: "GET",
			url: 'http://steam-antiscam.eu/system/getUserInfo.php?ids=' + friendID2,
			async: true,
			datatype: "json",
			success: function (response) {
				if(response[0]['success'] && response[0]['special'] == "scammer"){
					if(response[0]['reason'] == "support"){
						FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
						//console.log("USER has been banned by Support");
					}
					if(response[0]['reason'] == "Private Profile" && syncpp2){
						FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
						//console.log("USER has been blocked because of Private Profile");
					}
					if(response[0]['reason'] == "Private Inventory" && syncpi2){
						FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
						//console.log("USER has been blocked because of Private Inventory");
					}
					if(response[0]['reason'] == "Trade Banned" && synctb2){
						FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
						//console.log("USER has been blocked because of Trade Ban");
					}
					if(response[0]['reason'] == "Community Banned" && synccb2){
						FriendAccept(friendID2, 'block', sessionIDB, processURLB,false);
						//console.log("USER has been blocked because of Community Ban");
					}
					if(response[0]['reason'] == "Private Profile" && syncppi){
						FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
						//console.log("USER has been ignored because of Private Profile");
					}
					if(response[0]['reason'] == "Private Inventory" && syncpii){
						FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
						//console.log("USER has been ignored because of Private Inventory");
					}
					if(response[0]['reason'] == "Trade Banned" && synctbi){
						FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
						//console.log("USER has been ignored because of Trade Ban");
					}
					if(response[0]['reason'] == "Community Banned" && synccbi){
						FriendAccept(friendID2, 'ignore', sessionIDB, processURLB,false);
						//console.log("USER has been ignored because of Community Ban");
					}
				}
			}
	});
}




// BLOCKED USERS COUNTER
var checkBusers = function (){
	$.ajax({
            method: "POST",
            url: 'http://steamcommunity.com/my/friends/blocked',
			async: true,
            success: function (response) {
				var blockedUsers = 0;
				var m = null;
				while(m = busersExp.exec(response)){
					blockedUsers++;
				}
				if(busersExp.exec(response) == null){
					blockedUsers = "Over 7500";
				}
				localStorage.bucounter = JSON.stringify(blockedUsers);
				
			},
			error: function () {
				var blockedUsers = ">7500";
				over = true;
				localStorage.bucounter = blockedUsers;
			}
    });
}


// COMMON AJAX FUNCTIONS
var FriendAccept = function (friendID64, action, sessionID, processURL,send) {
    var postData = {
        "json": 1,
        "xml": 1,
        "action": "approvePending",
        "itype": "friend",
        "perform": action,
        "id": friendID64,
        "sessionID": sessionID
    };
    $.ajax({
        method: 'POST',
        url: processURL,
        data: postData,
        success: function (response, textStatus, jqXHR) {
        }
    });
    if(send){
		$.ajax({
	            method: "GET",
	            url: 'http://steamcommunity.com/profiles/' + friendID64,
				async: true,
	            success: function (response) {
						var m = null;
						var name = "";
						while(m = snameExp.exec(response)){
							name = m[1];
						}
						sendEntry(friendID64,name);
					}
	    });
	}
	
}
var getID = function (){
	 $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/my/',
			async: true,
            success: function (response) {
					var m = null;
					if(m = idExp.exec(response)){
						id = m[1];
						if (typeof(localStorage.sessionID) == 'undefined') {
							register(id);
						}
					}
				}
        });
}
var getName = function (steamID){
	 $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/profiles/' + steamID,
			async: true,
            success: function (response) {
					var m = null;
					var name = "";
					while(m = nameExp.exec(response)){
						name = m[1];
					}
					return name;
				}
        });
}
var sendEntry = function (steamID64,steamname){
	$.post( "http://steam-antiscam.eu/system/post.php", { id: steamID64 , name: steamname }, function(data, textStatus)
    {
		//console.log("Data: " + data +   "\nsuccess");
    });
}
var proof = function (){
	$.post( "http://steam-antiscam.eu/system/checkProfiles.php", {}, function(data, textStatus)
    {
		//console.log("Proof: " + data);
    });
}
var register = function (steamID64){
	//console.log("registering");
	$.post( "http://steam-antiscam.eu/system/register.php", {id: steamID64}, function(data, textStatus)
    {
		//console.log("SessionID: " + data);
		var sessionID = data;
		localStorage.sessionID = sessionID;
    });
}