document.querySelector('.menu-burger').onclick = function () {
   document.querySelector('.header__menu').classList.toggle('active')
}

const getId = (link) => link.getAttribute('href').replace('#', '')

const observer = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            document.querySelectorAll('.menu__link').forEach((link) => {
               link.classList.toggle('menu__link--active', getId(link) === entry.target.id)
            })
         }
      })
   },
   {
      threshold: 0.7,
   }
)
document.querySelectorAll('.section').forEach((section) => {
   observer.observe(section)
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   })
}

function initMap() {
   const uluru = { lat: -25.344, lng: 131.036 }
   const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru,
   })
   const marker = new google.maps.Marker({
      position: uluru,
      map: map,
   })
}
