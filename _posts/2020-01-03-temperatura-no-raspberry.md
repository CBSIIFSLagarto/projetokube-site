---
layout: post-blog
title: Coletando a temperatura no Raspberry PI 3
tags: [raspberry]
category: [ linux, tutoriais ]
author-id: [ franciscojsc ]
feature-img: assets/img/blog/temp-rasp.png
excerpt_separator: <!--more-->
---

Foi utilizado o comando abaixo no terminal do Sistema Operacional [Raspbian](https://www.raspberrypi.org/downloads/raspbian/), para obter os dados da temperatura com a data/hora a cada 5 segundos:

```bash
while true; do if [ -f "./temp.csv" ]; then echo "$(vcgencmd measure_temp), $(date)"  >> temp.csv; echo "OK"; sleep 5; else echo "Temperatura, Data" > temp.csv; fi; done
```

Para encerrar a execução do comando, pressione as teclas `ctrl + c`. No arquivo `temp.csv` estará armazenados os valores das temperaturas.

Outra opção para executar o comando que coleta as temperaturas é criar o arquivo `temperature.sh` e adicionar o código a seguir:

```bash
#!/bin/bash

# Author: Francisco Chaves <https://franciscochaves.com>
# Description: Collects Raspberry PI Temperature Data.

while true; do
  if [ -f "./temp.csv" ];
    then
      echo "$(vcgencmd measure_temp), $(date)"  >> temp.csv; echo "OK";
      sleep 5;
    else
      echo "Temperatura, Data" > temp.csv;
    fi;
done
```

Atribua permissão de execução ao _script_:
```bash
sudo chmod +x temperature.sh
```

Execute o script:
```bash
./temperature.sh
```