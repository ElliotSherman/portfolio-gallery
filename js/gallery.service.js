'use strict'
console.log('Starting up service');

const LOREM_STR = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto
quo inventore harum ex
magni, dicta impedit.`

const gNavLis = [
    { txt: 'Specialities', href: '#services' },
    { txt: 'Portfolio', href: '#portfolio' },
    { txt: 'Me', href: '#me' },
    { txt: 'Contact', href: '#contact' },
]

const specialitiesDescriptions = [
    { title: 'E-Commerce', desc: LOREM_STR },
    { title: 'Responsive Design', desc: LOREM_STR },
    { title: 'Web Security', desc: LOREM_STR }
]

var strNavLis = gNavLis.map(li => `<li class="nav-item">\n 
    \t<a class="nav-link js-scroll-trigger" href="${li.href}">${li.txt}</a>\n</li> \n
`).join('')

function getStrNavLis() {
    return strNavLis
}

 function getStrDescs(){
    return strDescs()
 }

 function strDescs(){
    return specialitiesDescriptions.map(desc => ` <div class="col-md-4">\n
    \t<span class="fa-stack fa-4x">\n
      \t<i class="fa fa-circle fa-stack-2x text-primary"></i>\n
      \t<i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>\n
    \t</span>\n
    \t<h4 class="service-heading">${desc.title}</h4>\n
    \t<p class="text-muted">${desc.desc}</p>\n
    </div>\n` )
 }

function strNavLis() {
    return gNavLis.map(li => `<li class="nav-item">\n 
    \t<a class="nav-link js-scroll-trigger" href="${li.href}">${li.txt}</a>\n</li> \n
`).join('')
}