
//preloader handler
const preloader_area = document.querySelector(".preloader");
const product_popup = document.querySelector(".top_pick_popup");
const product_popup_wrapper = document.querySelector(".top_pick_wrapper");
const product_popup_close = document.querySelector(".popup_close");


window.addEventListener("load", () => {
    setTimeout(() => {
        preloader_area.style.visibility = "hidden"
        preloader_area.style.opacity = "0"
    }, 2000);

    product_popup_wrapper.style.animation = "slide_right 1s ease-in 5s forwards"
    product_popup.style.animation = "slide_right2 1s ease-in 5s forwards"

    product_popup_close.addEventListener("click", () => {
        product_popup_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
        product_popup.style.animation = "slide_out 1s ease-in  forwards"

    })

})

//custom mouse cursor
// let cursor = document.querySelector(".cursor")

// document.addEventListener("mousemove", (e) => {
//     let x = e.clientX;
//     let y = e.clientY;

//     cursor.style.left = `${x}px`
//     cursor.style.top = `${y}px`
// })
//product quantity hanlder

//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let inputValue = parseInt(cart_value_input[index].value);

        if (inputValue < 9) {
            cart_value_input[index].value = `0${inputValue + 1}`;
        } else {
            cart_value_input[index].value = inputValue + 1;
        }
    });
});

decrease_button.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let inputValue = parseInt(cart_value_input[index].value);

        if (inputValue > 1) {
            if (inputValue <= 10) {
                cart_value_input[index].value = `0${inputValue - 1}`;
            } else {
                cart_value_input[index].value = inputValue - 1;
            }
        }
    });
});

//copy coupon code 
const coupon = document.querySelector(".coupon_code");
const coupon_icon = document.querySelector(".copy_coupon");

// Add a click event listener to the coupon icon
coupon_icon.addEventListener("click", () => {
    // Attempt to copy the text to the clipboard
    navigator.clipboard.writeText(coupon.textContent)
        .then(() => {
            // If successful, update the coupon icon's innerHTML
            coupon_icon.innerHTML = `<i class="fa-solid fa-clipboard-check"></i>  
      <span class="coupon_code">Copied!</span>`;
            setTimeout(() => {
                coupon_icon.innerHTML = `<i class="fa-solid fa-copy"></i>  
                <span class="coupon_code">KH632</span>`;
            }, 2000);

        })
        .catch((err) => {
            // Handle any errors, such as browser support or permission issues
            console.error('Unable to copy text to clipboard', err);
        });
});
//side cart hanlder
$(".cart_icon").on("click", () => {
    $(".side_cart_wrapper").slideDown();
    $(".side_cart").fadeToggle();
});

$(".cart_close").on("click", () => {
    $(".side_cart_wrapper").slideUp();
    $(".side_cart").fadeToggle();
});

// document.addEventListener("mousemove", (e) => {
//     let cursor = document.querySelector(".cursor")
//     if (!$(".side_cart_wrapper").has(e.target).length && !$(".cart_close").has(e.target).length && $(".side_cart").has(e.target).length) {


//             let x = e.clientX;
//             let y = e.clientY;

//             cursor.style.left = `${x}px`
//             cursor.style.top = `${y}px`
//             cursor.style.display = "block"
//     } else {
//         cursor.style.display = "none"
//     }
// })

//side cart handler

$(document).on("click", (e) => {
    if (!$(".side_cart_wrapper").has(e.target).length && !$(".cart_close").has(e.target).length && $(".side_cart").has(e.target).length) {
        $(".side_cart_wrapper").slideUp();
        $(".side_cart").fadeToggle();
    }
});

$(".coupon_btn").on("click", () => {
    $(".discount_wrapper").slideDown();
    $(".discount_mini_popup").fadeToggle();
});

$(".cupon_delete").on("click", () => {
    $(".discount_wrapper").slideUp();
    $(".discount_mini_popup").fadeToggle();
});
$(".estimate_btn").on("click", () => {
    $(".rate_wrapper").slideDown();
    $(".rate_mini_popup").fadeToggle();
});

$(".rate_cancle").on("click", () => {
    $(".rate_wrapper").slideUp();
    $(".rate_mini_popup").fadeToggle();
});
$(".gift_btn").on("click", () => {
    $(".gift_wrap").slideDown();
    $(".gift_mini_popup").fadeToggle();
});

$(".delete_gift").on("click", () => {
    $(".gift_wrap").slideUp();
    $(".gift_mini_popup").fadeToggle();
});
$(".note_btn").on("click", () => {
    $(".popup_div").slideDown();
    $(".mini_popup").fadeToggle();
});

$(".delete_card").on("click", () => {
    $(".popup_div").slideUp();
    $(".mini_popup").fadeToggle();
});

//item dropdown hanler

$(".selected_div").each(function () {
    var dropdown_area = $(this).siblings(".item_dropdown");

    $(this).on("click", function () {
        // Close dropdowns of all other item wrappers
        $(".selected_div").not($(this)).siblings(".item_dropdown").fadeOut();

        // Toggle the dropdown of the current item wrapper
        dropdown_area.fadeToggle();
    });
});

$(".category_name").on("click", function () {
    $(".category_dropdown").fadeToggle()

})

$(".category_dropdown li").each((index, item) => {
    $(item).on("click", () => {
        let category_value = $(".selected_category");
        category_value.text($(item).text());
    });
});


const dropdown_item = document.querySelectorAll(".item_dropdown li")

dropdown_item.forEach(item => {


    item.addEventListener("click", () => {

        let dropdown_value = item.parentElement.previousElementSibling.querySelector(".selected_item")
        dropdown_value.textContent = item.textContent;
    })
})

//offer banner handler
const banner_close_button = document.querySelector(".banner_close");
const banner_area = document.querySelector(".offer_banner");

banner_close_button.addEventListener("click", () => {
    banner_area.style.transform = "translate(0%, -100%)"
    banner_area.style.visibility = "hidden"
    banner_area.style.opacity = "0"
    banner_area.style.animation = "hide .2s ease-in .2s alternate forwards"
})