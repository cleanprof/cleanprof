let techStacks = [products];
let projectCards = document.querySelector("#project-cards");

let template = document.querySelector("#card-template");

$(".navburger").click(function() {
  $(".navmenu").toggleClass("relative");
  $(".navmenu").toggleClass("hidden");
});

insertProjects(techStacks[0]);

$(".tech-stack").click(function() {
  if (!this.classList.contains("active")) {
    $(".tech-stack.active").removeClass("active bg-gray-800 text-white");
    $(".tech-stack.active").addClass("border-white hover:border-gray-200 text-gray-800 hover:bg-gray-200");
    $(this).removeClass("border-white hover:border-gray-200 text-gray-800 hover:bg-gray-200");
    $(this).addClass("active bg-gray-800 text-white");

    let stack = getStack(this)
    changeStack(stack);
  }
});

function getStack(button) {
  if (button.classList.contains("ror")) {
    index = 0;
  } 
  else if (button.classList.contains("django")) {
    index = 1;
  } 
  else {
    index = 2;
  }
  return index;
}

function changeStack(stack) {
  let stackProjects = techStacks[stack];
  let oldCards = $(projectCards).children();

  // projectCards.querySelectorAll('*').forEach(n => n.remove());
  $(oldCards).fadeOut(600, function() {
    $(this).remove();
    insertProjects(stackProjects);
  });
  return false;
};

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

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

// create cover letter
// create template for summary

// to do:
// populate homepage
// add footer Find me
// add about
// add gallery
// smooth drop down navbar mobile

// separate data (advanced using yaml)

// done:
// separate data (advanced using yaml)
// add changing smooth animation (fade in out)
