<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["goToPage"])) {
    header("Location: / ");
    exit();
}
// Sample Strata admin data (in real usage, this could come from a database)
$strataInfo = [
    'buildingName' => 'Wild Heights',
    'address' => '123 John Road, NSW',
    'strataManager' => 'Nick',
    'contactEmail' => 'nick@yahoo.mail',
    'contactPhone' => '+61 123 456 789',
    'units' => [
        ['unit' => '101', 'owner' => 'Alice Smith', 'status' => 'Owner Occupied'],
        ['unit' => '102', 'owner' => 'John Doe', 'status' => 'Rented'],
        ['unit' => '103', 'owner' => 'Mary Zhang', 'status' => 'Owner Occupied'],
    ]
];
?>



<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<head>
    <meta charset="UTF-8">
    <title>Strata Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; }
        h1 { color: #2c3e50; }
        .section { margin-bottom: 30px; }
        ul { list-style-type: disc; padding-left: 20px; }
        .card { background: #f9f9f9; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <h1>Strata Administration - <?= htmlspecialchars($strataInfo['buildingName']) ?></h1>
    <form method="post">
        <button type="submit" name="goToPage">Go home</button>
    </form>
    <div class="info">
        <p><strong>Address:</strong> <?= htmlspecialchars($strataInfo['address']) ?></p>
        <p><strong>Strata Manager:</strong> <?= htmlspecialchars($strataInfo['strataManager']) ?></p>
        <p><strong>Contact Email:</strong> <?= htmlspecialchars($strataInfo['contactEmail']) ?></p>
        <p><strong>Phone:</strong> <?= htmlspecialchars($strataInfo['contactPhone']) ?></p>
    </div>

    <h2>Unit Directory</h2>
    <table>
        <thead>
            <tr>
                <th>Unit</th>
                <th>Owner</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($strataInfo['units'] as $unit): ?>
                <tr>
                    <td><?= htmlspecialchars($unit['unit']) ?></td>
                    <td><?= htmlspecialchars($unit['owner']) ?></td>
                    <td><?= htmlspecialchars($unit['status']) ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>