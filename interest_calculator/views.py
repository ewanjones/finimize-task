from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

#  important variables would go here to allow for easy configuration
MONTHS_FORECAST = 50 * 12

@require_POST
@csrf_exempt
def calculate(request):
    '''
    /calculate/
    POST

    Description
    ===========
    Calculates the amount a user would have after MONTHS_FORECAST months, given the parameters. 

    Params
    ======
    initial - {float} amount of intial savings
    monthly - {float} amount that will be paid in each month
    interest - {float} interest as a percentage

    Errors
    ======
    400 - bad request - invalid parameters
    '''

    params = json.loads(request.body)
    initial = params.get('initial', 0)
    monthly = params.get('monthly', 0)
    interest = params.get('interest', 0)
    interval = params.get('interval', 'monthly')

    try:
        initial = float(initial)
        monthly = float(monthly)
        interest = percent_to_decimal(float(interest))
    except ValueError:
        return HttpResponseBadRequest('Parameters must be integers or floats')
            
    is_valid = lambda param: float(param) > 0
    if not is_valid(interest) or not any(is_valid(param) for param in [initial, monthly]):
        return HttpResponseBadRequest('Required parameters are not provided')

    forecast = calculate_forecast(initial, monthly, interest, interval)

    return JsonResponse({
        'forecast': forecast
    })


def percent_to_decimal(percent):
    return percent / 100

    
def calculate_forecast(initial, monthly, interest, interval):
    #  For a complex algorithm, this function would be located in a separate file(s)

    amount = initial
    interval_mapping = {
        'monthly': 1,
        'quarterly': 3,
        'annually': 12
    }
    forecast = [{
        'month': 0, 
        'amount': initial,
    }]

    for month in range(1, MONTHS_FORECAST + 1):
        if month % interval_mapping[interval] == 0:
            amount = amount * (1 + interest)

        amount += monthly

        forecast.append({
            'month': month,
            'amount': round(amount, 2)
        })

    return forecast 

