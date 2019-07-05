<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Dynamic title. -->
		<?php
			// Get topic title from HTTP GET variable.
			$topic = $_GET['topic'];

			// Reformat topic title if required.
			switch($topic)
			{
				case 'ledgerline':
					$topic = 'ledger line';
					break;
				case 'expressionmarks':
					$topic = 'expression marks';
					break;
				case 'chordprogressions':
					$topic = 'chord progressions';
					break;
				case 'sinewave':
					$topic = 'sine wave';
					break;
				case 'keysignatures':
					$topic = 'key signatures';
					break;
				case 'dottednotes':
					$topic = 'dotted notes';
					break;
				case 'noteandrestvalues':
					$topic = 'note & rest values';
					break;
				case 'timesignatures':
					$topic = 'time signatures';
			}
		?>
		<title><?php echo ucwords($topic); ?> - MTSchools</title>

		<meta charset="utf-8">
        <meta name="author" content="Dhani Kris Frohling">
		<!-- Dynamic description. -->
		<meta name="description" content="<?php include('description.php'); ?>">
        <meta name="keywords" content="music,theory,learn,tutorial,tutorials,reference,comprehensive">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		
        <link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" type="text/css" href="content.css">
		<link rel="stylesheet" type="text/css" href="header/header.css">
		<link rel="stylesheet" type="text/css" href="footer/footer.css">
		
		<!-- Script for the functionality of the header and navigation. -->
		<script src="header/header.js"></script>

		<!-- Include Google Analytics service. -->
		<?php include('analyticstracking.php'); ?>
	</head>
	<body>
		<!-- Include header containing navigation. -->
		<?php include('header/header.php'); ?>

		<section class="page-row">
			<!--Aside left -->
			<aside id="left">
				<!-- Include topic's navigation. -->
				<?php include('content/'.$_GET['topic'].'/nav.php'); ?>
			</aside>

			<!-- Article. -->
			<?php
				$dir_exists = 'content/'.$_GET['topic'].'/'.$_GET['topic'].'.php';
				if (file_exists($dir_exists)) {
					include($dir_exists);
				}
				else {
					header( 'Location: http://www.mtschools.net' );
				}
			?>
				
			<!-- Include footer. -->
			<?php //include('footer/footer.php'); ?>
			
			<!--Aside right -->
			<aside id="right"></aside>
		</section>

	</body>
</html>		