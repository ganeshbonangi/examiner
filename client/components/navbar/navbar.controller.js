'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    angular.extend(this,{Auth});
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.isCollapsed = true;
    this.languages = [
    	{
    		lang:'telugu',
    		displayText:'Telugu'
    	},{
    		lang:'english',
    		displayText:'English'
    	}
    ];
    this.currentLang = this.languages[0];
  }
   toggleDropdown($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.isopen = !this.isopen;
  }
  changeLang(lang){
  	this.currentLang = lang;
    this.Auth.currentLang = this.currentLang.lang;
    this.Auth.refreshPageWithSelectedLang();
  	this.isopen = false;
  }
}

angular.module('authCellApp')
  .controller('NavbarController', NavbarController);
