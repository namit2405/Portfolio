from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .models import Contact
from .serializers import ContactSerializer


@method_decorator(csrf_exempt, name='dispatch')  # CSRF exempt for class-based view
class ContactCreateView(APIView):
    permission_classes = [AllowAny]  # Public access
    authentication_classes = []      # Disable authentication

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            return Response({
                'success': True,
                'message': 'Message sent successfully!',
                'contact': {'id': contact.id}
            }, status=status.HTTP_201_CREATED)

        return Response({
            'success': False,
            'message': 'Invalid form data',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])  # Optional: make contact list public
def contact_list(request):
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)
