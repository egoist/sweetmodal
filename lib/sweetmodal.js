(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (window, document, undefined) {
  var modalClass = ".sm-modal",
      options = {
    element: null
  };

  var getModal = function () {

    var $modal = document.querySelector(".sm-modal");

    if (!$modal) {
      initModal();
      $modal = getModal();
    }

    return $modal;
  };

  var initModal = function () {

    var smWrap = document.createElement("div"),
        smHTML = "<div class=\"sm-wrapper\"><div class=\"sm-modal\"></div></div>";

    smWrap.innerHTML = smHTML;

    while (smWrap.firstChild) {
      document.body.appendChild(smWrap.firstChild);
    }
  };

  var showModal = function () {

    var $modal = getModal(),
        $smWrap = document.querySelector(".sm-wrapper");

    $modal.innerHTML = document.querySelector(options.element).innerHTML;

    setTimeout(function () {
      $smWrap.classList.add("sm-wrapper-true");
      $modal.classList.add("sm-modal-center");
    }, 200);
  };

  var removeModal = function () {

    var $smWrap = document.querySelector(".sm-wrapper"),
        $modal = getModal();

    $modal.classList.remove("sm-modal-center");
    $smWrap.classList.add("sm-wrapper-false");
    setTimeout(function () {
      $smWrap.parentNode.removeChild($smWrap);
    }, 200);
  };

  var sm = function () {
    var element = arguments[0] === undefined ? nul : arguments[0];

    options.element = element;

    showModal();
  };

  sm.close = function () {

    return removeModal();
  };

  window.sm = sm;
})(window, document);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2NoYW56ZW4vZGV2L3N3ZWV0bW9kYWwvc3JjL3N3ZWV0bW9kYWwuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFBLFVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUs7QUFDL0IsTUFBSSxVQUFVLEdBQUcsV0FBVztNQUMxQixPQUFPLEdBQUc7QUFDUixXQUFPLEVBQUUsSUFBSTtHQUNkLENBQUE7O0FBRUgsTUFBSSxRQUFRLEdBQUcsWUFBTTs7QUFFbkIsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTs7QUFFaEQsUUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNYLGVBQVMsRUFBRSxDQUFBO0FBQ1gsWUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFBO0tBQ3BCOztBQUVELFdBQU8sTUFBTSxDQUFBO0dBQ2QsQ0FBQTs7QUFFRCxNQUFJLFNBQVMsR0FBRyxZQUFNOztBQUVwQixRQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN4QyxNQUFNLG1FQUErRCxDQUFBOztBQUV2RSxVQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTs7QUFFekIsV0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFO0FBQ3hCLGNBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtLQUM3QztHQUVGLENBQUE7O0FBRUQsTUFBSSxTQUFTLEdBQUcsWUFBTTs7QUFFcEIsUUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFFO1FBQ3ZCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBOztBQUUvQyxVQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQTs7QUFFcEUsY0FBVSxDQUFDLFlBQU07QUFDZixhQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hDLFlBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7S0FDeEMsRUFBRSxHQUFHLENBQUMsQ0FBQTtHQUVSLENBQUE7O0FBRUQsTUFBSSxXQUFXLEdBQUcsWUFBTTs7QUFFdEIsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFBOztBQUVyQixVQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFDLFdBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDekMsY0FBVSxDQUFDLFlBQU07QUFDZixhQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0dBRVIsQ0FBQTs7QUFFRCxNQUFJLEVBQUUsR0FBRyxZQUFtQjtRQUFsQixPQUFPLGdDQUFHLEdBQUc7O0FBRXJCLFdBQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUUxQixhQUFTLEVBQUUsQ0FBQTtHQUNaLENBQUE7O0FBRUQsSUFBRSxDQUFDLEtBQUssR0FBRyxZQUFNOztBQUVmLFdBQU8sV0FBVyxFQUFFLENBQUE7R0FFckIsQ0FBQTs7QUFFRCxRQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtDQUNmLENBQUEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkgPT4ge1xuICBsZXQgbW9kYWxDbGFzcyA9ICcuc20tbW9kYWwnLFxuICAgIG9wdGlvbnMgPSB7XG4gICAgICBlbGVtZW50OiBudWxsXG4gICAgfVxuXG4gIGxldCBnZXRNb2RhbCA9ICgpID0+IHtcblxuICAgIGxldCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc20tbW9kYWwnKVxuXG4gICAgaWYgKCEkbW9kYWwpIHtcbiAgICAgIGluaXRNb2RhbCgpXG4gICAgICAkbW9kYWwgPSBnZXRNb2RhbCgpXG4gICAgfVxuXG4gICAgcmV0dXJuICRtb2RhbFxuICB9XG5cbiAgbGV0IGluaXRNb2RhbCA9ICgpID0+IHtcblxuICAgIGxldCBzbVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHNtSFRNTCA9IGA8ZGl2IGNsYXNzPVwic20td3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzbS1tb2RhbFwiPjwvZGl2PjwvZGl2PmBcblxuICAgIHNtV3JhcC5pbm5lckhUTUwgPSBzbUhUTUxcblxuICAgIHdoaWxlIChzbVdyYXAuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzbVdyYXAuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBzaG93TW9kYWwgPSAoKSA9PiB7XG5cbiAgICBsZXQgJG1vZGFsID0gZ2V0TW9kYWwoKSxcbiAgICAkc21XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtLXdyYXBwZXInKVxuXG4gICAgJG1vZGFsLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbGVtZW50KS5pbm5lckhUTUxcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJHNtV3JhcC5jbGFzc0xpc3QuYWRkKCdzbS13cmFwcGVyLXRydWUnKVxuICAgICAgJG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3NtLW1vZGFsLWNlbnRlcicpXG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICBsZXQgcmVtb3ZlTW9kYWwgPSAoKSA9PiB7XG5cbiAgICBsZXQgJHNtV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbS13cmFwcGVyJyksXG4gICAgICAkbW9kYWwgPSBnZXRNb2RhbCgpXG5cbiAgICAkbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc20tbW9kYWwtY2VudGVyJylcbiAgICAkc21XcmFwLmNsYXNzTGlzdC5hZGQoJ3NtLXdyYXBwZXItZmFsc2UnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJHNtV3JhcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRzbVdyYXApXG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICBsZXQgc20gPSAoZWxlbWVudCA9IG51bCkgPT4ge1xuXG4gICAgb3B0aW9ucy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHNob3dNb2RhbCgpXG4gIH1cblxuICBzbS5jbG9zZSA9ICgpID0+IHtcblxuICAgIHJldHVybiByZW1vdmVNb2RhbCgpXG5cbiAgfVxuXG4gIHdpbmRvdy5zbSA9IHNtXG59KHdpbmRvdywgZG9jdW1lbnQpIl19
