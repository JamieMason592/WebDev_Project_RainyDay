# WebDev_Project_RainyDay

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Listing</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .anime-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }
        .anime-item {
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
            width: 200px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .anime-item img {
            width: 100%;
            border-radius: 5px;
        }
        .anime-item h3 {
            font-size: 1.2em;
            margin: 10px 0;
        }
    </style>
</head>
<body>

<header>
    <h1>Welcome to Anime Haven</h1>
</header>

<section class="anime-list">
    <div class="anime-item">
        <img src="anime1.jpg" alt="Anime Title 1">
        <h3>Anime Title 1</h3>
        <p>Genre: Action, Adventure</p>
    </div>
    <div class="anime-item">
        <img src="anime2.jpg" alt="Anime Title 2">
        <h3>Anime Title 2</h3>
        <p>Genre: Fantasy, Drama</p>
    </div>
    <div class="anime-item">
        <img src="anime3.jpg" alt="Anime Title 3">
        <h3>Anime Title 3</h3>
        <p>Genre: Romance, Comedy</p>
    </div>
    <div class="anime-item">
        <img src="anime4.jpg" alt="Anime Title 4">
        <h3>Anime Title 4</h3>
        <p>Genre: Mystery, Thriller</p>
    </div>
</section>

</body>
</html>
