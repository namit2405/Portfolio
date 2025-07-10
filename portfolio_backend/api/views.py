from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import Contact
from .serializers import ContactSerializer


class ContactCreateView(APIView):
    permission_classes = [AllowAny]  # Allow access without authentication

    def post(self, request):
        """
        Create a new contact form submission
        """
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
def contact_list(request):
    """
    Get all contact form submissions
    """
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)
