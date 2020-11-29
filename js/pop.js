var showPop= (function () {
    /**
     * 弹出窗口
     * @param {*} id
     */
    function showPop(id) {
      var container =  $("#" + id);
      container.style.display = "";
      if(id === "popVideo"){
        var vid =$("video");
        vid.play();
      } 
    }
  
    // 获取所有的关闭按钮
    var closes = $$(".inner_close");
    for (var i = 0; i < closes.length; i++) {
      closes[i].onclick = function () {
        var container = this.parentElement.parentElement;
        container.style.display = "none";
      };
    }
  
    // 处理一些特殊的东西
    var popWx = $(".inner_wx");
    var popQq = $(".inner_qq");
    popWx.onclick = function () {
      // classList.add 添加类样式
      popWx.classList.add("selected");
      popQq.classList.remove("selected");
    };
  
    popQq.onclick = function () {
      popWx.classList.remove("selected");
      popQq.classList.add("selected");
    };
   //处理关闭视频的按钮
   var btn = $("#popVideo .alert_inner .inner_close");
   btn.addEventListener("click",function(){
     $("#popVideo video").pause();
   })
    return showPop;
  })();
 
  
    
  

  
      
      