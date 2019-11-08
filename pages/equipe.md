---
layout: page
date: November 2019
title: Quem Somos
permalink: /equipe/
tags: [equipe, professor, aluno, pesquisador, como participar]
grupoProfessor:
  - Professor
  - Coordenador
grupoAluno:
  - Estudante
  - Estudante - Bolsista

---
 
A equipe do **{{site.title}}** é multidisciplinar e composta por alunos e professores do curso de bacharelado em sistemas de informação e de técnico (modalidade integrado) de redes de computadores do [IFS - Campus Lagarto](https://www.ifs.edu.br/").

### Como participar

Estamos abertos para qualquer um que esteja disposto a aprender e/ou colaborar com o projeto. 

Se você se identifica com as nossas linhas de pesquisa/trabalho ou só quer conhecer como trabalhamos, não perca tempo! Fale conosco.
 
# Membros

{% assign dados = site.data.authors | where_exp:"user",  "page.grupoProfessor contains user.type"  | sort: "name"  %}
{% include linha_user_cards.html  titulo="Professores" %}


{% assign dados = site.data.authors | where_exp:"user",  "page.grupoAluno contains user.type"  | sort: "name"  %}
{% include linha_user_cards.html dados2=dados titulo="Alunos" %}