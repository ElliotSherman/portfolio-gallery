'use strict'
console.log('Starting up controller');

$(onInit)

function onInit() {
  renderElements()
}

function renderElements() {
  // render nav links
  $('.navbar-nav').html(getStrNavLis())
  // render service descs
  $('[data-services="services-container"]').html(getStrDescs())
  // render portfolio gallery links
  $('[data-portfolio-cards="data-portfolio-cards"]').html(getStrPortfolioCards())
  // append models after footer
}

function getStrNavLis() {
  var navLinks = getNavLinks()
  return navLinks.map(li => `<li class="nav-item">\n 
    \t<a class="nav-link js-scroll-trigger" href="${li.href}">${li.txt}</a>\n</li> \n
`).join('')
}

function getStrDescs() {
  var specialitiesDescriptions = getSpecialitiesDescriptions()
  return specialitiesDescriptions.map(desc => ` <div class="col-md-4">\n
    \t<span class="fa-stack fa-4x">\n
      \t<i class="fa fa-circle fa-stack-2x text-primary"></i>\n
      \t<i class="fa ${desc.icon} fa-stack-1x fa-inverse"></i>\n
    \t</span>\n
    \t<h4 class="service-heading">${desc.title}</h4>\n
    \t<p class="text-muted">${desc.desc}</p>\n
    </div>\n` ).join('')
}

function getStrPortfolioCards() {
  var projects = getProjects()
  return projects.map(card => `        
    <div class="col-md-4 col-sm-6 portfolio-item">\n
    \t<a class="portfolio-link" data-toggle="modal" onclick="onShowModal('${card.id}')" href="#portfolioModal1">\n
      \t<div class="portfolio-hover">\n
        \t<div class="portfolio-hover-content">\n
          \t<i class="fa fa-plus fa-3x"></i>\n
        \t</div>\n
      \t</div>\n
      \t<img class="img-fluid" src="img/projectImgs/${card.id}.jpg" alt="">\n
    \t</a>\n
    \t<div class="portfolio-caption">\n
      \t<h4>${card.id}</h4>\n
      \t<p class="text-muted">${card.title}</p>\n
    \t</div>\n
    </div>\n`).join('')
}

function onShowModal(id) {
  const modal = getProjectById(id)[0]
  console.log(renderModal(modal));
  $('.modal-body').html(renderModal(modal))
}

function renderModal(modal) {
  return `<h2>${modal.id}</h2>
    <p class="item-intro text-muted">${modal.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/projectImgs/${modal.id}.jpg" alt="">
    <p>${modal.desc}</p>
    <ul class="list-inline">
      <li>Date: ${modal.date}</li>
    </ul>
    <div class='my-3'><a class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-check"></i>
      CHeck Out The Deployment</a>
      </div>
    <div><button class="btn btn-primary btn-info" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Modal</button>
      </div>`
}