---
layout: post-blog
title: Instalação do VNC Server no Raspberry PI 3
tags: [raspberry]
categories: [ linux, tutoriais ]
author: [ franciscojsc ]
image: assets/img/blog/install-vnc-raspberry.jpg
date: 2020-01-17 13:44:48 -0300
excerpt_separator: <!--more-->
---

O VNC (Virtual Network Computing), é utilizado para conectar e controlar a interface da área de trabalho de um computador, que tenha o *software* vnc-server executando.

Segundo a *WIKIPÉDIA* (2019):

> **Virtual Network Computing** (ou somente **VNC**) é um sistema de compartilhamento gráfico de desktop que usa o [Remote Frame Buffer protocol(RFB)](https://en.wikipedia.org/wiki/RFB_protocol "en:RFB protocol") para remotamente controlar outro computador. Através deste protocolo um usuário pode conectar-se a um [computador](https://pt.wikipedia.org/wiki/Computador "Computador") remotamente, e utilizar as suas funcionalidades visuais como se estivesse sentado em frente do computador.

Após a inicialização do Sistema Operacional [Raspbian](https://www.raspberrypi.org/downloads/raspbian/), no terminal realize os seguintes passos: 

```bash
sudo raspi-config
```

Selecione **Interfacing Options** > **VNC**  e clique em **yes**.

Outra opção via terminal.

Realize o *download* do **arquivo .deb**.
```bash
curl -o real-vnc-server.deb -LO https://www.realvnc.com/download/file/vnc.files/VNC-Server-6.6.0-Linux-ARM.deb
```

Instale o **pacote .deb**:
```bash
sudo dpkg -i real-vnc-serve.deb
```

Para realizar acesso ao vnc-server, baixe o [VNC Viewer](https://www.realvnc.com/pt/connect/download/viewer) para a plataforma desejada.

## Referências

VNC (Virtual Network Computing). **RASPBERRY PI FOUNDATION**, 2019. Disponível em: [https://www.raspberrypi.org/documentation/remote-access/vnc](https://www.raspberrypi.org/documentation/remote-access/vnc). Acesso em: 15 out. 2019.

VIRTUAL NETWORK COMPUTING. *In*: **WIKIPÉDIA**, a enciclopédia livre. Flórida: Wikimedia Foundation, 2019. Disponível em: [https://pt.wikipedia.org/w/index.php?title=Virtual_Network_Computing&oldid=55516580](https://pt.wikipedia.org/w/index.php?title=Virtual_Network_Computing&oldid=55516580). Acesso em: 18 jun. 2019.

GARBIN, Wolmir Cezer. Instalar arquivo .deb no ubuntu. **RECEITAS DE CÓDIGOS**, 27 jun. 2017. Disponível em: [https://receitasdecodigo.com.br/ubuntu/instalar-arquivo-deb-no-ubuntu](https://receitasdecodigo.com.br/ubuntu/instalar-arquivo-deb-no-ubuntu). Acesso em: 15 out. 2019.