<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
        <link rel="manifest" href="{{ asset('manifest.json') }}">
    <title>Kostay</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        @media only screen and (max-width: 600px) {
            #app {
                width: 100%;
                background-color: white;
                height: 100vh;
                word-wrap: break-word;
            }
        }

        #app {
            width: 480px;
            background-color: white;
            height: 100vh;
            word-wrap: break-word;
        }



        .fixed-mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            background-color: wheat;
        }
    </style>
</head>

<body style="width: 100%">
    <div class="fixed-mobile">
        <div id="app"></div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
