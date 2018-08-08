from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

MONTHS_FORECAST = 50 * 12

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    interest_rate = params.get('interestRate', None)

    if savings_amount is None or interest_rate is None:
        return HttpResponseBadRequest('Required parameters are not provided')

    interest_rate = percent_to_decimal(float(interest_rate))
    amount = float(savings_amount)

    forecast = [
        {
            'month': 0, 
            'amount': amount 
        }
    ]

    for month in range(1, MONTHS_FORECAST + 1):
        amount = amount * (1 + interest_rate)
        forecast.append({
            'month': month,
            'amount': round(amount, 2)
        })

    return JsonResponse({
        'forecast': forecast
    })



def percent_to_decimal(percent):
    return percent / 100

    
