(function() {
	angular.module('myApp', [])
		.controller('myController', myController)
})();

function myController() {
  var self = this;
  self.showH1 = false;
  self.showUL = false;
  self.showPopup = false;

  self.clickedShowH1Button = function() {
    console.log("Clicked Button");
    self.showH1 = true;
  }

  self.clickedShowULButton = function() {
    self.showUL = true;
  }

  self.mousedOverParagraph = function(e) {
    e.target.style.color = 'pink';
  }

  self.linkClicked = function(e) {
    var goToLink = prompt("Really naviage to " + e.target.hostname + "?");
    console.log(e);

    if (!goToLink || goToLink.toLowerCase() != 'yes') {
      e.currentTarget.parentNode.removeChild(e.currentTarget);
      e.preventDefault();
    }
  }

  self.showPopupModal = function() {
    self.showPopup = true;
  }
  self.hidePopupModal = function() {
    self.showPopup = false;
  }
}


