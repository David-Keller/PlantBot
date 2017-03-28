import app, unittest, flask_testing, requests

class ServerIntegrationTestCase(flask_testing.LiveServerTestCase):
    def create_app(self):
        return app.app

    def test_server_sends_index(self):
        r = requests.get(self.get_server_url())
        self.assertEquals(r.status_code, 200)
    
    def test_server_401(self):
        r= requests.get((self.get_server_url() + "/badpage"))
        self.assertEquals(r.status_code, 404)
        
if __name__ == '__main__':
    unittest.main()