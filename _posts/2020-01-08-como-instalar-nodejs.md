---
layout: post-blog
title: Instalação do NodeJS
tags: [tutoriais]
category: [ tutoriais ]
author-id: [ franciscojsc ]
feature-img: assets/img/blog/install-nodejs.png
excerpt_separator: <!--more-->
---

Olá pessoal, hoje vamos instalar o NodeJS, uma ferramenta que permitir executar JavaScript no lado Servidor, ou simplesmente executá-lo no terminal da sua máquina. Que legal, né?

Vamos ao [*site*](https://nodejs.org/en/) do NodeJS, clique na opção _Downloads_ e selecione a versão LTS (versão mais estável e com suporte) do NodeJS conforme o seu Sistema Operacional.

![Opções de download do NodeJS]({{ 'assets/img/blog/download-nodejs.png' | absolute_url }} "Opções de download do NodeJS")

Após a instalação, abra o seu terminal, prompt de comando ou qualquer tela preta, kkk. Execute o comando a seguir para verificar se o NodeJS está instalado:
```bash
node --version
```

Execute o comando a seguir para verificar se o [NPM](https://docs.npmjs.com/about-npm/) (gerenciador de pacotes) responsável por realizar a busca dos pacotes necessários para o projeto.
```bash
npm --version
```

Ok, a instalação foi feita com sucesso :)