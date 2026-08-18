/* Editorial Slate interactions: masthead, index rail scrollspy,
   reading progress, photography light table, lens tabs. */
(function(){
  var $=function(s,c){return (c||document).querySelector(s)};
  var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  /* dateline */
  var dl=$("#dateline");
  if(dl){ dl.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}); }

  /* masthead compress + reading progress */
  var mh=$(".masthead"), pr=$("#progress");
  function onScroll(){
    if(mh) mh.classList.toggle("scrolled", window.scrollY>40);
    if(pr){ var h=document.documentElement; var max=h.scrollHeight-h.clientHeight; pr.style.width=(max>0?(window.scrollY/max*100):0)+"%"; }
    spy();
  }
  /* scrollspy: masthead links + toc rail */
  var ids=["work","photography","music","government","theopoetecology","news","team","contact"];
  var links=$$(".mh-nav a, .toc-rail a");
  function spy(){
    var y=window.scrollY + window.innerHeight*0.34, cur="";
    ids.forEach(function(id){ var el=document.getElementById(id); if(el && el.offsetTop<=y) cur=id; });
    links.forEach(function(a){ a.classList.toggle("on", a.getAttribute("href")==="#"+cur); });
  }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  /* mobile menu (ids shared with legacy JS; own binding as backup) */
  var mb=$("#menuBtn"), mm=$("#mobileMenu");
  if(mb&&mm){ mb.addEventListener("click",function(){ mm.classList.toggle("open"); }); $$("#mobileMenu a").forEach(function(a){ a.addEventListener("click",function(){ mm.classList.remove("open"); }); }); }

  /* ---------- photography light table ---------- */
  var strip=$("#ltStrip");
  if(strip){
    var A=window.SITE_ASSETS||{}; var photos=(A.photos||[]).filter(function(p){return p&&p.url});
    var chipsEl=$("#ltChips"), count=$("#ltCount");
    var cats=[["all","All"],["wedding","Wedding"],["family","Family"],["matern","Maternity"],["senior","Senior"],["couple","Couples"],["event","Events"]];
    var active="all";
    function match(p){ if(active==="all") return true; var c=(p.caption||"").toLowerCase(); if(active==="couple") return c.indexOf("couple")>-1||c.indexOf("engage")>-1; if(active==="event") return c.indexOf("event")>-1||c.indexOf("ceremon")>-1; return c.indexOf(active)>-1; }
    function render(){
      var list=photos.filter(match);
      strip.innerHTML="";
      list.forEach(function(p,i){
        var fig=document.createElement("figure"); fig.className="lt-item";
        var img=document.createElement("img"); img.loading="lazy"; img.src=p.url; img.alt=p.caption||"Dot One Photography";
        var cap=document.createElement("figcaption");
        cap.innerHTML="<span>"+(p.caption||"Alaska")+"</span><span>"+String(i+1).padStart(2,"0")+" / "+String(list.length).padStart(2,"0")+"</span>";
        fig.appendChild(img); fig.appendChild(cap); strip.appendChild(fig);
      });
      if(!list.length){ strip.innerHTML='<div class="lt-empty">No sessions in this category yet. Choose another.</div>'; }
      if(count) count.textContent="01 / "+String(Math.max(list.length,1)).padStart(2,"0");
      strip.scrollTo({left:0});
    }
    if(chipsEl){
      cats.forEach(function(c,i){
        var b=document.createElement("button"); b.className="lt-chip"+(i===0?" on":""); b.type="button"; b.textContent=c[1];
        b.addEventListener("click",function(){ active=c[0]; $$(".lt-chip",chipsEl).forEach(function(x){x.classList.remove("on")}); b.classList.add("on"); render(); });
        chipsEl.appendChild(b);
      });
    }
    function step(dir){ var w=strip.querySelector(".lt-item"); var dx=(w? w.getBoundingClientRect().width+26 : 340)*dir; strip.scrollBy({left:dx,behavior:"smooth"}); }
    var pv=$("#ltPrev"), nx=$("#ltNext");
    if(pv) pv.addEventListener("click",function(){step(-1)});
    if(nx) nx.addEventListener("click",function(){step(1)});
    strip.addEventListener("scroll",function(){
      if(!count) return; var items=$$(".lt-item",strip); if(!items.length) return;
      var mid=strip.scrollLeft+strip.clientWidth/2, idx=0;
      items.forEach(function(el,i){ if(el.offsetLeft<=mid) idx=i; });
      count.textContent=String(idx+1).padStart(2,"0")+" / "+String(items.length).padStart(2,"0");
    },{passive:true});
    render();
  }

  /* ---------- lens tabs ---------- */
  var tabs=$$(".lt-tab"), panels=$$(".lens-panel");
  function activate(i){
    tabs.forEach(function(t,j){ t.classList.toggle("on",i===j); t.setAttribute("aria-selected", i===j?"true":"false"); });
    panels.forEach(function(p,j){ p.classList.toggle("on",i===j); });
  }
  tabs.forEach(function(t,i){
    t.addEventListener("click",function(){activate(i)});
    t.addEventListener("keydown",function(e){
      if(e.key==="ArrowRight"){activate((i+1)%tabs.length);tabs[(i+1)%tabs.length].focus();}
      if(e.key==="ArrowLeft"){activate((i-1+tabs.length)%tabs.length);tabs[(i-1+tabs.length)%tabs.length].focus();}
    });
  });
})();
