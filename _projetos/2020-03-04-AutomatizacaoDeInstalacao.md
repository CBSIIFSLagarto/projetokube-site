---
layout: page
title: "Genesis"
subtitle: "Construção de um ambiente automatizado de instalação e configuração para uso em laboratório de pesquisa"
img: "assets/img/projetos/genesis/capa.jpg"
date: March 2020
tags: [cluster, Linux, Geneses]


feature-img: "assets/img/projetos/genesis/capa.jpg"
feature-img-credits: 'Photo by Markus Spiske on Unsplash'


orientadores:
  - frchico
  - alfredo
---


O projeto {{page.title}} tem como objetivo elaborar um processo de instalação e configuração dos computadores do laboratório de pesquisa do curso de Sistemas de Informação do Campus Lagarto de maneira que este seja automatizado e com baixa intervenção manual.

A ideia nasceu quando a demanda do gerenciamento da rede e dos computadores existentes no lab. de pesquisa, que era do CTI do Campus, foi atribuída aos professores/pesquisadores do laboratório.


# Objetivos

## Primário

- Elaborar um processo de instalação e configuração de computadores que seja automatizado e com baixa intervenção manual.

## Secundários

- Mapear requisitos das máquinas existentes no laboratório de pesquisa do sistemas de informação do Campus Lagarto;
- Mapear ambientes/ferramentas que proporcionam a execução e configuração de computadores de forma automatizada;
- Mapear ambientes/ferramentas que proporcionam a documentação de processos e serviços de forma colaborativa e 
- Elaborar um ambiente de instalação e configuração de máquinas automatizado,isto é com baixa intervenção manual

# Características

O projeto deverá atender as seguintes características:

- Rápida instalação e configuração;
- Atender as políticas de acesso e de instalação do IFS;
- Possuir documentação do processo.


# Como participar

- O projeto está com chamada para alunos voluntários. Caso queira participar, veja as sugestões de plano de trabalho, construa o seu e nos envie. Se tudo der certo você poderá compor a equipe.


{% assign dados = site.data.authors | where_exp:"user",  "page.orientadores contains user.id" %}
{% include linha_orientador.html  titulo="Orientadores" compact='1' %}

# Documentos/Download

- [Projeto submetido](https://drive.google.com/open?id=13am8owPqKMm66FXB6gxkiNFUj6FihZVF);
- Propostas de [plano de trabalho](https://drive.google.com/open?id=1ov76KPVl-rxU-OzCLRTnrMjJgr1ZfYD7).