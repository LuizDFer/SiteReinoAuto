from django.contrib.staticfiles import finders
from django.test import TestCase
from django.urls import reverse


class HomePageTests(TestCase):
    def test_home_renders_key_sections_and_contacts(self):
        response = self.client.get(reverse("core:home"))
        self.assertEqual(response.status_code, 200)
        sections = (
            b'id="inicio"',
            b'id="servicos"',
            b'id="galeria"',
            b'id="sobre"',
            b'id="contato"',
        )
        for section in sections:
            self.assertIn(section, response.content)
        self.assertContains(response, "wa.me/556692079797")
        self.assertContains(response, "wa.me/556699671947")
        self.assertNotContains(response, "em breve")

    def test_page_media_exists(self):
        for path in (
            "img/hero-desktop.png",
            "video/hero.mp4",
            "video/galeria-01.mp4",
            "video/galeria-02.mp4",
            "video/galeria-03.mp4",
        ):
            with self.subTest(path=path):
                self.assertIsNotNone(finders.find(path))
