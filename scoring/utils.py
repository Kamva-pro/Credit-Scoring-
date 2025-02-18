def calculate_credit_score(business):
    score = 0

    if business.business_age >= 2:
        score += 20

    if business.monthly_revenue > 10000:
        score += 30
    elif business.monthly_revenue > 5000:
        score += 20
    else:
        score += 10

    if business.payment_method == "bank":
        score += 30
    elif business.payment_method == "mobile_money":
        score += 20
    else:  
        score += 10

    if business.missed_payments:
        score -= 20

    return max(0, min(100, score))  
