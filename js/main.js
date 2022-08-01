'use strict'
console.log('Starting up controller');

// for each link in the nav we will create a dynamic li

// render nav links
$('.navbar-nav').html(getStrNavLis())
// render service descs
$('[data-services="services-container"]').html(getStrDescs())
// render portfolio gallery links
$('[data-portfolio-cards="data-portfolio-cards"]').html(getStrPortfolioCards())
// append models after footer
$('footer').after(getStrProjectModals())