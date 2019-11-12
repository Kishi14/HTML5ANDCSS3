// // Initialize and add the map
// function initMap() {
//     // Your location
//     const loc = { lat: 12.903650, lng: 77.545212 };
//     // Centered map on location
//     const map = new google.maps.Map(document.querySelector('.map'), {
//       zoom: 14,
//       center: loc
//     });
//     // The marker, positioned at location
//     const marker = new google.maps.Marker({ position: loc, map: map });
//   }
  
  // Sticky menu background
  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navBar').style.opacity = 0.8;
    } else {
      document.querySelector('#navBar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('#navBar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });