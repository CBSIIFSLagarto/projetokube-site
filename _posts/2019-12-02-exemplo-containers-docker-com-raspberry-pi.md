---
layout: post-blog
title: Execução de containers Docker com Raspberry Pi
tags: [raspberry, docker]
category: [ linux ]
author-id: [ franciscojsc ]
feature-img: assets/img/blog/raspberry.jpg
excerpt_separator: <!--more-->
---

# Docker em plataformas ARM

Com a parceria estratégica entre a Docker e Arm, para levar a tecnologia de contêineres para dispositivos de IoT, a Docker realizou a simplificação na forma de publicação de aplicativo em plataformas com arquiteturas [ARM](https://canaltech.com.br/hardware/O-que-e-um-processador-ARM/), aumentando a portabilidade e a implantação de *softwares* embarcados [1].<!--more--> Para criar uma *image* para plataforma ARM é necessário esta em um sistema com essa arquitetura, impossibilitado a criação de uma imagem a partir de um Sistema Operacional diferente, entretanto a partir da versão 19.03 pode-se utilizar a ferramenta **buildx** para criação de várias imagens com arquiteturas diferentes.

Em um ambiente Linux, realize a instalação do buildx, o [repositório](https://github.com/docker/buildx/releases)  da ferramenta está disponível na plataforma de versionamento distribuído GitHub, pode-se baixar  a ferramenta de acordo com a versão do Sistema Operacional.

Após o *download*, utilizando o terminal, crie o diretório `cli-plugins` e copie o binário:
```bash
mkdir ~/.docker/cli-plugins/ &&
chmod +x buildx-v0.3.1.linux-amd64 &&
cp buildx-v0.3.1.linux-amd64 ~/.docker/cli-plugins/docker-buildx
```

Visualize se a instalação foi realizada com sucesso:
```bash
docker buildx --help
```

Instale o pacote  `qemu-user-static` que  é um emulador de processador muito eficiente, que  suporta  vários tipos de processadores.
```bash
sudo apt-get install qemu-user-static
```

Crie uma instância de construção de arquitetura múltipla:
```bash
docker buildx create --name mybuilder &&
docker buildx use mybuilder &&
docker buildx inspect --bootstrap
```

Utilize os arquivos `Dockerfile`  e `index.html` para gera as imagens:
```docker
FROM nginx:alpine

LABEL "author"="Francisco Chaves"

COPY ./index.html  /usr/share/nginx/html/index.html
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My site</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .container {
            background-color: rgb(101, 47, 252);
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .item {
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;
        }

        .animation-target {
            animation: animation 1000ms linear infinite both;
        }

        /* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bl%3A1%2Cs%3A%5B%7BT%3A%22c%22%2Ce%3A%22s%22%2Cd%3A1000%2CD%3A0%2Cf%3A%7Bx%3A1%2Cy%3A1%7D%2Ct%3A%7Bx%3A3%2Cy%3A3%7D%2Cs%3A3%2Cb%3A4%7D%5D%7D */

        @keyframes animation {
            0% {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            3.2% {
                transform: matrix3d(1.53, 0, 0, 0, 0, 1.53, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            6.41% {
                transform: matrix3d(1.661, 0, 0, 0, 0, 1.661, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            12.71% {
                transform: matrix3d(1.425, 0, 0, 0, 0, 1.425, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            18.92% {
                transform: matrix3d(1.138, 0, 0, 0, 0, 1.138, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            25.23% {
                transform: matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            31.43% {
                transform: matrix3d(0.969, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            56.46% {
                transform: matrix3d(1.001, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            81.48% {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }

            100% {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item">
            <h1 class="animation-target">Version 1</h1>
        </div>
    </div>
</body>

</html>
```
Construa as imagens e envie para o Docker Hub (necessário *login*):
```bash
docker buildx build --platform linux/arm,linux/arm64,linux/amd64 -t franciscojsc/my-hello . --push
```

## Referências

1 TSAI, Tim. Getting started with Docker for Arm on Linux. **DOCKER INC**. 7 jun. 2019. Disponível em: [https://engineering.docker.com/2019/06/getting-started-with-docker-for-arm-on-linux/](https://engineering.docker.com/2019/06/getting-started-with-docker-for-arm-on-linux/). Acesso em: 27 nov. 2019.  

Pacote: qemu-user-static (1: 4.1-2 e outros). **DEBIAN**. Disponível em:  [https://packages.debian.org/pt-br/sid/qemu-user-static](https://packages.debian.org/pt-br/sid/qemu-user-static). Acesso em: 28 nov. 2019.  
