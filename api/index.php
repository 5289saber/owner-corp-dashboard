<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["goToPage"])) {
    header("Location: / ");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to the Home Page</h1>

    <form method="post">
        <button type="submit" name="goToPage">Go to /app/page.php</button>
    </form>
</body>
</html>