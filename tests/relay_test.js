var RP = require('../RELAYplate');
var rp0 = new RP(7);

// start with a clean slate
rp0.relayALL(0);

var i = 0;

setInterval(function () {
	i = (i % 7) + 1;
	rp0.relayTOGGLE(i);
}, 500)

process.on('exit', function() {
	rp.0.relayALL(0);
	exit();
});
