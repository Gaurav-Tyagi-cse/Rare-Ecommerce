(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');
    let listProducts = [
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 2,
            name: 'Name product white-black-grey',
            price: 300,
            quantiy: 30,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black', 'grey'],
                size: ['S', 'M', 'L'],
                type: 'Polo'
            }
        },
        {
            id: 3,
            name: 'Name product black',
            price: 200,
            quantiy: 30,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 4,
            name: 'Name product blue-black',
            price: 400,
            quantiy: 30,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['black', 'blue'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 5,
            name: 'Name product brown',
            price: 320,
            quantiy: 30,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['brown'],
                size: ['S', 'M', 'L'],
                type: 'Polo'
            }
        },
        {
            id: 6,
            name: 'Name product white-black',
            price: 100,
            quantiy: 30,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'Shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },


        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },

        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },   {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 1,
            name: 'Name product white-black',
            price: 205,
            quantity: 0,
            image: 'assets/img/shop_01.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        
    
    ];

    let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' đ';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }
    