---
layout: post-blog
date: 11 November 2019
#date: 2019-11-11T10:20:00Z
title: Como implantar o site do Projeto Kube
subtitle: Configurando o Travis CI para criar e implantar o site usando o github
tags: [site, deploy, Travis CI, tutoriais]
category: [ tutoriais ]
author-id: [ reinan, frchico ]
feature-img: assets/img/blog/github-projetokube-site.jpg
excerpt_separator: <!--more-->

show_social: false 
---

O site do {{ site.title }} foi desenvolvido com o [Jekyll] e está hospedado no [Github]. Entretanto, como utilizamos *plugins* que não são confiáveis para o [Github], é necessário fazer uso do [Travis] para realizar a compilação e instalação do site.

<!--more-->

Neste post iremos abordar os seguintes tópicos:
* list
{:toc}

---

# Instalação


1. Instale o [Jekyll](https://jekyllrb.com/docs/installation/): `gem install jekyll`;

2. Instale o bundle: `gem install bundle`

3. Faça o fork e clone de [Projetokube-site](https://github.com/CBSIIFSLagarto/projetokube-site)

	```
	git clone https://github.com/{ Seu usuário do GitHub }/projetokube-site.git
	```
4. Instale as dependências do projeto: `bundle install`

1. Modifique o `_config.yml` para seu fork

   - *baseurl* significa que o seu site está em uma subpasta. Como ele é executado como um projeto para o [Github], é necessário que este parâmetro seja alterado.

	```yml
	baseurl: "/projetokube-site"
	url: #
	```

6. Execute o servidor Jekyll `jekyll serve`
   
7. Personalize o seu projeto ou ajude a resolver alguns de [nossos problemas](https://github.com/CBSIIFSLagarto/projetokube-site/issues).


# Arquivos do projeto

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
└── .travis # Arquivo de configuração do Travis
```

# Configurações do projeto

As configurações do site estão no arquivo `_config.yml`. Utilize um editor de texto para alterar a maioria das configurações.

## Como criar uma publicação no blog?

[Veja o que publicamos sobre isso ;)]({% post_url 2019-11-19-como-criar-uma-publicacao-no-blog %})

## Como adicionar vídeos a uma publicação?

[Veja o que publicamos sobre isso ;)]({% post_url 2019-11-19-adicionar-video-no-post %})


## Comentários

Os comentários que usamos nas publicações do blog do site são gerenciados pelo [Disqus], que é uma plataforma para a aumentar o envolvimento nos seus sites e permite que as pessoas comentem no seu blog.

Além de oferecer um desempenho superior quando comparado ao outros sistemas, o [Disqus] garante outras vantagens para os nossos leitores. Uma delas é a possibilidade de cadastro por meio das redes sociais, como Facebook e Twitter. Porém, aqueles que preferirem também pode se registrar diretamente por meio do site do [Disqus].

Para ativar essa funcionalidade crie uma conta e coloque o seu identificador aqui:

```yml 
disqus_shortname: 'projeto-kube'
```

> Antes de enviar o site para o [Github] é sempre bom baixar as atualizações do projeto [original](https://github.com/CBSIIFSLagarto/projetokube-site) para que assim o nosso também sempre fique atualizado. Já pensou em fazer um *pull request?*
>
> Caso você tenha dúvidas com comandos em Git [veja essa publicação]({% post_url 2019-11-08-o-que-e-o-git %})

```sh
git remote add upstream https://github.com/CBSIIFSLagarto/projetokube-site.git
git fetch upstream
git merge upstream/master
```


## Configurando o Travis CI para criar e implantar o site

Devemos criar uma conta no [Travis] CI para sincronizar nosso repositório [GitHub] com o [Travis], então temos que procurar o repositório no [Travis] e depois clicar com o botão direito para ativar esse repositório.

![Projeto](https://miro.medium.com/max/1675/1*BwypOVhSR_DcGHRjrZI7BA.png)

Depois disso precisamos adicionar um *token* do GitHub para o Travis CI para poder publicar o site gerado. Vá para [Github Token](https://github.com/settings/tokens) e crie um *token* de acesso pessoal.

![Projeto](https://miro.medium.com/max/2815/1*5fOAumDl3XCWD0h-Vhtfcw.png)

Depois de gerar seu *token*, copie-o imediatamente, pois ele só estará disponível apenas quando é criado. Leve esse *token* copiado de volta à página de configurações no Travis CI, crie uma variável de ambiente chamada `GITHUB_TOKEN`, cole o *token* no campo value, verifique se “Exibir valor no log de criação” não está marcado e clique em Adicionar.

O nosso arquivo do [Travis] irá realizar a implantação do site no [Github] quando um commit for realizado nos branches master e desenv. Entretanto, para que tudo isso ocorra, precisamos adicionar as seguintes variáveis de ambiente no [Travis]:

 * `repo_deploy`: Deverá ter como valor o repositório que irá hospedar o site em produção. Caso seja o mesmo repositório, informe usando o formato user/repositório. 
   * No nosso caso o valor informado é o `projetokube/projetokube.github.io`.
 * repo_deploy_target: repositório que irá receber os arquivos compilados do site. Como estamos hospedando o site de uma organização, o valor padrão é o `master`. Caso esteja utilizando um site pessoal, configure para `gh-pages`.
 * repo_deploy_branch: o repositório que irá disparar a implantação. No nosso caso é o `master`.

> Caso tenha problema com a **URL** porque na compilação com a opção `relative_url ` ficava sem o domínio do site em todos os links ( **CSS** , **JS** e etc.. com isso as páginas não carregavam ) e com a opção `absolute_url` que pegava a configuração que está em `_config.yml`: 
`url: https://cbsiifslagarto.github.io/projetokube-site`
e substituir quando for compilado pelo travis-ci.
> Isso não é bem um erro mais eu penso que não é a melhor forma. Porém, foi a única maneira que encontrei para corrigir o erro que não estava carregando os **CSS** e **JS**.


## Links e considerações

- [Colocando um site no ar com Jekyll: usando o terminal](https://jtemporal.com/do-tema-ao-ar/)
- [Tecmundo: Explicando um pouco sobre o disqus](https://www.tecmundo.com.br/institucional/104360-novidade-comentarios-tecmundo-testando-o-disqus.htm)
- [Github]
- [Jekyll]
- [Travis]
- [Disqus]


[Github]: https://pages.github.com/
[Jekyll]: https://jekyllrb.com/
[Travis]: https://travis-ci.com/
[Disqus]: http://disqus.com/