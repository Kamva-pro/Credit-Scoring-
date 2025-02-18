from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Business
from .utils import calculate_credit_score
from .serializers import BusinessSerializer

@api_view(['POST'])
def submit_business(request):
    serializer = BusinessSerializer(data=request.data)
    if serializer.is_valid():
        business = serializer.save()
        business.credit_score = calculate_credit_score(business)
        business.save()
        return Response({"credit_score": business.credit_score})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_scores(request):
    businesses = Business.objects.all()
    serializer = BusinessSerializer(businesses, many=True)
    return Response(serializer.data)
