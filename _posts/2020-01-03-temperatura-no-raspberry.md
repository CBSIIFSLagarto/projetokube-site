---
layout: post-blog
title: Coletando a temperatura no Raspberry PI 3 B Plus
tags: [raspberry]
categories: [ linux, tutoriais ]
author: [ franciscojsc ]
image: assets/img/blog/temp-rasp.jpg
date: 2020-01-19 10:19:57 -0300
excerpt_separator: <!--more-->
---

Neste _post_ iremos realizar a coleta da temperatura do Raspberry PI 3 B Plus. O sistema operacional utilizado foi o [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) e a coleta será realizada a cada 5 segundos.
<!--more--> 

O primeiro passo é executar o comando abaixo no terminal. Ele irá gravar os dados em um arquivo que poderá ser importado para qualquer planilha eletrônica.

```bash
while true; do 
  if [ -f "./temp.csv" ]; then 
    echo "$(vcgencmd measure_temp), $(date)"  >> temp.csv; 
    echo "OK"; 
    sleep 5; 
  else 
     echo "Temperatura, Data" > temp.csv; 
  fi; 
done
```

Para encerrar a execução do comando, pressione as teclas `ctrl + c`. Observe que no arquivo `temp.csv` estarão armazenados os valores das temperaturas coletadas.

Outra opção para executar o comando que coleta as temperaturas é criar um arquivo de _script_ e executá-lo sempre que for necessário. No nosso sistema criamos o arquivo chamado `temperature.sh` e foi adicionado o código abaixo.

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

Agora é necessário atribuir a permissão de execução ao _script_ criado através do comando `sudo chmod +x temperature.sh`.
Para a execução basta chamar o _script_ utilizando o comando `./temperature.sh`.
