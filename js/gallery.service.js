'use strict'
console.log('Starting up service');


const gNavLis = [
  { txt: 'Qualities', href: '#services' },
  { txt: 'Portfolio', href: '#portfolio' },
  { txt: 'Me', href: '#me' },
  { txt: 'Contact', href: '#contact' },
]
// make single modal 

const gProjects = [{
  id: "BalloonPop", name: "BalloonPop", title: "Pop those ballooons!",
  desc: "Simple game that implements mouse click events", url: "https://elliotsherman.github.io/BalloonPop",
  publishedAt: 1448693940000, labels: ["intervals", "Click events"],
},
{
  id: "touchTheNumbers", name: "touchTheNumbers", title: "click on the numbers in order",
  desc: "lorem ipsum lorem ipsum lorem ipsum", url: "https://elliotsherman.github.io/touchTheNumbers",
  publishedAt: 1448693940000, labels: ["setTimeout functions", "Click events"],
},
{
  id: "myBooksShop", name: "myBooksShop", title: "Filter and list books",
  desc: "Simple demo of filtering data", url: "https://elliotsherman.github.io/myBooksShop",
  publishedAt: 1448693940000, labels: ["Filtering", "Array methods"],
},
{
  id: "Minesweeper", name: "Minesweeper", title: "Be aware of the mines",
  desc: "a recreation of the classic minesweeper game", url: "https://elliotsherman.github.io/Minesweeper",
  publishedAt: 1448693940000, labels: ["Matrixes", "Events"],
},
{
  id: "CalculatorApp", name: "CalculatorApp", title: "A designed calculator",
  desc: "Itsa calculator not a tablet...", url: "https://elliotsherman.github.io/CalculatorApp",
  publishedAt: 1448693940000, labels: ["CSS Transitions", "CSS Design"],
}
]

const specialitiesDescriptions = [
  { title: 'Self Motivated', desc: 'I love to push myself to the edge, I work hard and take my goals seriousley', icon: 'fa-paper-plane' },
  { title: 'Creative', desc: 'Creativity and Imagination is a passion but also an important tool in design ', icon: ' fa-pencil' },
  { title: 'Problem Solver', desc: 'There is no problem that doesn\'t have a solution, I won\'t give up until I find a solution to your problem', icon: ' fa-wrench' }
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