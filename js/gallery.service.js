'use strict'
console.log('Starting up service');


const gNavLis = [
  { txt: 'Specialities', href: '#services' },
  { txt: 'Portfolio', href: '#portfolio' },
  { txt: 'Me', href: '#me' },
  { txt: 'Contact', href: '#contact' },
]
// make single modal 
const gProjects = [
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '01-full.jpg',
    title: 'Threads', txtCaption: 'Illustration', href: '#portfolioModal1',
    imgThumbnail: '01-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 1
  },
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '02-full.jpg',
    title: 'Explore', txtCaption: 'Graphic Design', href: '#portfolioModal2',
    imgThumbnail: '02-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 2
  },
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '03-full.jpg',
    title: 'Finish', txtCaption: 'Identity', href: '#portfolioModal3',
    imgThumbnail: '03-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 3
  },
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '04-full.jpg',
    title: 'Lines', txtCaption: 'Branding', href: '#portfolioModal4',
    imgThumbnail: '04-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 4
  },
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '05-full.jpg',
    title: 'Southwest', txtCaption: 'Website Design', href: '#portfolioModal5',
    imgThumbnail: '05-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 5
  },
  {
    projName: 'Project Name', introTxt: SHORT_LOREM, imgFull: '06-full.jpg',
    title: 'Window', txtCaption: 'Photography', href: '#portfolioModal6',
    imgThumbnail: '06-thumbnail.jpg', desc: DESC_LOREM, date: 'date',
    client: 'client', category: 'category', id: 6
  }
]


const specialitiesDescriptions = [
  { title: 'E-Commerce', desc: LOREM_STR },
  { title: 'Responsive Design', desc: LOREM_STR },
  { title: 'Web Security', desc: LOREM_STR }
]

function getSpecialitiesDescriptions() {
  return specialitiesDescriptions
}

function getProjects() {
  return gProjects
}
function getNavLinks() {
  return gNavLis
}
function getProjectById(id) {
  return gProjects.filter(proj => proj.id === id)
}