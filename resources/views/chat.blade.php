<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        .list-group{
            overflow-y: scroll;
            height: 500px;
            border-left: black solid 1px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row" id="app">
            <div class="offset-2 col-8 mt-4">
                <ul class="list-group" v-chat-scroll>
                    <li class="list-group-item active">Chat Room</li>
                    <message-component
                    v-for="(value,index) in chat.message" :key="index"
                    color="success"
                    >
                    @{{ value }}
                    </message-component>
                </ul>
                <input type="text" v-model="message" @keyup.enter="send" placeholder="Type some text here..." class="form-control">
            </div>
        </div>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>