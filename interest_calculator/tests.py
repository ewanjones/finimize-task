from django.test import TestCase
import json

class CalculateTestCase(TestCase):
    def test_calculate(self):
        tests = [
            {
                'initial': '50',
                'monthly': '0',
                'interest': '1',
                'final': 19579.17
            },
            {
                'initial': '21.50',
                'monthly': '0',
                'interest': '0.25',
                'final': 96.18
            },
            {
                'initial': '21',
                'monthly': '0',
                'interest': '0.25',
                'final': 93.94 
            },
            {
                'initial': '10',
                'monthly': '10',
                'interest': '1',
                'final': 394499.23
            }
        ]

        for test in tests:
            data = json.dumps({
                'initial': test['initial'],
                'monthly': test['monthly'],
                'interest': test['interest']
            })
            response = self.client.post(
                '/calculate/', 
                data, 
                content_type='application/json'
            )
            body = json.loads(response.content)

            final_amount = body['forecast'][-1]['amount']
            
            self.assertEqual(len(body['forecast']), 601)
            self.assertEqual(final_amount, test['final'])

    def test_invalid_parameters(self):
        tests = [
            {
                'initial': '0',
                'monthly': '0',
                'interest': '1',
            },
            {
                'initial': '21',
                'monthly': '10',
                'interest': '0',
            },
            {
                'initial': '0',
                'monthly': '0',
                'interest': '0',
            }
        ]

        for test in tests:
            data = json.dumps({
                'initial': test['initial'],
                'monthly': test['monthly'],
                'interest': test['interest']
            })
            response = self.client.post(
                '/calculate/', 
                data, 
                content_type='application/json'
            )
            
            self.assertEqual(response.status_code, 400)
