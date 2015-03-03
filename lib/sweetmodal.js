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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2NoYW56ZW4vZGV2L3NleC1tb2RhbC9zcmMvc3dlZXRtb2RhbC5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUEsVUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBSztBQUMvQixNQUFJLFVBQVUsR0FBRyxXQUFXO01BQzFCLE9BQU8sR0FBRztBQUNSLFdBQU8sRUFBRSxJQUFJO0dBQ2QsQ0FBQTs7QUFFSCxNQUFJLFFBQVEsR0FBRyxZQUFNOztBQUVuQixRQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztBQUVoRCxRQUFJLENBQUMsTUFBTSxFQUFFO0FBQ1gsZUFBUyxFQUFFLENBQUE7QUFDWCxZQUFNLEdBQUcsUUFBUSxFQUFFLENBQUE7S0FDcEI7O0FBRUQsV0FBTyxNQUFNLENBQUE7R0FDZCxDQUFBOztBQUVELE1BQUksU0FBUyxHQUFHLFlBQU07O0FBRXBCLFFBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3hDLE1BQU0sbUVBQStELENBQUE7O0FBRXZFLFVBQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBOztBQUV6QixXQUFPLE1BQU0sQ0FBQyxVQUFVLEVBQUU7QUFDeEIsY0FBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQzdDO0dBRUYsQ0FBQTs7QUFFRCxNQUFJLFNBQVMsR0FBRyxZQUFNOztBQUVwQixRQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUU7UUFDdkIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUE7O0FBRS9DLFVBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFBOztBQUVwRSxjQUFVLENBQUMsWUFBTTtBQUNmLGFBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDeEMsWUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtLQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0dBRVIsQ0FBQTs7QUFFRCxNQUFJLFdBQVcsR0FBRyxZQUFNOztBQUV0QixRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUE7O0FBRXJCLFVBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDMUMsV0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN6QyxjQUFVLENBQUMsWUFBTTtBQUNmLGFBQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ3hDLEVBQUUsR0FBRyxDQUFDLENBQUE7R0FFUixDQUFBOztBQUVELE1BQUksRUFBRSxHQUFHLFlBQW1CO1FBQWxCLE9BQU8sZ0NBQUcsR0FBRzs7QUFFckIsV0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRTFCLGFBQVMsRUFBRSxDQUFBO0dBQ1osQ0FBQTs7QUFFRCxJQUFFLENBQUMsS0FBSyxHQUFHLFlBQU07O0FBRWYsV0FBTyxXQUFXLEVBQUUsQ0FBQTtHQUVyQixDQUFBOztBQUVELFFBQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO0NBQ2YsQ0FBQSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSA9PiB7XG4gIGxldCBtb2RhbENsYXNzID0gJy5zbS1tb2RhbCcsXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGVsZW1lbnQ6IG51bGxcbiAgICB9XG5cbiAgbGV0IGdldE1vZGFsID0gKCkgPT4ge1xuXG4gICAgbGV0ICRtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbS1tb2RhbCcpXG5cbiAgICBpZiAoISRtb2RhbCkge1xuICAgICAgaW5pdE1vZGFsKClcbiAgICAgICRtb2RhbCA9IGdldE1vZGFsKClcbiAgICB9XG5cbiAgICByZXR1cm4gJG1vZGFsXG4gIH1cblxuICBsZXQgaW5pdE1vZGFsID0gKCkgPT4ge1xuXG4gICAgbGV0IHNtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgc21IVE1MID0gYDxkaXYgY2xhc3M9XCJzbS13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNtLW1vZGFsXCI+PC9kaXY+PC9kaXY+YFxuXG4gICAgc21XcmFwLmlubmVySFRNTCA9IHNtSFRNTFxuXG4gICAgd2hpbGUgKHNtV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNtV3JhcC5maXJzdENoaWxkKVxuICAgIH1cblxuICB9XG5cbiAgbGV0IHNob3dNb2RhbCA9ICgpID0+IHtcblxuICAgIGxldCAkbW9kYWwgPSBnZXRNb2RhbCgpLFxuICAgICRzbVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc20td3JhcHBlcicpXG5cbiAgICAkbW9kYWwuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsZW1lbnQpLmlubmVySFRNTFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkc21XcmFwLmNsYXNzTGlzdC5hZGQoJ3NtLXdyYXBwZXItdHJ1ZScpXG4gICAgICAkbW9kYWwuY2xhc3NMaXN0LmFkZCgnc20tbW9kYWwtY2VudGVyJylcbiAgICB9LCAyMDApXG5cbiAgfVxuXG4gIGxldCByZW1vdmVNb2RhbCA9ICgpID0+IHtcblxuICAgIGxldCAkc21XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtLXdyYXBwZXInKSxcbiAgICAgICRtb2RhbCA9IGdldE1vZGFsKClcblxuICAgICRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzbS1tb2RhbC1jZW50ZXInKVxuICAgICRzbVdyYXAuY2xhc3NMaXN0LmFkZCgnc20td3JhcHBlci1mYWxzZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkc21XcmFwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHNtV3JhcClcbiAgICB9LCAyMDApXG5cbiAgfVxuXG4gIGxldCBzbSA9IChlbGVtZW50ID0gbnVsKSA9PiB7XG5cbiAgICBvcHRpb25zLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgc2hvd01vZGFsKClcbiAgfVxuXG4gIHNtLmNsb3NlID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIHJlbW92ZU1vZGFsKClcblxuICB9XG5cbiAgd2luZG93LnNtID0gc21cbn0od2luZG93LCBkb2N1bWVudCkiXX0=
