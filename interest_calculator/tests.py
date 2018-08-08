from django.test import TestCase
import json

class CalculateTestCase(TestCase):
    def test_calculate(self):
        tests = [
            {
                'initial': '50',
                'interest': '1',
                'final': 19579.17
            },
            {
                'initial': '21',
                'interest': '0.25',
                'final': 93.94 
            },
            {
                'initial': '30',
                'interest': '0',
                'final': 30.00
            }
        ]

        for test in tests:
            data = json.dumps({
                'savingsAmount': test['initial'],
                'interestRate': test['interest']
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
