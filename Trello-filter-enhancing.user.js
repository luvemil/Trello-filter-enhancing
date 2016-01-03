// ==UserScript==
// @name        Trello-filter-enhancing
// @namespace   luvemil.github.io
// @description Add a persistent shortcut to filtering options
// @include     https://trello.com/b/*/*
// @version     1
// @grant       none
// ==/UserScript==
setInterval( function (){
  btn_l = document.getElementsByClassName("board-header-btn-filter-indicator");
  btn = btn_l[0];
  btn.setAttribute(
    "class",
    btn.className.replace( /(?:^|\s)hide(?!\S)/g , '')
  );
}, 1000);
