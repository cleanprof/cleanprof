let techStacks = [products];
let projectCards = document.querySelector("#project-cards");

let template = document.querySelector("#card-template");

$(".navburger").click(function() {
  $(".navmenu").toggleClass("relative");
  $(".navmenu").toggleClass("hidden");
});

insertProjects(techStacks[0]);

function insertProjects(stackProjects) {
  let div = document.createElement("div");
  $(div).addClass("container mx-auto md:flex md:justify-center")
  $(div).hide()

  stackProjects.forEach(function(projectContent) {
    let card = template.content.cloneNode(true);
    let cardMain = card.querySelector(".card-main");
  
    let img = card.querySelector("img");
    img.setAttribute("src", projectContent[0]);
    img.setAttribute("alt", projectContent[1]);
    
    let cardTitle = card.querySelector(".card-title");
    cardTitle.textContent = projectContent[2];
    
    let cardContent = card.querySelector(".card-content");
    cardContent.textContent = projectContent[3];
    
    let githubLink = card.querySelector(".price");
    githubLink.setAttribute("href", projectContent[4])

    $(div).append(card);
  });
  $(projectCards).append(div);
  $(div).fadeIn(600);

}
