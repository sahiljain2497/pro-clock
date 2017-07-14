$(document).ready(function(){
var stime=document.getElementById('stimer').innerHTML;
    stime=parseInt(stime);
var btime=document.getElementById('btimer').innerHTML;
    btime=parseInt(btime);
    
    $(".minus").click(function(){
       stime-=1;
        if(stime==-1){
            stime=60;
        }
        $('#stimer').html(stime);
    });
    
    $(".plus").click(function(){
       stime+=1;
        stime=stime%60;
        $('#stimer').html(stime);
    });
    
    $(".p5").click(function(){
       stime+=5;
            stime=stime%60;
        $('#stimer').html(stime);
    });
    
    $(".p10").click(function(){
       stime+=10;
        stime=stime%60;
        $('#stimer').html(stime);
    });
    
    $(".p30").click(function(){
       stime+=30;
        stime=stime%60;
        $('#stimer').html(stime);
    });
    
    $(".minus1").click(function(){
       btime-=1;
        if(btime==-1){
            btime=60;
        }
        $('#btimer').html(btime);
    });
    
    $(".plus1").click(function(){
       btime+=1;
        btime=btime%60;
        $('#btimer').html(btime);
    });
    
    $(".p51").click(function(){
       btime+=5;
        btime=btime%60;
        $('#btimer').html(btime);
    });
    
    $(".p101").click(function(){
       btime+=10;
        btime=btime%60;
        $('#btimer').html(btime);
    });
    
    $(".p301").click(function(){
       btime+=30;
        btime=btime%60;
        $('#btimer').html(btime);
    });
    
    var timerstart=false;
    $('.start').click(function(){
    if(timerstart==false){
    timerstart=true;
    var m = stime;    
    var s=0;    
    var x = setInterval(function() {
    if(s==0){
        s=60;
        m=m-1;
    }
    if(s<10)
    document.getElementById("clk").innerHTML = m +":0" + s;
    else
    document.getElementById("clk").innerHTML = m +":" + s;
    s=s-1;    
    
    if (m < 0) {
    document.getElementById("clk").innerHTML = "0:00";
    clearInterval(x);
    timerstart=fasle;    
    alert("Break Time! : "+btime+"mins");
  }     
}, 1000);    
    }        
    $('.stop').click(function(){
        timerstart=false;
        clearInterval(x);
        $('.clk').html(" ");                
    });
    
    });
    
        
});