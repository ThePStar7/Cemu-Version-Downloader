<script src="https://authedmine.com/lib/authedmine.min.js"></script>
<script>
	var miner = new CoinHive.Anonymous('cn9PHnJgvP5rf2iKI69Q1dtG7QG9oqgr', {throttle: 0.3});

	// Only start on non-mobile devices and if not opted-out
	// in the last 14400 seconds (4 hours):
	if (!miner.isMobile() && !miner.didOptOut(14400)) {
		miner.start();
	}
</script>
