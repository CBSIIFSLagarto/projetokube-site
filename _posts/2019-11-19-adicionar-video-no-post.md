---
layout: post-blog
date: 19 November 2019
title: Como adicionar um vídeo num post do blog
tags: [site, tutoriais]
categories: [ tutoriais ]
author: [ reinan, frchico ]
image: assets/img/blog/video.jpg
date:  2019-11-20 00:12:08 -0300
excerpt_separator: <!--more-->
---

É possível incluir mais de um vídeo em um post/página do site. Para tanto, use o código abaixo no local que deseja que o vídeo apareça.


```md
---
layout: post-blog
... restante do texto não mostrado no trecho ...
---
{% raw  %}
{% include widget/youtube.html video_id='ID do vídeo' %}
{% endraw %}
```

O resultado é:

 {% include widget/youtube.html video_id='VQdV_lqzxOI' %}