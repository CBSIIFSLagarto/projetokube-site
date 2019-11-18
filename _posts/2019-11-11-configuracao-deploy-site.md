---
layout: post-blog
date: 11 November 2019
title: Como implantar o site do Projeto Kube
subtitle: Configurando o Travis CI para criar e implantar o site usando o github
tags: [site, deploy, Travis CI]
author-id: [ reinan ]
feature-img: assets/img/blog/github-projetokube-site.png
excerpt_separator: <!--more-->
---

## Instalação
1. Faça o Fork e clone de [Projetokube-site](https://github.com/CBSIIFSLagarto/projetokube-site):

`git clone https://github.com/{ Seu usuário do GitHub }/projetokube-site.git`

1. É necessário instalar o [Jekyll](https://jekyllrb.com/docs/installation/): `gem install jekyll`, Verifique [#1](https://github.com/Sylhare/Type-on-Strap/issues/1) se você tiver algum um problema. 

1. Também é necessário instalar o Bundle `gem install bundle`

1. Instale as dependências do projeto `bundle install`

1. Personalize o projeto ou ajude a resolver os [problemas](https://github.com/CBSIIFSLagarto/projetokube-site/issues).

1. Execute o servidor Jekyll `jekyll serve`

## Estrutura

Aqui estão os principais arquivos do projeto

```bash
├── _draft # Para armazenar seus rascunhos, eles não serão publicados em seu site
├── _data # Arquivos de configurações que podem ser acessados em qualquer lugar do site
|  ├── authors.yml # Todos os membros da equipe ficam armazenados aqui
├── _includes # Modelos que podem ser incluídos no projeto
├── _layouts # layouts de temas (veja abaixo para detalhes)
├── _portfolio # coleção de artigos a ser preenchida na página do portfólio
├── _posts # Postagens do blog
├── _sass # Sass parciais 
├── assets
|  ├── js # Arquivos javascript, Katex, jquery, bootstrap, jekyll search, 
|  ├── css # Arquivos de estilos como Bootstrap, font-awesome, katex and main css
|  ├── fonts # Font-Awesome, e outras fontes
|  └── img # Imagens usadas para modelos
├── pages
|   ├── 404.md # Página que é exibida quando o URL estiver errada
|   ├── about.md # Sobre a página da equipe
|   ├── gallery.md # Página da galeria para fotos do projeto
|   ├── portfolio.md # Página de portfólio para projetos
|   ├── search.html # Página de pesquisa
|   └── tags.md # A página de tags
├── _config.yml # Configuração do site em geral
└── index.html # amostra da página inicial
```
## Configurações do projeto
Abra o arquivo `_config.yml` em um editor de texto para alterar a maioria das configurações do blog.

### Configuração do site

Configure o Jekyll como seu próprio blog ou com um subcaminho no `_config.yml`:

A *baseurl* significa que o seu projeto está em uma sub pasta, exemplo esse site não está configurado diretamente para ficar hospedado em `CBSIIFSLagarto.github.io`. Então temos que especificar que a *URL* vai ser complementada com `projetokube-site` porque esse é o nome do projeto que está no [Github](https://github.com/CBSIIFSLagarto/projetokube-site). Então o resultado sera `CBSIIFSLagarto.github.io/projetokube-site`

```yml
  baseurl: ""
  url: "https://username.github.io"
```

### Exemplos de website em Jekyll com subpastas

```yml
  baseurl: "projetokube-site"
  url: "https://cbsiifslagarto.github.io/"
```

```yml
  baseurl: "/sub-directory"
  url: "https://username.github.io/"
```

Por favor, configure isso antes de usar o projeto.

### Exemplos de como criar uma publicação no blog

Para gerar uma publicação é necessário criar um arquivo em `_post` com a seguinte formatação de nome `ano-mes-dia-titulo-da-publicacao-sem-acentuacao.md`

veja alguns exemplos

- 2019-11-01-acesso-lab-pesquisa.md 
- 2019-11-11-configuracao-deploy-site.md

Estrutura do arquivo da publicação:

```md
---
layout: post-blog # Existem dois layouts para publicações que você pode utilizar [post-blog e post]
date: '11 November 2019' # Data da publicação
title: 'Como implantar o site do Projeto Kube' # Titulo da publicação
subtitle: 'Configurando o Travis CI para criar e implantar o site usando o github' 
tags: [site, deploy, Travis CI] # Palavras chaves para a publicação
author-id: [ reinan ] # Nomes dos autores que está em _data/authors.yml
feature-img: assets/img/blog/github-projetokube-site.png # Imagem da publicação opcional
category: linux # Se for colocar uma categoria certifique se que ela também foi criada em _category ( A categoria é opcional )
excerpt_separator: <!--more-->
---

algum texto de exemplo
... restante do texto não mostrado no trecho ...
```
### Comentários

Os comentários que usamos nas publicações do blog do site são gerados por uma API [Disqus](http://disqus.com/), ele nada mais é do que uma plataforma que ajuda a aumentar o envolvimento nos seus sites. Ele permite de forma relativamente fácil que pessoas comentem no seu blog.

Além de oferecer um desempenho superior quando comparado ao outros sistemas, o **Disqus** garante outras vantagens para os nossos leitores. Uma delas é a possibilidade de cadastro por meio das redes sociais, como Facebook e Twitter. Porém, aqueles que preferirem também pode se registrar diretamente por meio do site do Disqus.

Para ativar essa funcionalidade crie uma conta e coloque o seu identficador aqui:

```yml 
disqus_shortname: 'projeto-kube'
```

## GitHub

Antes de enviar o site para o Github é sempre bom baixar as atualizações do projeto [original](https://github.com/CBSIIFSLagarto/projetokube-site) para que assim o nosso também sembre fique atualizado.

Caso você tenha dúvidas com comandos em Git [veja essa publicação]({{ '/blog/git/2019/11/08/o-que-e-o-git.html' | absolute_url }})

```sh
git remote add upstream https://github.com/CBSIIFSLagarto/projetokube-site.git
git fetch upstream
git merge upstream/master
```

### Documentação oficial

Consulte a documentação do [Jekyll para escrever posts](https://jekyllrb.com/docs/posts/). Recursos padrão estão documentados abaixo.

### Como adicionar vídeos a uma publicação:

```md
---
layout: post-blog
... restante do texto não mostrado no trecho ...
---
{% raw  %}
{% include widget/youtube.html video_id='htgr3pvBr-I' %}
{% include widget/youtube.html video_id='ID do vídeo' %}
<!-- https://www.youtube.com/watch?v={ID do vídeo} -->
{% endraw %}
```

## Configurando o Travis CI para criar e implantar o site

Devemos criar uma conta no Travis CI para sincronizar nosso repositório GitHub com o Travis, então temos que procurar o repositório no Travis e depois clicar com o botão direito para ativar esse repositório.

![Projeto](https://miro.medium.com/max/1675/1*BwypOVhSR_DcGHRjrZI7BA.png)

Depois disso precisamos adicionar um token do GitHub para o Travis CI para poder publicar o site gerado. Vá para [Github Token](https://github.com/settings/tokens) e crie um token de acesso pessoal.

![Projeto](https://miro.medium.com/max/2815/1*5fOAumDl3XCWD0h-Vhtfcw.png)

Depois de gerar seu token, copie-o imediatamente, pois ele só estará disponível apenas quando é criado. Leve esse token copiado de volta à página Configurações no Travis CI, crie uma variável de ambiente chamada GITHUB_TOKEN, cole o token no campo value, verifique se “Exibir valor no log de criação” não está marcado e clique em Adicionar.

2. Mudando a branch do GithubPage

O travis-ci cria uma branch para a compilação do jekyll chamada de gh-pages, então devemos informar ao Github que essa branch é a nossa página que ficarar no site. Clique em Settings e depois procure por GitHub Pages e mude a branch para gh-pages 

Houve um problema com a **URL** porque na compilação com a opção `relative_url ` ficava sem o domínio do site em todos os links ( **CSS** , **JS** e etc.. com isso as páginas não carregavam ) e com a opção `absolute_url` que pegava a configuração que está em `_config.yml`: 
`url: https://cbsiifslagarto.github.io/projetokube-site`
e substituir quando for compilado pelo travis-ci. 

Isso não é bem um erro mais eu penso que não é a melhor forma. Porém, foi a única maneira que encontrei para corrigir o erro que não estava carregando os **CSS** e **JS**.

## Links e considerações

- [Colocando um site no ar com Jekyll: usando o terminal](https://jtemporal.com/do-tema-ao-ar/)
- [Tecmundo: Explicando um pouco sobre o disqus](https://www.tecmundo.com.br/institucional/104360-novidade-comentarios-tecmundo-testando-o-disqus.htm)