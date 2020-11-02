const copyToClipboard = (function () {
  const alert = $("#symbol-copy-alert");
  let input;
  function copyToClipboard(el, s, goalTarget) {
      var clipboard;
      if (typeof Clipboard === "undefined") {
          return;
      }
      if (!input) {
          input = document.createElement("input");
          input.type = "text";
          input.style.display = "none";
          input.style.width = "1px";
          document.body.append(input);
      }
      clipboard = new Clipboard(el, {
          target: function (trigger) {
              input.value = s;
              input.style.display = "inline";
              setTimeout(function () {
                  input.style.display = "none";
              }, 200);
              return input;
          }
      });
      clipboard.on("success", function () {
          if (goalTarget) {
              goal(goalTarget);
          }
          input.style.display = "none";
          alert.fadeIn("fast", function () {
              setTimeout(function () {
                  alert.fadeOut("slow");
              }, 2000);
          });
      });
  }
  return copyToClipboard;
})();

/*$(".symbol-copy").each(function f(i, el) {
  if (el.hasAttribute("data-copy")) {
      copyToClipboard(el, el.getAttribute("data-copy"), el.getAttribute("data-goal"));
  }
});*/

// Р¤РёРєСЃР°С†РёСЏ РїСЂР°РІРѕРіРѕ СЂРµРєР»Р°РјРЅРѕРіРѕ Р±Р»РѕРєР° РїСЂРё СЃРєСЂРѕР»Р»Рµ
$(".fixable").each((i, el) => {
  let stopPoint, startPoint;
  el = $(el);
  startPoint = el.offset().top - 50;
  function check() {
      stopPoint = window.pageYOffset + 100 + el.height();
      if (window.pageYOffset >= startPoint && stopPoint < $('footer').offset().top) {
          el.addClass("fixed");
          el.removeClass("fixed--bottom");
      } else if (stopPoint >= $('footer').offset().top) {
          el.addClass("fixed--bottom");
          el.removeClass("fixed");
      } else {
          el.removeClass("fixed");
          el.removeClass("fixed--bottom");
      }
  }
  window.addEventListener("scroll", check);
});

// Р¤РёРєСЃР°С†РёСЏ СЃР°Р№РґР±Р°СЂР° РїСЂРё СЃРєСЂРѕР»Р»Рµ
$(".block-sidebar--fixable").each((i, el) => {
  let stopPoint, startPoint;
  el = $(el);
  startPoint = $('header').height() + 296;
  function check() {
      stopPoint = window.pageYOffset + $('.block-sidebar').height() + 12; // РџРѕСЃР»РµРґРЅРµРµ С‡РёСЃР»Рѕ == РїР°СЂР°РјРµС‚СЂ "top" Сѓ .block-sidebar.fixed
      if (window.pageYOffset >= startPoint && stopPoint < $('footer').offset().top) {
          el.addClass("fixed");
          el.removeClass("fixed--bottom");
          $('#js-scrollable').removeAttr('style');
      } else if (stopPoint >= $('footer').offset().top) {
          el.addClass("fixed--bottom");
          el.removeClass("fixed");
          $('#js-scrollable').removeAttr('style');
      } else {
          el.removeClass("fixed");
          el.removeClass("fixed--bottom");
          $('#js-scrollable').css('height', `calc(100vh - ${$('header').height() + 93 - window.pageYOffset}px)`);
      }
  }
  window.addEventListener("scroll", check);
});