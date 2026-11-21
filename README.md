# Reino Automotivo

Fiz este site para apresentar os serviços do Reino Automotivo e mostrar em vídeo como fica o trabalho da equipe. Quem quiser pedir um orçamento pode escolher com qual especialista falar pelo WhatsApp.

**[Abrir o site](https://site-reino-auto.vercel.app/)**

## O que fiz

Usei Django para renderizar a página e escrevi a interface em HTML, CSS e JavaScript. Na galeria, deixei os vídeos sob controle do visitante, que escolhe o que quer assistir.

- Página responsiva com temas claro e escuro.
- Navegação por teclado, link para pular ao conteúdo e suporte a movimento reduzido.
- Metadados de SEO e compartilhamento social.
- Testes para a página inicial e para os arquivos de mídia usados nela.

## Tecnologias

| Camada | Ferramentas |
| --- | --- |
| Aplicação | Python 3.14, Django 6, Django templates |
| Interface | HTML, CSS, JavaScript sem framework |
| Dependências e qualidade | uv, Ruff, testes do Django |
| Hospedagem | Vercel para a aplicação e os arquivos estáticos |

## Executar localmente

1. Instale Python 3.14 e [uv](https://docs.astral.sh/uv/).
2. Execute `uv sync --group dev`.
3. Copie `.env.example` para `.env` e gere uma chave exclusiva para `DJANGO_SECRET_KEY` com `uv run python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`.
4. Execute `uv run python manage.py migrate` e `uv run python manage.py runserver`.
5. Abra `http://127.0.0.1:8000/`.

Para verificar o projeto:

```bash
uv run python manage.py check
uv run python manage.py test
uv run python manage.py collectstatic --noinput
uv run ruff check .
```

## Organização

- `core/` reúne a página inicial e seus testes.
- `templates/` contém o HTML renderizado pelo Django.
- `static/` reúne estilos, scripts, marca, imagem hero e vídeos.
- `config/` contém a configuração da aplicação.

## Publicação

O código fica no GitHub e a aplicação é publicada pela Vercel. A chave Django é configurada como variável de ambiente da hospedagem. `.env`, banco local e arquivos gerados não entram no repositório. A página pública não depende do banco local; funcionalidades futuras que gravem dados exigirão um banco persistente.

A imagem hero desktop é ilustrativa e foi gerada com base nas referências visuais disponíveis. Antes de usar o projeto como site comercial definitivo, confirme os dados de contato, o texto de serviços e os direitos de uso dos vídeos e da marca.
