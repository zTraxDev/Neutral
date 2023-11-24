var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('mouseover', function() {
      this.style.borderBottom = '2px solid red';
    });
  
    navbarItems[i].addEventListener('mouseout', function() {
      this.style.borderBottom = '2px solid transparent';
    })
}