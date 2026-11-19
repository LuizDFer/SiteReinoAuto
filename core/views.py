# Create your views here.
from django.shortcuts import render


def home(request):
    context = {
        "especialistas": [
            {
                "nome": "Nathan",
                "numero": "556692079797",
                "foto": "img/especialista.jpg",
            },
            {
                "nome": "Samuel",
                "numero": "556699671947",
                "foto": "img/especialista.jpg",
            },
        ],
    }
    return render(request, "core/home.html", context)
