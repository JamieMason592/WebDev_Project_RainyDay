<!DOCTYPE html>
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Anime Haven</title>

    <style>
        /* program to add in body style i.e. background colour and font and placement */
        body {
            background-color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            display: flex;
        }

        /* program to set header style i.e. colour and set it to bold and location */
        header {
            text-align: center;
            background-color: #ffffff;
            color: orange;
            padding: 20px;
            font-weight: bold;
            border-bottom: 2px solid orange;
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 1;
        }

        nav {
            width: 200px;
            background-color: #f0f0f0;
            padding: 20px;
            height: 100vh;
            position: fixed;
            /* adjust for the header space */
            top: 70px; 
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }

        /* program for button placement*/
        nav a {
            display: block;
            color: #000;
            text-decoration: none;
            margin: 20px 0; 
            padding: 8px; 
        }

        /* program to show cursor is on button location*/
        nav a:hover {
            text-decoration: underline;
        }

        /* Sidebar box*/
        .content {
            margin-left: 220px;
            padding: 20px;
        }

        .box {
            background-color: #e0e0e0;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }
    </style>
</head>


<body>
    <header>
        <h1><b>Anime Haven</b></h1>
        <p>Your one stop shop for all your anime needs</p>
    </header>
    
    <nav>
        <h2>Navigation</h2>
        <a href="#">Genres</a>
        <a href="#">Popular Series</a>
        <a href="#">New Releases</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>

    <div class="content">
        <div class="box">
            <h2>Popular Series →</h2>
        </div>
        <div class="box">
            <h2>Item 1</h2>
            <p>More information can go here.</p>
        </div>
        <div class="box">
            <h2>Item 2</h2>
            <p>More information can go here.</p>
        </div>
        <div class="box">
            <h2>Show 1</h2>
            <p>More information can go here.</p>
        </div>
    </div>

</body>

</html>
