'use strict'
console.log('Starting up controller');

// for each link in the nav we will create a dynamic li

$('.navbar-nav').html(getStrNavLis())

$('[data-services="services-container"]').html(getStrDescs())