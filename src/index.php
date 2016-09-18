<!doctype html>
<html lang="fr">
    <head>
        <title>Chatchacha !</title>
        <link rel="stylesheet" media="screen" type="text/css" href="./css/chatchacha.css" />
        <script type="text/javascript" src="js/vendor/socket.io.js"></script>
        <script type="text/javascript" src="js/config.js"></script>
        <script type="text/javascript" src="js/chatchacha.js"></script>
    </head>

    <body>
        <header class="header">
            <picture class="header-logo">
                <img src="http://placehold.it/64x64" alt="Chatchacha" />
            </picture>

            <hgroup class="header-titleContainer">
                <h1 class="header-title">Chatchacha</h1>
                <h2 class="header-subtitle">Le chat de la tchatche !</h2>
            </hgroup>

            <aside></aside>
        </header>

        <section class="messageContainer" id="container"></section>

        <footer class="input">
            <textarea class="input-field" placeholder="Tapez votre message ici..." id="input"></textarea>
            <button class="input-button">&gt;</button>
        </footer>
    </body>
</html>