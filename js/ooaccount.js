var OOAccount = {
  owner:"Lars Willihagen",
  cover:"http://www.wall321.com/thumbnails/detail/20121107/android%20google%20android%20jelly%20bean%201920x1080%20wallpaper_www.wall321.com_26.jpg",
  slideshowdata:[
    {
      title:'Werkplek van de toekomst - Introductie',
      sta:1,
      load:'long',
      style:'yacht',
      slides: [
	{
	  type:'title',
	  title:'Werkplek van de toekomst',
	  subtitle:'<span style="font-size:.75em;">door Stef Lamerichs, Rob Schellingerhout,<br>Koen Smeets en Lars Willighagen</span>'
	},
	{
	  title:'Onderzoek',
	  list:{items:[
	    {
	      title:'3 gebieden:',
	      items:['Arbeidsmarkt &#8594; Flexibel, ZZP','Techniek         &#8594; Groeit, maar niet te snel','Kantoor           &#8594; Meer aandacht werknemers']
	    },
	    'Volgende conclusies:'
	  ]}
	},
	{
	  title:'Vervolg',
	  text:[
	    'Express niet gekozen voor heel kantoor',
	    'Technologie kan zo makkelijk veranderd worden'
	  ]
	}
      ]
    },
    {
      title:'Werkplek van de toekomst',
      sta:10,
      style:'dev2',
      load:'puzzle',
      type:'puzzle',
      slides: [
	{
	  kind:'none',
	  type:'none',hide:true,
	  pos:{x:'5.4cm',y:'-1.85cm',z:'-37.3cm',rx:20,ry:-135,sc:.05,}
	},
	{
	  kind:'none',
	  type:'none',
	  pos:{x:'5cm',z:'-35cm',rx:33,ry:-135},
	  comp:function(){
	    var spd = 800;
	    $('.a.e').transition({rotate:180,opacity:0},spd);
	    $('.a.f').transition({rotate:0,opacity:1},spd);
	    $('.b.e').transition({rotate:180,opacity:0},spd);
	    $('.b.f').transition({rotate:0,opacity:1},spd);
	    $('.c.e').transition({rotate:-90,opacity:1},spd);
	    $('.c.f').transition({rotate:90,opacity:1},spd);
	    $('.d.e').transition({rotate:180,opacity:1},spd);
	    $('.d.f').transition({rotate:90,opacity:1},spd);
	  }
	},
	{
	  kind:'none',
	  type:'none',hide:true,
	  pos:{x:'5cm',z:'-35cm',rx:33,ry:-135},
	  comp:function(){
	    var spd = 800;
	    $('.b.e').transition({opacity:1},spd);
	    $('.b.f').transition({rotate:-90},spd);
	    $('.c.f').transition({rotate:0},spd);
	    $('.d.e').transition({rotate:0,opacity:0},spd);
	    $('.d.f').transition({rotate:180,opacity:0},spd);
	    $('.a.f').addClass('door');
	  }
	},
	{
	  type:'content',
	  title:'Muren pt. 1 - Rob',
	  pos:{x:'10cm'},
	  elm:[
	    {h:'100%',c:'r2',type:'video',src:'vid/r2.ogv'}
	  ],
	  comp:function(){
	    $('.r2')[0].currentTime=0;
	    $('.r2').on('ended',function(){
	      this.pause();
	      this.currentTime-=.1;
	    })[0].play();
	  }
	},
	{
	  type:'content',
	  title:'Muren pt. 2 - Rob',
	  pos:{x:'45cm',z:'-17.5cm',ry:45},
	  elm:[
	    {h:'100%',c:'r9',type:'video',src:'vid/r9.ogv'}
	  ],
	  comp:function(){
	    $('.r9')[0].currentTime=0;
	    $('.r9').on('ended',function(){
	      this.pause();
	      this.currentTime-=.1;
	    })[0].play();
	  }
	},
	{
	  type:'content',
	  title:'Muren pt. 3 - Rob',
	  pos:{x:'60cm',z:'-50cm',ry:90},
	  elm:[
	    {h:'100%',c:'r71',type:'video',src:'vid/r7.1.ogv'}
	  ],
	  comp:function(){
	    $('.r71')[0].currentTime=0;
	    $('.r71').data('paused','').bind('timeupdate',function(){
	      if(parseInt(this.currentTime,10)===0&&$(this).data('paused')!='0'){
		$(this).data('paused','0')[0].pause();
	      }
	    }).on('ended',function(){
	      $('.r71').data('paused','');
	      this.pause();
	      this.currentTime-=.1;
	    })[0].play();
	  }
	},
	{
	  type:'content',
	  title:'Muren pt. 4 - Rob',
	  pos:{x:'45cm',z:'-87.5cm',ry:135},
	  elm:[
	    {h:'100%',c:'r10',type:'video',src:'vid/r10.ogv'}
	  ],
	  comp:function(){
	    $('.r10')[0].currentTime=0;
	    $('.r10').data('paused','').on('ended',function(){
	      $('.r10').data('paused','');
	      this.pause();
	      this.currentTime-=.001;
	    })[0].play();
	  }
	},
	{
	  type:'content',
	  title:'Kleur pt. 1 - Stef',
	  pos:{x:'10cm',z:'-100cm',ry:180},
	  elm:[
	    {h:'100%',c:'r11',type:'video',src:'vid/r11.ogv'}
	  ],
	  comp:function(){
	    $('.r11')[0].currentTime=0;
	    $('.r11').data('paused','').on('ended',function(){
	      $('.r11').data('paused','');
	      this.pause();
	      this.currentTime=0;
	      this.play();
	    })[0].play();
	  }
	},
	{
	  type:'content',
	  title:'Raam pt. 1 - Koen',
	  pos:{x:'-22.5cm',z:'-87.5cm',ry:225},
	  elm:[
	    {h:'100%',c:'r12',type:'video',src:'vid/r12.ogv'}
	  ],
	  comp:function(){
	    $('.r12')[0].currentTime=0;
	    $('.r12').data('paused','').bind('timeupdate',function(){
	      if(parseInt(this.currentTime,10)===2&&$(this).data('paused')!='2'){
		$(this).data('paused','2')[0].pause();
	      }
	    }).on('ended',function(){
	      $('.r12').data('paused','');
	      this.pause();
	      //this.currentTime-=.1;
	    })[0].play();
	  }
	},
	{
	  kind:'none',
	  type:'none',
	  pos:{x:'12.5cm',z:'-50cm',sc:7,rx:90}
	},
	{
	  kind:'html',
	  type:'html',hide:true,
	  title:'Office',
	  pos:{x:'20cm',y:'253px',z:'-30cm',ry:270},
	  contenturl:'3d/Heijmans-02.html'
	}/*,
	{
	  kind:'html',
	  type:'html',hide:true,
	  title:'Office',
	  pos:{x:'-27.5cm',y:'506px',z:'-100cm',rx:90},
	  content:'<div style="background:#333;width:100cm;height:100cm;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;"></div>'
	}*/
      ]
      
    }
  ]
}