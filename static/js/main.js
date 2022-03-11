

console.log('connection script running')

window.addEventListener("load", function(){
    // ....
    console.log('windows is loaded')


    var chatSocket = new WebSocket(
        // 'ws://' + window.location.host + '/ws/chat/'
        'ws://' + window.location.host + '/ws/chat/'
    )

    chatSocket.onmessage = function(e){
        console.log(e.data)
        var data = JSON.parse(e.data)
        var message = data['message']
        document.querrySelector('#chat-log').value += (message + '\n') 
    }

    chatSocket.onclose = function(e){
        console.error('chat socket is closed')
    }

    document.querySelector("#chat-message-submit").onclick = function(e){
        var messageInputDom = document.querySelector("#chat-message-input")
        var message = messageInputDom.value
        console.log('clicked the send button')
        chatSocket.send(JSON.stringify({
            'message': message
        }))
        messageInputDom.value = '';
    }

    // document.querrySelector("#chat-message-submit").onclick = function(e){
    //     var messageInputDom = document.querrySelector('#chat-message-input')
    //     var message = messageInputDom.value
    //     chatSocket.send(JSON.stringify({
    //         'message': message
    //     }))
    //     messageInputDom.value = '';
    // }

});