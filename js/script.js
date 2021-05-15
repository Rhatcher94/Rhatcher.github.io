let main_heading = document.getElementById("main-heading")
let sub_heading = document.getElementById("main-sub-heading")
let title = document.getElementById("title")
let nav_menu = document.getElementById("main-nav-menu")

let about_1 = document.getElementById("about-1")
let about_2 = document.getElementById("about-2")

let phone_number = document.getElementById("phone-number")
let email_address = document.getElementById("email-address")


$(document).ready(() => {
    title.innerHTML = site_title
    main_heading.innerHTML = (main_heading_text)
    sub_heading.innerHTML = (sub_heading_text)
    nav_menu.innerHTML = ""
    nav_menu_items.forEach(element => {
        nav_menu.innerHTML += (`<li class="nav-item mx-0 mt-2 mx-lg-4">
                                <a class="btn btn-outline-light text-white nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger bg-secondary" href="${element.link}">${element.title}</a>
                                </li>`) 
    });   
    about_1.innerHTML = about_text_1
    about_2.innerHTML = about_text_2
    phone_number.innerHTML = phone_number_text
    email_address.innerHTML = email_address_text


})

$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-top-btn').fadeIn();
    } else {
      $('.scroll-top-btn').fadeOut();
    }
});