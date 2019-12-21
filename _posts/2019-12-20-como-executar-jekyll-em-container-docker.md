---
layout: post-blog
title: Execução do Jekyll em container Docker
tags: [jekyll, docker]
category: [ linux, tutoriais ]
author-id: [ franciscojsc ]
feature-img: assets/img/blog/docker-jekyll.png
excerpt_separator: <!--more-->
---

Olá pessoal, hoje vamos criar um blog utilizando a ferramenta **Jekyll**, com o auxílio dos contêineres **Docker** para gerar e executar o blog localmente.

Abra o terminal com as teclas `ctlr + alt + t`  e crie a pasta para o projeto:
```bash
mkdir jekyll-project
```

Entre na pasta:
```bash
cd jekyll-project
```

Crie a variável de ambiente com a versão do **Jekyll** escolhida:
```bash
export JEKYLL_VERSION=3.8.6
```

Crie um volume para o **bundle**:
```bash
docker volume create banco-de-dados-bundle-jekyll
```

Execute o contêiner para criar o projeto **my-blog**:
```bash
docker run --rm  -it --volume="$PWD:/srv/jekyll" --volume=banco-de-dados-bundle-jekyll:/usr/local/bundle -e JEKYLL_GID=1000 -e JEKYLL_UID=1000 jekyll/jekyll:$JEKYLL_VERSION jekyll new my-blog
```

Entre na pasta gerada:
```bash
cd my-blog
```

Edite o arquivo de configuração `_config.yml` para definir as características do projeto:
```yaml
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely edit after that. If you find
# yourself editing this file very often, consider using Jekyll's data files
# feature for the data you need to update frequently.
#
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'bundle exec jekyll serve'. If you change this file, please restart the server process.
# Site settings
# These are used to personalize your new site. If you look in the HTML files,
# you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
# You can create any custom variable you would like, and they will be accessible
# in the templates via {{ site.myvariable }}.
title: Your awesome title
email: your-email@example.com
description: >-  # this means to ignore newlines until "baseurl:"
Write an awesome description for your new site here. You can edit this
line in _config.yml. It will appear in your document head meta (for
Google search results) and in your feed.xml site description.
baseurl: ""  # the subpath of your site, e.g. /blog
url: ""  # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: jekyllrb
github_username: jekyll

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed

# Exclude from processing.
# The following items will not be processed, by default. Create a custom list
# to override the default setting.
# exclude:
# - Gemfile
# - Gemfile.lock
# - node_modules
# - vendor/bundle/
# - vendor/cache/
# - vendor/gems/
# - vendor/ruby/
```

Atualize o *site* com o comando abaixo:
```bash
docker run --rm  -it --volume="$PWD:/srv/jekyll" --volume=banco-de-dados-bundle-jekyll:/usr/local/bundle -e JEKYLL_GID=1000 -e JEKYLL_UID=1000 jekyll/jekyll:$JEKYLL_VERSION jekyll build
```

Execute o contêiner para iniciar o servidor na (URL) `http://localhost:4000`.
```bash
docker run --rm  -it --volume="$PWD:/srv/jekyll" --volume=banco-de-dados-bundle-jekyll:/usr/local/bundle -e JEKYLL_GID=1000 -e JEKYLL_UID=1000 -p 4000:4000 jekyll/jekyll:$JEKYLL_VERSION jekyll server
```

Outros temas para utilizar com **Jekyll** pode ser encontrado [aqui](https://rubygems.org/search?utf8=%E2%9C%93&query=jekyll-theme).

## Referências

Jekyll Docker. **GITHUB**. Disponível em: [https://github.com/envygeeks/jekyll-docker](https://github.com/envygeeks/jekyll-docker). Acesso em: 30 out. 2019.  

Quickstart. **JEKYLL**. Disponível em: [https://jekyllrb.com/docs](https://jekyllrb.com/docs). Acesso em: 31 out. 2019.  

MATHEUS, Yuri. Criando volumes com Docker. **ALURA**, 19 set. 2018. Disponível em: [https://www.alura.com.br/artigos/criando-volumes-com-docker](https://www.alura.com.br/artigos/criando-volumes-com-docker).  Acesso em: 31 out. 2019.  