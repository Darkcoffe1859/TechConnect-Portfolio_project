import unittest
import json
from your_flask_app import create_app, db

class TestViews(unittest.TestCase):
    def setUp(self):
        self.app = create_app('test_config')  # Use a test configuration
        self.client = self.app.test_client()

        # Create a test database
        with self.app.app_context():
            db.create_all()

            def tearDown(self):
                with self.app.app_context():
                    db.drop_all()

                    def test_get_users(self):
                        response = self.client.get('/api/users')
                        data = json.loads(response.data)

                        self.assertEqual(response.status_code, 200)
                        self.assertIsInstance(data, list)

                        def test_create_user(self):
                            user_data = {
                                    'username': 'testuser',
                                    'email': 'test@example.com',
                                    'password': 'testpassword',
                                    }
                            response = self.client.post('/api/users', data=json.dumps(user_data), content_type='application/json')
                            data = json.loads(response.data)

                            self.assertEqual(response.status_code, 201)
                            self.assertEqual(data['message'], 'User created successfully')
                            def test_create_user_missing_fields(self):
                                user_data = {
                                        'username': 'testuser',
                                        }

                                response = self.client.post('/api/users', data=json.dumps(user_data), content_type='application/json')
                                data = json.loads(response.data)

                                self.assertEqual(response.status_code, 400)
                                self.assertEqual(data['error'], 'All fields are required')

                                if __name__ == '__main__':
                                    unittest.main()

