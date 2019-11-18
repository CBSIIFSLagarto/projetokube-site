---
layout: page
title: Angry Pirds
subtitle: Um mini rack... Um mini cluster de Raspberry PI 
img: "assets/img/projetos/AngryPirds/1.jpg"
date: November 2019
tags: [cluster, raspberry, k8s, k3s, AngryPirds]
image_sliders:
  - AngryPirdsDesenho
---

{% include slider.html selector="AngryPirdsDesenho" %}

O projeto {{page.title}} tem como objetivo simular uma infraestrutura completa para a execução de tarefas de DevOps em um cluster. Além disso, pode ser utilizado em aulas práticas e feiras (exposição), por ser portátil e tudo em um, necessitando apenas conectá-lo na rede elétrica.

# Objetivos

## Primário

- Oferecer um ambiente completo para a execução e/ou estudos de tarefas DevOps.

## Secundários

- Proporcionar um ambiente de estudo para computação em nuvem para os alunos da CBSI;
- Possuir um ambiente para demonstração de tarefas realizadas que envolvem a cultura DevOps;
- Estimular a pesquisa em virtualização baseada em contêineres e orquestração de serviços;
- Permitir troca rápida de ambiente alterando o sistema de armazenamento (cartões de memória).

# Características

O projeto deverá atender as seguintes características:

- Suportar pelo menos três [Raspberry PI 3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) ou superior;
- Possuir uma única fonte de alimentação;
- Ser leve;
- Poder ser transportado facilmente;
- Rápida instalação e configuração;
- Possuir um *switch*/roteador para conexão dos nós;
- Possuir um dispositivo de saída;
- Suportar um teclado;
- Permitir a conexão de outras máquinas;
- Permitir acessar a internet, quando disponível.

# Sistemas disponíveis

O sistema operacional base escolhido para ser utilizado no Raspberry é o [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) instalado com a ferramenta [PINN](https://github.com/procount/pinn) e habilitado com:

- Docker: para a execução de contêineres;
- Compose: Para a instanciação de mais de um conjunto de contêineres;
- Swarm: Orquestrador alternativo para, utilizado em tarefas mais básicas como demonstração e testes de aplicativos de alunos;
- K3S: Orquestrador leve e principal;
- K8S: Orquestrador alternativo para a simulação de cluster com alta disponibilidade.