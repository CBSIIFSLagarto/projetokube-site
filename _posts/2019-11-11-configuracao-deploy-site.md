---
layout: post-blog
date: 11 November 2019
title: Como implantar o site do Projeto Kube
subtitle: Configurando o Travis CI para criar e implantar o site usando o github
tags: [site, deploy, Travis CI]
author-id: reinan
excerpt_separator: <!--more-->
---

1. Configurando o Travis CI para criar e implantar o site

Devemos criar uma conta no Travis CI para sincronizar nosso repositório GitHub com o Travis  <!--more-->, então temos que procurar o repositório no Travis e depois clicar com o botão direito para ativar esse repositório.

![Projeto](https://miro.medium.com/max/1675/1*BwypOVhSR_DcGHRjrZI7BA.png)

Depois disso precisamos adicionar um token do GitHub para o Travis CI para poder publicar o site gerado. Vá para [Github Token](https://github.com/settings/tokens) e crie um token de acesso pessoal.

![Projeto](https://miro.medium.com/max/2815/1*5fOAumDl3XCWD0h-Vhtfcw.png)

Depois de gerar seu token, copie-o imediatamente, pois ele só estará disponível apenas quando é criado. Leve esse token copiado de volta à página Configurações no Travis CI, crie uma variável de ambiente chamada GITHUB_TOKEN, cole o token no campo value, verifique se “Exibir valor no log de criação” não está marcado e clique em Adicionar.

2. Mudando a branch do GithubPage

O travis-ci cria uma branch para a compilação do jekyll chamada de gh-pages, então devemos informar ao Github que essa branch é a nossa página que ficarar no site. Clique em Settings e depois procure por GitHub Pages e mude a branch para gh-pages 

Houve um problema com a **URL** porque na compilação com a opção `relative_url ` ficava sem o domínio do site em todos os links ( **CSS** , **JS** e etc.. com isso as páginas não carregavam ) e com a opção `absolute_url` que pegava a configuração que está em `_config.yml`: 
`url: https://cbsiifslagarto.github.io/projetokube-site`
e substituir quando for compilado pelo travis-ci. 

Isso não é bem um erro mais eu penso que não é a melhor forma. Porém, foi a única maneira que encontrei para corrigir o erro que não estava carregando os **CSS** e **JS**.
