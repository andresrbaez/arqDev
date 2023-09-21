from rest_framework import generics, viewsets, permissions
from rest_framework.parsers import MultiPartParser
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer
    
    # class ImageUploadView(generics.CreateAPIView):
    #     queryset = Project.objects.all()
    #     serializer_class = ProjectSerializer
    #     parser_classes = (MultiPartParser,)

    #     def create(self, request, *args, **kwargs):
    #         images = request.FILES.getlist('image')
    #         for image in images:
    #             Project.objects.create(image=image)
    #         return super().create(request, *args, **kwargs)
