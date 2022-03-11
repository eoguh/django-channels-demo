from channels.generic.websocket import WebsocketConsumer
import json

class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        print('\n connection made--- written by me \n')

    def recieve(self, text_data):
        text_data_json = json.loads(text_data)
        text_data_json['message'] += ' echo'
        self.send(json.dumps(text_data_json))
        print('sending text data through connection \n')


