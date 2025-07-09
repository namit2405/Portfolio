from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer


@api_view(['POST'])
def contact_create(request):
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