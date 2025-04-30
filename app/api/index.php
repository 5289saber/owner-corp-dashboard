<?php
// Basic server-side logic
$pageTitle = "Welcome to My PHP Page";
$currentDate = date("F j, Y");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $pageTitle; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f8f8f8;
        }
        header, footer {
            background-color: #333;
            color: white;
            padding: 10px;
        }
        main {
            background: white;
            padding: 20px;
            margin-top: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <header>
        <h1><?php echo $pageTitle; ?></h1>
    </header>

    <main>
        <p>Hello! Today is <?php echo $currentDate; ?>.</p>
        <p>This is a generic PHP page you can customize further.</p>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> My Website</p>
    </footer>
</body>
</html>