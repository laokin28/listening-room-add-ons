function LRDataInterface(hostname, port) {
	
	function sendTrackData(track, callback) {
		if(track.title && track.title != "" && track.artist && track.artist != "") {
			var url = "http://"+ hostname +":"+ port +"/addtrackplay/?callback=?";
			$.getJSON(
				url,
				{
					id: track.id,
					artist: track.artist,
					title: track.title,
					album: track.album,
					user: track.username,
					userId: track.user_id,
					room: track.room,
					timestamp: track.date,
					reportedByUser: track.reported_by_user,
					reportedByUserId: track.reported_by_user_id
				},
				function(data, textStatus, jqXHR) {
					callback(data);
				}
			);
		}
	}
	this.sendTrackData = sendTrackData;
	
	function getUsers(room, callback) {
		var url = "http://"+ hostname +":"+ port +"/v1/all_users.json?callback=?";
		$.getJSON(
			url,
			{room: room},
			function(data, textStatus, jqXHR) {
				callback(data);
			}
		);
	}
	this.getUsers = getUsers;
}
