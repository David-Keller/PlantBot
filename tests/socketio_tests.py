# tests.py
import unittest, app


class SocketIOTestCase(unittest.TestCase):
    def test_server_sends_correct_hello(self):
        client = app.socketio.test_client(app.app)
        r = client.get_received()
        # server only sends one message
        self.assertEquals(len(r), 1)
        from_server = r[0]
        # server message is named 'hello'
        self.assertEquals(from_server['name'], 'hello')
        data = from_server['args'][0]
        # server message is calibrated correctly
        self.assertEquals(data['message'], "Hello from the PlantBot server!")

if __name__ == '__main__':
    unittest.main()
