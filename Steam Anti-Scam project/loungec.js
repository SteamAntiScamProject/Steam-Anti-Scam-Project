
var messageBoxExp = /<div class="msgtxt">(.+)<\/div>/g;
var whitelist = ["steamanalyst.com","gyazo.com","steamcommunity.com","imgur.com", "steam-antiscam.eu", "csgolounge.com", "csgo.exchange","youtube.com", "ebay.com" , "prntscr.com", "reddit.com", "dota2lounge.com", "google.de"];
var blacklist = ["NOT SCAM","not scam", "not Scam", "..COM", "Jackpot", "jackpot", "JACKPOT", "Redline FN", "win", "999"];

$(".msgtxt" ).each( function (index, element){
	if(index > 0){
		var match = false;
		if(find = $(element).find("a").html()){
			console.log(find);
			for(var i = 0 ; i < whitelist.length; i++){
				if(find.indexOf(whitelist[i]) > -1){
					match = true;
				}
			}
			if(!match){
				//find.replace(/<a(.+)\/a>/g, find);
				find = find.replace("https://","");
				find = find.replace("http://","");
				$(element).html(find +"<span class = 'red'><b> </br>Removed Link because it might be a phishing Link!</b> </span>");
				$(".user" ).each( function (index2, element2){
					if(index2 == (index)){
						$(element2).html($(element2).html() +"<span class = 'red'> Be careful - it might be a Scammer!</span>");
					}
				});
			}
		}else{
			for(var i = 0 ; i < blacklist.length; i++){
				if(find = $(element).html().indexOf(blacklist[i]) > -1){
					$(".user" ).each( function (index2, element2){
						if(index2 == (index)){
							$(element2).html($(element2).html() +"<span class = 'red'> Be careful - it might be a Scammer!</span>");
						}
					});
					break;
				}
			}
			
		}
		
	}
	
});
