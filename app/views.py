from django.shortcuts import render

from .models import Product


# Create your views here.
def index(request):
    products = Product.objects.all()
    return render(request, 'index.html',{
        'products': products})


def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def contacts(request):
    return render(request, 'contacts.html')

def auth(request):
    return render(request, 'auth.html')

def profile(request):
    return render(request, 'profile.html')
