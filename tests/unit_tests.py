# tests.py
import unittest, app, os

class AppUnitTesting(unittest.TestCase):
    def test_two_is_one_more_than_one(self):
        self.assertEquals(1+1, 2)
        self.assertEquals(2-1, 1)
        self.assertNotEqual(1,2)
        self.assertNotEqual(2,1)
        
if __name__ == '__main__':
    unittest.main()