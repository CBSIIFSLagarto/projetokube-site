---
layout: default
title: Projeto Kube
date: November 2019  
image: "assets/img/logoprojeto-FundoBranco.png" 
permalink: /index.html               # Set a permalink your your page
hide: true                           # Prevent the page title to appear in the navbar
tags: [index, sobre, kube]
---

{% capture description %}
O **{{site.title}}**  nasceu em meados de 2015 enquanto @frchico realizava estudos sobre como o *Docker* poderia ser aplicado nos cursos de computação do [IFS](http://www.ifs.edu.br), Campus Lagarto.

Hoje tem seu foco expandido e busca atacar as temáticas de computação em nuvem e *Devops* associadas com o ensino de computação.

{% endcapture %}
{% assign descrit = description | markdownify %}
{% assign img = "assets/img/logoprojeto-FundoBranco.png?style=centerme" | absolute_url %}

{% include home/home_banner.html 
  title="Bem-vindo ao site do<br>ProjetoKube" 
  description=descrit 
  image=img 
%}

{% include home/info_card.html 
  title="O que o Projeto Kube proporciona aos seus envolvidos?"
  subTitle="Veja abaixo os principais benefícios que você terá ao participar do projeto:" 
  
  itemTitle="Novas experiências"
  itemDescription="Contato com ambientes que fogem do tradicional ofertado no curso de Sistemas de Informação."

  itemTitle2="Pesquisas científicas"
  itemDescription2="Execução de projetos de trabalho de conclusão de cursos e de iniciação científica aproximando problemas reais da academia."

  itemTitle3="Mercado de trabalho"
  itemDescription3="Contato com tecnologias que estão sendo utilizadas por grandes empresas e que são exigidas no mercado de trabalho."

  itemTitle4="Constante atualização de conteúdos"
  itemDescription4="Seja por meio de pesquisa científica ou seja através da realização de minicursos."
%}

{% capture description %}
O projeto é aberto e está disponível para todos que desejam conhecer e entrar na área, independente do nível de conhecimento, basta ter disposição.
Caso tenha interesse em participar do projeto das atividades, procure um membro da equipe.
{% endcapture %}
{% assign descrit = description | markdownify %}

{% include home/info_area.html 
  title="Faça parte do time"
  description=descrit
  btnTitle="Encontrar membros"
  href="equipe"
%}