---
layout: post-blog
title:  'O que é o git?'
tags: [git, github]
category: [ devops, git ]
author-id: [ gabriel ]
feature-img: assets/img/blog/o-que-e-git-print-1.jpg
feature-img-credit: '<a href="https://pixabay.com/pt/users/lmonk72-731125/" target="_blank">Lmonk72</a>'
excerpt_separator: <!--more-->
---

## O que é Git

Git é um sistema open-source de controle de versão utilizado pela grande maioria dos desenvolvedores atualmente ele podemos criar todo o histórico de alterações no codigo dos nossos projeto e facilmente voltar para qualquer ponto para saber como o código estava em determinada data.
Além disso o git nos ajudaa muito a controlar o fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto com ferramentas para análise e resolução de conflitos quando o mesmo arquivo é editado por mais de uma pessoa em funcionalidades diferentes

## como utilizar o git
Crie um a pasta vazia e abra o git bash e em seguida digite o comando `git init` com isso voçê cria um repositório git dentro da pasta vazia .Dentro dessa pasta vai ficar todos os arquivos do seu projeto onde sera possível utlilizar o serviço de controle de versão através dos `comandos git` tanto para voltar para uma versão anterior como para retornar para versões mais recentes

## comandos basicos do git e suas funcionalidades
- `Git status` 
- `Git init`
- `Git commit` 
- `Git add`
- `Git add*`
- `Git log`
- `Git checkout `
- `Git diff`
- `Git pull`
- `Git push`
- `Git reset head`


`Git status` : mostra o status atual do repositório git caso tenha algo para adicionar ao repositório ele mostra.

`Git init` : usado para iniciar um repositório git .

`Git add` :  usado para adicionar um arquivo a um repositório git.

`Git add*` : usado para adicionar vários arquivos a um repositório git de uma só vez.

`Git commit` : esse comando serve para  apos você fazer um `git add` comentar algo para quando você estiver em uma outra versão e queira voltar para determinada versão você consegue identificar a versão devido ao comentário.

`Git log` : usado para mostrar todas alterações que foi feitas nos arquivos.

`Git checkout` : utilizado para voltar ou retornar para a versão que voçê quer do seu projeto.Digitanto `git log ` vai listar todas suas versões é só copiar a numeração da versão e colar na frente do comando `git checkout` e apertar enter para voltar para aquela versão caso queira retornar para a última versão do seu projeto digite `git checkout master`.

`Git push` : usado para enviar um projeto para um lugar remoto um exemplo seria enviar um projeto para o `github`

`Git pull` : usado quando tem mais de uma pessoa trabalhando em um mesmo projeto onde após  usado para baixar a diferença do seu projeto para o que está em um local remoto para isso usa-se o comando `git pull`pois todos da equipe tem que está atualizado de como esta o projeto para a partir  disso implentar mais coisas










