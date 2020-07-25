---
layout: post-blog
title: Instalação do Raspberry Pi OS
tags: [tutoriais, raspberry]
categories: [ tutoriais ]
author: [ franciscojsc  ]
image: assets/img/blog/logo-instalacao-raspberry-pi-os.png
date: 2020-07-17 02:30:00 -0300
excerpt_separator: <!--more-->
---

Olá pessoal, hoje iremos realizar a instalação do SO (Sistema Operacional) [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) uma distribuição baseada no Debian para plataforma ARM , antes conhecido por **Raspbian** [1][2]. O dispositivo que o SO será instalado é o **Raspberry PI 3 model B**.

Inicialmente acesse o site do [Raspberry](https://www.raspberrypi.org/) e clique em [*Downloads*](https://www.raspberrypi.org/downloads/):

![Site do Raspberry]({{ 'assets/img/blog/raspberry-site.png' | absolute_url }})

Selecione o instalador ***Raspberry Pi Imager*** de acordo com seu sistema operacional, no caso desse tutorial será o instalador para [Ubuntu](https://ubuntu.com/), e  após o _download_ realize a instalação do programa.

![Download Instalador Raspberry Pi Imager]({{ 'assets/img/blog/raspberry-pi-imager-download.png' | absolute_url }})

Inicialize o ***Raspberry Pi Imager***.

![Instalador Raspberry Pi Imager]({{ 'assets/img/blog/raspberry-pi-imager.png' | absolute_url }})

Clique em ***CHOOSE OS*** e selecione **Raspberry Pi OS (32-bits)**.

![Instalador Raspberry Pi Imager selecione SO]({{ 'assets/img/blog/raspberry-pi-imager-select-so.png' | absolute_url }})

Conecte o Cartão SD no computador e Clique em ***CHOOSE SD CARD*** para selecionar o cartão SD que será utilizado na instalação do SO.

![Instalador Raspberry Pi Imager selecione Cartão SD]({{ 'assets/img/blog/raspberry-pi-imager-select-sd-card.png' | absolute_url }})

Clique em ***WRITE*** para iniciar a gravação do SO no cartão SD.

![Instalador Raspberry Pi Imager gravando SO]({{ 'assets/img/blog/raspberry-pi-imager-select-write.png' | absolute_url }})

Após a gravação, clique em ***CONTINUE*** e retire o cartão SD do computador.

![Instalador Raspberry Pi Imager gravação do SO finalizada]({{ 'assets/img/blog/raspberry-pi-imager-finish-write.png' |  absolute_url }})

Adicione o cartão no **Raspberry Pi** e inicialize, após será exibida a tela inicial.

![Tela inicial SO]({{ 'assets/img/blog/raspberry-display-init-after-install.png' | absolute_url }})

## Referências

1. RASPBERRY PI OS. In: **WIKIPÉDIA**, a enciclopédia livre. Flórida: Wikimedia Foundation, 2020. Disponível em: https://pt.wikipedia.org/w/index.php?title=Raspberry_Pi_OS&oldid=58751158. Acesso em: 13 jul. 2020.

2. Download Raspberry Pi OS For Raspberry Pi. **RASPBERRY PI**. Disponível em: https://www.raspberrypi.org/downloads/raspberry-pi-os. Acesso em: 14 jul. 2020.
