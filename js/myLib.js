;(function() {
    window.myLib = {};
  
    window.myLib.body = document.querySelector('body');//проверка элемента на наличие  необходимого атрибута
  
    window.myLib.closestAttr = function(item, attr) { 
      var node = item;
  
      while(node) {
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
          return attrValue;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.closestItemByClass = function(item, className) {
      var node = item;
  
      while(node) {
        if (node.classList.contains(className)) {
          return node;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.toggleScroll = function() {
      myLib.body.classList.toggle('no-scroll');
    };
  })();