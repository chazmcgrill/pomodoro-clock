function timer(e,t,s){interval=setInterval(function(){if(s%60==0?(console.log("minute"),e--,$(".minutes").text(e),t=60):e||1!==s||(clearInterval(interval),bell.play(),chooser()),!pauseFlag){console.log(s+" second"),t--;var n=display(t);$(".seconds").text(n),s--}},1e3)}function chooser(){"session"===state?stateUpdater("break",minBreak,count,"on break"):stateUpdater("session",minSesh,count,"in session")}function stateUpdater(e,t,s,n){state=e,s=t*seconds,timer(t,seconds,s),$(".message").text(n)}function display(e){return(e<10?"0":"")+e}var bell=new Audio("assets/bell.mp3"),seconds=60,count=0,minBreak=5,minSesh=25,state="start",pauseFlag=!1,interval;$(".btn-start").click(function(){var e=$(this).text();"Pause"===e?(pauseFlag=!0,$(this).text("Back to work")):"Back to work"===e?(pauseFlag=!1,$(this).text("Pause")):(count=minSesh*seconds,$(".btn-elements").prop("disabled",!0),$(this).text("Pause"),chooser())}),$(".session-plus").click(function(){minSesh++,$(".minutes").text(minSesh),$(".session-num").text(minSesh)}),$(".session-minus").click(function(){minSesh>1&&(minSesh--,$(".minutes").text(minSesh),$(".session-num").text(minSesh))}),$(".break-plus").click(function(){minBreak++,$(".break-num").text(minBreak)}),$(".break-minus").click(function(){minBreak>1&&(minBreak--,$(".break-num").text(minBreak))}),$(".reset-btn").click(function(){$(".btn-elements").prop("disabled",!1),pauseFlag=!1,state="start",clearInterval(interval),$(".minutes").text(minSesh),$(".seconds").text("00"),$(".btn-start").text("Start"),$(".message").text("press start to begin")});