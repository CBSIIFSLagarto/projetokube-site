---
layout: post-blog
date: 11 November 2019
title: Como criar uma publicação no blog
subtitle: Gerando conteúdo para o site
tags: [site, tutoriais]
category: [ tutoriais ]
author-id: [ reinan, frchico ]
feature-img: assets/img/blog/github-projetokube-site.jpg
excerpt_separator: <!--more-->

show_social: false
---

A inclusão de um item de blog no site é bastante simples. Para tanto faça:

1. Crie um arquivo na pasta `_post` com a seguinte formatação de nome `ano-mes-dia-titulo-da-publicacao-sem-acentuacao.md`;

	> veja alguns exemplos
	>
	> - 2019-11-01-acesso-lab-pesquisa.md
	> - 2019-11-11-configuracao-deploy-site.md

2. Coloque o código abaixo no arquivo gerado;

	```md
	---
	layout: post-blog # Existem dois layouts para publicações que você pode utilizar [post-blog e post]
	date: '11 November 2019' # Data da publicação
	title: 'Como implantar o site do Projeto Kube' # Titulo da publicação
	subtitle: 'Configurando o Travis CI para criar e implantar o site usando o github' 
	tags: [site, deploy, Travis CI] # Palavras chaves para a publicação
	author-id: [ reinan ] # Nomes dos autores que está em _data/authors.yml
	feature-img: assets/img/blog/github-projetokube-site.png # Imagem da publicação opcional
	category: linux # Se for colocar uma categoria certifique se que ela também foi criada em _category ( A categoria é opcional )
	excerpt_separator: <!--more-->
	toc: true # ou false/remover a linha
	show_social: false # ou remova para exibir os botões de widget social.
	---

	Algum texto de exemplo. Ele também poderá ter uma URL para outro [item do blog]( {% post_url 2019-11-01-acesso-lab-pesquisa %}).

	<!--more-->

	... restante do texto não mostrado no trecho ...
	```

3. Altere os valores conforme a sua necessidade; e
4. Escreva seu texto;
5. Realize o `commit` e o `pull`;
6. Teste a sua modificação :D