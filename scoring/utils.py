def calculate_credit_score(business):
    score = 0

    # Business age impact
    if business.business_age >= 2:
        score += 20

    # Revenue impact
    if business.monthly_revenue > 10000:
        score += 30
    elif business.monthly_revenue > 5000:
        score += 20
    else:
        score += 10

    # Payment method impact
    if business.payment_method == "bank":
        score += 30
    elif business.payment_method == "mobile_money":
        score += 20
    else:  # Cash-based businesses
        score += 10

    # Missed payments impact
    if business.missed_payments:
        score -= 20

    return max(0, min(100, score))  # Ensure score stays between 0-100
