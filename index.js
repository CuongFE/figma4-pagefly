//NAVBAR
const navToggle = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__list')
navToggle.addEventListener('click', function() {
    navList.classList.toggle('show')
    console.log('123')
})

    // Search box
// const btnSearch = document.querySelector('.search-box_btn')
// const searchBox = document.querySelector('.search-box_input')
// btnSearch.addEventListener('click', function(){
//     searchBox.classList.toggle("open")
//     console.log("123");    
// } ) 

// TEMPLATES


// Search Box
const icon = document.querySelector('.icon')
const search = document.querySelector('.search')

icon.addEventListener('click', function() {
    search.classList.toggle('active')
    console.log('123')
})


function clear() {
    var a = document.getElementById("mysearch").value = '';
    document.getElementById("mysearch").innerHTML = a;
}


$(document).ready(function () {
    $(".templates__content").slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      arrows: false,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });

// PARTNERS 
const partnerButton = document.querySelector('.partner__button')
const partnerRow2 = document.querySelector('.partner__row2--none')
partnerButton.addEventListener('click', function() {
    partnerRow2.classList.toggle('up')
    console.log('123')
})