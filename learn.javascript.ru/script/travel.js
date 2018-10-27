(function() {

  var elem = document.getElementById('travel-dom-control');
  var iframe = document.getElementById('travel-dom-iframe');
  var iframeDoc;

  var currentElement;

  var nodeTypes = {
    1:  'ELEMENT_NODE',
    3:  'TEXT_NODE',
    7:  'PROCESSING_INSTRUCTION_NODE',
    8:  'COMMENT_NODE',
    9:  'DOCUMENT_NODE',
    10: 'DOCUMENT_TYPE_NODE',
    11: 'DOCUMENT_FRAGMENT_NODE'
  };

  function init() {
    iframeDoc = iframe.contentDocument;
    currentElement = iframeDoc.documentElement;

    elem.onclick = function(e) {
      var dir = e.target.getAttribute('data-travel-dir');
      if (!dir) return;

      if (currentElement && currentElement.style) {
        currentElement.style.border = '';
      }

      currentElement = currentElement[dir];

      updateControls();

      if (currentElement && currentElement.style) {
        currentElement.style.border = '1px green solid';
      }
    };

    updateControls();
  }


  function updateControls() {

    var directions = ['parentNode', 'previousSibling', 'nextSibling', 'firstChild', 'lastChild'];
    directions.forEach(function(dir) {
      // console.log(currentElement, dir, currentElement[dir]);
      elem.querySelector('[data-travel-dir="' + dir + '"]').disabled = !currentElement[dir];
    });

    console.log(currentElement);
    var data = currentElement.data || '';

    if (data.match(/^\s+$/)) {
      data = '&lt;пробельные символы&gt;';
    } else if (data.length > 20) {
      data = data.slice(0,20) + '…';
    }

    elem.querySelector('[data-travel-prop="nodeText"]').innerHTML =
      '[nodeType=' + nodeTypes[currentElement.nodeType] +
      (currentElement.tagName ? (' tagName=' + currentElement.tagName) : '') +
      (data ? (' data=' + data) : '') +
        ']';


    var comment = document.getElementById('travel-dom-comment');
    comment.innerHTML = '';

    if (currentElement === iframeDoc) {
      comment.innerHTML = 'Вы находитесь у выхода. Текущий DOM-элемент - объект window.document';
    }
    if (currentElement.tagName === 'BODY') {
      comment.innerHTML = 'Поздравляем! Вы добрались до элемента <code>BODY</code>, который также известен как document.body.<br/>Заметим, что между <code>HEAD</code> и <code>BODY</code> нет пробелов.<br>Добро пожаловать вниз &mdash; к содержанию документа.';
    }
    if (currentElement.tagName === 'HEAD') {
      comment.innerHTML = 'Элемент <code>HEAD</code> в javascript обычно используют для динамического добавления  новых скриптов или стилей. Идите вправо, чтобы достичь <code>BODY</code>.';
    }
    if (currentElement.nodeValue == 'Осторожно') {
      comment.innerHTML = 'Внимание, это -- span, инлайновый элемент. Он занимает места ровно столько, сколько в нём текста. Вы можете увидеть это по окраске.';
    }
    if (currentElement.nextSibling === iframeDoc.documentElement) {
      comment.innerHTML = 'Текущий элемент - DOCTYPE. Хотя он и находится вне <code>&lt;HTML&gt;</code>, но тоже участвует в DOM.';
    }
    if (currentElement === iframeDoc.documentElement) {
      comment.innerHTML = 'Вы стоите на элементе <code>document.documentElement</code> (тэг <code>&lt;HTML&gt;</code>)';
    }
    if (currentElement.data == ' комментарий ') {
      comment.innerHTML = 'Удача! Вы нашли скрытый элемент!<br/>Это комментарий &mdash; он тоже часть структуры документа.';
    }

  }

  /*
   read:           function(isAttr) {
   var value = this.$('read').value;
   if (!value.length) {
   this.$('read').focus();
   return;
   }
   if (isAttr) {
   if (!this.currentElement.getAttribute) {
   alert("Этот элемент не поддерживает атрибуты");
   return;
   }
   }
   alert(isAttr ? this.currentElement.getAttribute(value) : this.currentElement[value]);
   },*/


  if (iframe.contentDocument.readyState == 'complete') {
    setTimeout(init, 2000);
  } else {
    iframe.contentWindow.onload = function() {
      setTimeout(init, 2000);
    };
  }

})();
