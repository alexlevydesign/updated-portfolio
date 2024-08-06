// Card Headings

console.log(document.getElementsByTagName("h1")[0]);
document.getElementsByTagName("h1")[0].innerHTML = "Hello";

const uxPages = ["Optimal Assessment", "AI Financial Advisor", "The Newshouse Redesign"]

const graphicDesignPages = ["CuseHacks Branding", "Type Specimen", "Motion Reel"]

uxPages.forEach(page => {
    // if (currentPage === page) {
        // console.log("This is a UX page!")
        // document.getElementby("NavBarLinksChild").classList.add("CurrentPage");
        // console.log(document.getElementsByClassName("NavBarLinksChild")[1].innerHTML);
        // document.querySelector("ProjectCardText h3")
        console.log(document.getElementsByTagName("h1"));
    // }
});