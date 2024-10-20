const pageTurnBtn = document.querySelectorAll(".nextpage-btn");


pageTurnBtn.forEach((el, i) => {
    el.onclick  = () => {
         const pageTurnId = el.getAttribute('data-page');
         const pageTurn = document.getElementById(pageTurnId);

         if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout( () => {
                pageTurn.style.zIndex = 20 - i;
            },500)
         }
         else {
            pageTurn.classList.add('turn');
            setTimeout( () => {
                pageTurn.style.zIndex = 20 + i;
            },500)
         }
    }
});

//contact me button
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".contact-me");
contactMeBtn.onclick = () => {
    pages.forEach((page, i) => {
        setTimeout( () => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + i;
            }, 500)
        },(i + 1) * 200 + 100 )
    })
}


let totalPages = pages.length;
let pageNumber = 0;

function reverseI() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//profile  back 
const profileBackBtn = document.querySelector(".back-profile");
profileBackBtn.onclick = () => {
    pages.forEach(( _, i) => {
        setTimeout(() => {
            reverseI();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                pages[pageNumber].style.zIndex = 10 + i;
            },500)
        },(i + 1) * 200 + 100)
    })
}

const coverRight = document.querySelector('.cover.cover-right');

setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800)

//opening animation all pages right animation
pages.forEach(( _, i) => {
    setTimeout(() => {
        reverseI();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            pages[pageNumber].style.zIndex = 10 + i;
        },500)
    },(i + 1) * 200 + 2100)
})