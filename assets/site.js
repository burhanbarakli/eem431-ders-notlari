// Tema düğmesi ve içindekiler vurgusu
(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem('tema'); if(t) root.setAttribute('data-theme',t);}catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.querySelector('.theme-btn');
    if(b) b.addEventListener('click',function(){
      var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
      var n=dark?'light':'dark'; root.setAttribute('data-theme',n);
      try{localStorage.setItem('tema',n);}catch(e){}
    });
    if(window.hljs) hljs.highlightAll();
    // <img class="fig" src="x.svg"> → satır içi SVG (koyu temada renkler değişsin diye)
    [].forEach.call(document.querySelectorAll('img.fig[src$=".svg"]'),function(img){
      fetch(img.getAttribute('src')).then(function(r){return r.ok?r.text():Promise.reject();}).then(function(txt){
        var w=document.createElement('div'); w.innerHTML=txt; var svg=w.querySelector('svg'); if(!svg) return;
        svg.setAttribute('role','img');
        if(img.alt){ svg.removeAttribute('aria-labelledby'); svg.setAttribute('aria-label',img.alt); }
        img.replaceWith(svg);
      }).catch(function(){});
    });
    var links=[].slice.call(document.querySelectorAll('.toc a[href^="#"]'));
    if(!links.length||!('IntersectionObserver' in window)) return;
    var map={}; links.forEach(function(a){map[decodeURIComponent(a.getAttribute('href').slice(1))]=a;});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&map[e.target.id]){links.forEach(function(l){l.classList.remove('active')});map[e.target.id].classList.add('active');}
    });},{rootMargin:'-80px 0px -70% 0px'});
    Object.keys(map).forEach(function(id){var el=document.getElementById(id); if(el) io.observe(el);});
  });
})();
