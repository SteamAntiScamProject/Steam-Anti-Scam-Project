
var donator = false;
var scammer = false;
var vertrader = false;
var creator = false;
var staff = false;
var sid = "0";
var sessionID = "";

var idExp = /<input type="hidden" name="abuseID" value="(.+)">/g;

$(document).ready(function () {
	var id = $('input[name=abuseID]');
	id = id[0]['value'];
	console.log(id);
	checkDB(id);
	//setupBoxes();
	getID();
});
var getID = function (){
	 $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/my/',
			async: true,
            success: function (response) {
					var m = null;
					if(m = idExp.exec(response)){
						sid = m[1];
						
					}
					if(sid !== "0"){
						buttonbox();
					}
				}
        });
}
var setupProfile = function (){
	if(creator || staff){scammer = false;donator = false;vertrader = false;}
	if(scammer){vertrader = false;donator = false;}
	if(donator){
		$( "span.actual_persona_name" ).html($( "span.actual_persona_name" ).html()+"&nbsp;<a href='http://steam-antiscam.eu/faq/?specials'><img src='http://steam-antiscam.eu/system/star.png' alt='Top Donator' style='width:29px;height:28px;float:bottom;'></a>");
	}
	if(vertrader){
		$( "span.actual_persona_name" ).html("<a href='http://steam-antiscam.eu/faq/#collapsespecial'><span class = 'special_p'>&nbsp;Verified Trader&nbsp;</span>&nbsp;</a></br>" +$( "span.actual_persona_name" ).html());
	}
	if(creator){
		$( "span.actual_persona_name" ).html("<a href='http://steam-antiscam.eu/faq/#collapsespecial'><span class = 'special_p'>&nbsp;The Creator of the SteamAS Project&nbsp;</span>&nbsp;</a></br>" +$( "span.actual_persona_name" ).html());
	}
	if(staff && !creator){
		$( "span.actual_persona_name" ).html("<a href='http://steam-antiscam.eu/faq/#collapsespecial'><span class = 'special_p'>&nbsp;Steam Anti-Scam Staff&nbsp;</span>&nbsp;</a></br>" +$( "span.actual_persona_name" ).html());
	}
	if(scammer){
		$( "span.actual_persona_name" ).html("<a href='http://steam-antiscam.eu/faq/#collapsespecial'><span class = 'special_n'>&nbsp;!Scammer!&nbsp;</span>&nbsp;</a></br>" +$( "span.actual_persona_name" ).html());
	}
}
var checkDB = function(steamID64){
	$.post( "http://steam-antiscam.eu/system/getUContent.php", { id: steamID64 }, function(data, textStatus)
    {
		console.log("Data: " + data +   "\nsuccess");
		if(data != "" && data != "undefined"){
			var array = data.split("|");
			var id = array[0];
			var repocont = array[1];
			var repcount = array[2];
			var special = array[3];
			if(special.indexOf(",") > -1){
				console.log("2 specials\n");
				var array2 = special.split(",");
				var sp1=array2[0];
				console.log(sp1+"\n");
				var sp2=array2[1];
				console.log(sp2+"\n");
				switch (sp1){
					case "creator": creator = true; break;
					case "staff": staff = true; break;
					case "vertrader": vertrader = true; break;
					case "donator": donator = true; break;
					case "scammer": scammer = true; break;
				}
				switch (sp2){
					case "creator": creator = true; break;
					case "staff": staff = true; break;
					case "vertrader": vertrader = true; break;
					case "donator": donator = true; break;
					case "scammer": scammer = true; break;
				}
				setupProfile();
				
			}else{
				console.log("Special: " + special);
				switch (special){
					case "creator": creator = true; break;
					case "staff": staff = true; break;
					case "vertrader": vertrader = true; break;
					case "donator": donator = true; break;
					case "scammer": scammer = true; break;
				}
				setupProfile();
				
			}
		}
    });
}
var buttonbox = function (){
	var rightdiv = $("div.steamas_boxes").html();
	var nrightdiv = rightdiv+"<input type='button' class='repb' value='+Rep' /><input type='button' class='reportb' value='Report' /><div class='steamas_boxes_rep'><input class='reportbox' placeholder='Please provide a little description' /></br></br><input type='button' class='reportb2' value='Report' /></br></br></div>" ;
	$( "div.steamas_boxes" ).html(nrightdiv);
	$('input.reportb').click(function() {
		$('input.reportb').css('visibility', 'hidden');
		$('div.steamas_boxes_rep').css('visibility', 'visible');
		$('input.reportb2').css('visibility', 'visible');
	});
	$('input.reportb2').click(function() {
		if($('input.reportbox').val() !== null && $('input.reportbox').val() !== ""){
			$("div.steamas_boxes_rep").html("<span class='reportf'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reported</span></br></br>");
		}else{
			console.log($('input.reportbox').val());
			alert("Please type in a description!");
		}
	});
}
var setupBoxes = function(){
	var rightdiv = $("div.profile_rightcol.responsive_local_menu").html();
	var boxdiv = "<div class=steamas_boxes><span class = 'special_p2'>&nbsp;0 Reputation&nbsp;</span><span class = 'special_n2'>&nbsp;0 Reports&nbsp;</span></br></br></div>";
	$( "div.profile_rightcol.responsive_local_menu" ).html(boxdiv + rightdiv);
	updateBoxes();
}
var updateBoxes = function(){
	var rep = "100";
	var report= "10";
	$('span.special_p2').html(rep +" Reputation");
	$('span.special_n2').html(report +" Reports");
}





