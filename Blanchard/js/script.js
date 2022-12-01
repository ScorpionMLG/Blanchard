//anchors

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//header

document.querySelector(".header__form-button").addEventListener("click", function (s) {
  document.querySelector(".header__form-small").classList.add("search__active")
})

document.querySelector(".search-close").addEventListener("click", function (sc) {
  document.querySelector(".header__form-small").classList.remove("search__active")
})

document.querySelector(".burger-icon").addEventListener("click", function (sc) {
  document.querySelector(".burger").classList.add("burger__active")
})

document.querySelector(".burger__close").addEventListener("click", function (sc) {
  document.querySelector(".burger").classList.remove("burger__active")
})


// scroll

button = document.querySelectorAll(".header__button");
scrl = document.querySelectorAll(".scroll");
button.forEach(function (b) {

  b.addEventListener("click", function (el) {

    const path = el.currentTarget.dataset.path;

    a = document.querySelector(`[data-path="${path}"]`);

    if ((a.classList.contains('scroll-active')) == true) {
      document.querySelector(`[data-path="${path}"]`).classList.remove('scroll-active');
      document.querySelector(`[data-target="${path}"]`).classList.remove('scroll__active');
    }

    else {
      button.forEach(function (elem) { elem.classList.remove('scroll-active') });
      scrl.forEach(function (elem) { elem.classList.remove('scroll__active') });
      document.querySelector(`[data-path="${path}"]`).classList.add('scroll-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('scroll__active');
    }
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".header__button")) {
    scrl.forEach(element => {
      element.classList.remove("scroll__active");
    });
    button.forEach(element => {
      element.classList.remove("scroll-active");
    });
  }
})

// swiper

var swiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
});

var swiper2 = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 50,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '#gallery-button-next',
    prevEl: '#gallery-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    1440: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

var swiper3 = new Swiper('.events__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  pagination: {
    el: ".events__pagination",
    type: "bullets",
    clickable: true,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    slideLabelMessage: '',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      navigation: {
        nextEl: '#events-button-next',
        prevEl: '#events-button-prev',
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1800: {
      navigation: {
        nextEl: '#events-button-next',
        prevEl: '#events-button-prev',
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

var swiper4 = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '#projects-button-next',
    prevEl: '#projects-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },
    669: {
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

var swiper5 = new Swiper('.gallery__swiper-1024', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".gallery__pagination-1024",
    type: "fraction",
  },
  navigation: {
    nextEl: '#gallery-button-next-1024',
    prevEl: '#gallery-button-prev-1024',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  spaceBetween: 38,
  breakpoints: {
    669: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },
});

//gallery-event

gal = document.querySelectorAll(".gallery__slide")
box = document.querySelectorAll(".gallery__box")

gal.forEach(function (gallery) {
  gallery.addEventListener("click", function (g) {

    const gallery = g.currentTarget.dataset.gallery;

    galer = document.querySelector(`[data-gallery="${gallery}"]`);

    descr = document.querySelector(`[data-description="${gallery}"]`);

    descr.classList.add('gallery-active');
    document.querySelector(".gallery__opacity").classList.remove('hidden');

    if (gallery != 2) {
      document.querySelector(".gallery__broken").classList.add('gallery-active');
    };

    galbtn = document.querySelectorAll(".gallery__btn");

    document.body.style.overflow = 'hidden';

    galbtn.forEach(function (galclose) {
      galclose.addEventListener("click", function (galrem) {
        document.querySelector(".gallery__broken").classList.remove('gallery-active');
        descr.classList.remove('gallery-active');
        document.querySelector(".gallery__opacity").classList.add('hidden');
        document.body.style.overflow = 'visible';
      });
    });

  });

  gallery.addEventListener("keyup", function(enter) {
    if(enter.keyCode === 13){

      const gallery = enter.currentTarget.dataset.gallery;

      galer = document.querySelector(`[data-gallery="${gallery}"]`);

      descr = document.querySelector(`[data-description="${gallery}"]`);

      descr.classList.add('gallery-active');
      document.querySelector(".gallery__opacity").classList.remove('hidden');

      if (gallery != 2) {
        document.querySelector(".gallery__broken").classList.add('gallery-active');
      };

      galbtn = document.querySelectorAll(".gallery__btn");

      document.body.style.overflow = 'hidden';

      galbtn.forEach(function (galclose) {
        galclose.addEventListener("click", function (galrem) {
          document.querySelector(".gallery__broken").classList.remove('gallery-active');
          descr.classList.remove('gallery-active');
          document.querySelector(".gallery__opacity").classList.add('hidden');
          document.body.style.overflow = 'visible';
        });
      });

  };
});

});

// choices

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: false,
  itemSelectText: '',
});

//tabs

let tabs = document.querySelectorAll(".accordion__name")
tabs.forEach(function (tab) {
  tab.addEventListener("click", function (el) {

    const tabs = el.currentTarget.dataset.tabs;

    tab1 = document.querySelector(`[data-tabs="${tabs}"]`);

    tab2 = document.querySelector(`[data-tab="${tabs}"]`);

    if ((tab2) == null) {
      document.querySelector(".tabs__no-info").classList.remove("hidden");
      document.querySelector(".tabs__main").classList.add("hidden");
    }

    else {
      document.querySelector(".tabs__main").classList.add("hidden");
      document.querySelector(".tabs__no-info").classList.add("hidden");
      tab2.classList.remove("hidden");
    }

  })
})

//accordion

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false
  });
})

//tooltip

tippy('.tooltip1', {
  content: 'Пример современных тенденций — современная методология разработки',
});

tippy('.tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.tooltip3', {
  content: 'В стремлении повысить качество',
});

//validate&mask

const selector = document.getElementById('phone')
var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

function isNumeric(str) {
  return /\d/.test(str)
}

function SpecialCharacters(str) {
  return /\W/.test(str)
}

new window.JustValidate('.contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      function: (name, value) => {
        return !isNumeric(document.getElementById("name").value) && !SpecialCharacters(document.getElementById("name").value);
      },
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length == 10;
      }
    },
  },
  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Недопустимый формат",
      maxLength: "Недопустимый формат",
      function: "Недопустимый формат",
    },
    phone: {
      required: "Вы не ввели телефон",
      function: "Недопустимый формат",
    },
  }
})

//map

ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  myMap.geoObjects.add(myPlacemark);

}

