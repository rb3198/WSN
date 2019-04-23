<!DOCTYPE html>
<html>
<head>
	<title>Temperature Monitoring</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Roboto" rel="stylesheet">
</head>
<body>
	<header>
		<a href=""><h2>Temperature Monitoring</h2></a>
		<nav>
			<ul>
				<li onclick="makeActive('pl')">Live</li>
				<li onclick="makeActive('ll')">Analysis</li>
				<li onclick="makeActive('bn')">Misc</li>
			</ul>
		</nav>
	</header>
	<p id="temp_tung"></p>
	<p id="temp_cfl"></p>
	<div id="main">
	</div>
	<script type="text/javascript" src="script.js">
		
			
	</script>
</body>
</html>