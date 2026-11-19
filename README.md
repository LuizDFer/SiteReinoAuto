# Reino Automotivo

Site institucional da Reino Automotivo, desenvolvido em Django. Apresenta serviços, vídeos e contatos por WhatsApp.

## Rodar localmente

Requer Python 3.14 e [uv](https://docs.astral.sh/uv/).

1. `uv sync --group dev`
2. Copie `.env.example` para `.env` e substitua `DJANGO_SECRET_KEY` por uma chave exclusiva. Gere uma com `uv run python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`.
3. `uv run python manage.py migrate`
4. `uv run python manage.py runserver`

O site estará em `http://127.0.0.1:8000/`.

## Verificação

- `uv run python manage.py check`
- `uv run python manage.py test`
- `uv run python manage.py collectstatic --noinput`
- `uv run ruff check .`

## Ambiente de produção

Configure `DJANGO_SECRET_KEY` como segredo do provedor, `DJANGO_DEBUG=False`, `DJANGO_ALLOWED_HOSTS` com os domínios reais e `DJANGO_CSRF_TRUSTED_ORIGINS` com as origens HTTPS. Ative `DJANGO_SECURE_SSL_REDIRECT=True` e `DJANGO_SECURE_HSTS_SECONDS` apenas quando o domínio servir HTTPS corretamente. Execute migrações e `collectstatic`, sirva os arquivos estáticos por um servidor ou serviço próprio e execute a aplicação via WSGI/ASGI. O GitHub armazena o código; GitHub Pages sozinho não executa Django.

Não publique `.env`, `db.sqlite3` nem dados de clientes. Os quatro vídeos usados na página e as imagens em `static/` fazem parte do código publicado. A imagem hero desktop é ilustrativa, gerada a partir das imagens locais existentes; não representa necessariamente a equipe ou as instalações reais.

## Conteúdo a confirmar antes de lançar

- Confirmar nomes e números de WhatsApp de Nathan e Samuel.
- Confirmar o perfil do Instagram e o link de crédito no rodapé.
- Revisar textos de serviços e promessas comerciais.
- Fornecer fotos reais da equipe e resultados de antes/depois caso deseje essas seções; os espaços provisórios foram retirados.
- Confirmar direitos de uso dos vídeos e da marca. A imagem antiga `hero.jpg`, que mostrava marca d'água, foi retirada da cópia pronta para publicação.

## Publicação no GitHub

O código está no repositório privado [LuizDFer/SiteReinoAuto](https://github.com/LuizDFer/SiteReinoAuto), na branch `main`. Para publicar alterações futuras, revise o conteúdo, faça um commit e envie para `origin/main`. Não inclua a chave de produção no repositório. A hospedagem do site Django exige um serviço de aplicação separado do GitHub.
