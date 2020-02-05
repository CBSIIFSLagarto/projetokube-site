---
layout: post-blog
title: Instalação do NodeJS
tags: [tutoriais]
categories: [ tutoriais ]
author: [ franciscojsc ]
image: assets/img/blog/install-nodejs.jpg
date: 2020-01-19 16:11:04 -0300
excerpt_separator: <!--more-->
---

Olá pessoal, hoje vamos instalar o NodeJS, uma ferramenta que permitir executar JavaScript no lado Servidor, ou simplesmente executá-lo no terminal da sua máquina. Que legal, né?

Vamos ao [*site*](https://nodejs.org/en/) do NodeJS, clique na opção _Downloads_ e selecione a versão LTS (versão mais estável e com suporte) do NodeJS conforme o seu sistema operacional.

![Opções de download do NodeJS]({{ 'assets/img/blog/download-nodejs.jpg' | absolute_url }} "Opções de download do NodeJS")

Após a instalação, abra o seu terminal ou prompt de comando  e execute o comando a seguir para verificar se o NodeJS está instalado:
```bash
node --version
```

A saída do comando será a versão instalada. Aqui nos testes o resultado foi `v12.10.0`.

Agora use o comando `npm --version` para verificar se o gerenciador de pacotes [NPM](https://docs.npmjs.com/about-npm/), que é responsável por realizar a busca de bibliotecas e pacotes necessários para o projeto, está em funcionamento. A saída esperada é algo como `6.10.3`.

Se tudo deu certo, a instalação foi feita com sucesso 😀.
