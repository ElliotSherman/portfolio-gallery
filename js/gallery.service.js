'use strict'
console.log('Starting up service');

const LOREM_STR = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto
quo inventore harum ex
magni, dicta impedit.`

const SHORT_LOREM = `Lorem ipsum dolor sit amet consectetur`

const TITLE_LOREM = `Use this area to describe your project. `

const DESC_LOREM = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
blanditiis
dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
cupiditate,
maiores repudiandae, nostrum, reiciendis facere nemo!`

const gProjectModals = [
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '01-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' },
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '02-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' },
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '03-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' },
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '04-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' },
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '05-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' },
    { title: 'Project Name', introTxt: SHORT_LOREM, img: '06-full.jpg', desc: DESC_LOREM, date: 'date', client: 'client', category: 'category' }
]

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

const portfolioCards = [
    { title: 'Threads', txt: 'Illustration', href: '#portfolioModal1', img: '01-thumbnail.jpg' },
    { title: 'Explore', txt: 'Graphic Design', href: '#portfolioModal2', img: '02-thumbnail.jpg' },
    { title: 'Finish', txt: 'Identity', href: '#portfolioModal3', img: '03-thumbnail.jpg' },
    { title: 'Lines', txt: 'Branding', href: '#portfolioModal4', img: '04-thumbnail.jpg' },
    { title: 'Southwest', txt: 'Website Design', href: '#portfolioModal5', img: '05-thumbnail.jpg' },
    { title: 'Window', txt: 'Photography', href: '#portfolioModal6', img: '06-thumbnail.jpg' }
]

function getStrNavLis() {
    return strNavLis()
}

function getStrDescs() {
    return strDescs()
}

function getStrPortfolioCards() {
    return strPortfolioCards()
}

function getStrProjectModals(){
    return strProjectModals()
}

function strProjectModals(){
    var idx = 0
    return gProjectModals.map(modal => `<div class="portfolio-modal modal fade" id="portfolioModal${++idx}" tabindex="-1" role="dialog" aria-hidden="true">\n
    \t<div class="modal-dialog">\n
      \t<div class="modal-content">\n
        \t<div class="close-modal" data-dismiss="modal">\n
          \t<div class="lr">\n
            \t<div class="rl"></div>\n
          \t</div>\n
        \t</div>\n
        \t<div class="container">\n
          \t<div class="row">\n
            \t<div class="col-lg-8 mx-auto">\n
              \t<div class="modal-body">\n
                \t<!-- Project Details Go Here -->\n
                \t<h2>${modal.title}</h2>\n
                \t<p class="item-intro text-muted">${modal.introTxt}</p>\n
                \t<img class="img-fluid d-block mx-auto" src="img/portfolio/${modal.img}" alt="">\n
                \t<p>${modal.desc}</p>\n
                \t<ul class="list-inline">\n
                  \t<li>Date: ${modal.date}</li>\n
                  \t<li>Client: ${modal.client}</li>\n
                  \t<li>Category: ${modal.category}</li>\n
                \t</ul>\n
                \t<button class="btn btn-primary" data-dismiss="modal" type="button">\n
                  \t<i class="fa fa-times"></i>\n
                  \tClose Project</button>\n
              \t</div>\n
            \t</div>\n
          \t</div>\n
        \t</div>\n
      \t</div>\n
    \t</div>\n
    </div>\n`)
}

function strPortfolioCards() {
    return portfolioCards.map(card => `        
    <div class="col-md-4 col-sm-6 portfolio-item">\n
    \t<a class="portfolio-link" data-toggle="modal" href="${card.href}">\n
      \t<div class="portfolio-hover">\n
        \t<div class="portfolio-hover-content">\n
          \t<i class="fa fa-plus fa-3x"></i>\n
        \t</div>\n
      \t</div>\n
      \t<img class="img-fluid" src="img/portfolio/${card.img}" alt="">\n
    \t</a>\n
    \t<div class="portfolio-caption">\n
      \t<h4>${card.title}</h4>\n
      \t<p class="text-muted">${card.txt}</p>\n
    \t</div>\n
    </div>\n`).join('')
}

function strDescs() {
    return specialitiesDescriptions.map(desc => ` <div class="col-md-4">\n
    \t<span class="fa-stack fa-4x">\n
      \t<i class="fa fa-circle fa-stack-2x text-primary"></i>\n
      \t<i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>\n
    \t</span>\n
    \t<h4 class="service-heading">${desc.title}</h4>\n
    \t<p class="text-muted">${desc.desc}</p>\n
    </div>\n` ).join('')
}

function strNavLis() {
    return gNavLis.map(li => `<li class="nav-item">\n 
    \t<a class="nav-link js-scroll-trigger" href="${li.href}">${li.txt}</a>\n</li> \n
`).join('')
}
