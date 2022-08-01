'use strict'
console.log('Starting up');

var navLis = [
    { txt: 'Specialities', href: '#services' },
    { txt: 'Portfolio', href: '#portfolio' },
    { txt: 'Me', href: '#me' },
    { txt: 'Contact', href: '#contact' },
]

// for each link in the nav we will create a dynamic li
var strNavLis = navLis.map(li => `<li class="nav-item">\n 
    \t<a class="nav-link js-scroll-trigger" href="${li.href}">${li.txt}</a>\n</li> \n
`).join('')

$('.navbar-nav').html(strNavLis)

