---
layout: post-blog
date: 19 November 2019
title: Como adicionar um vídeo num post do blog
tags: [site, tutoriais]
category: [ tutoriais ]
author-id: [ reinan, frchico ]
feature-img: assets/img/blog/video.jpg
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