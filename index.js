// Get name of current page
const currentPage = document.getElementsByTagName("title")[0].innerHTML;
// console.log(currentPage);

//array of UI & UX pages
const uxPages = ["Optimal Assessment", "AI Financial Advisor", "The Newshouse Redesign"]

//array of graphic design pages
const graphicDesignPages = ["CuseHacks Branding", "Type Specimen", "Motion Reel"]

// Compare current page to array of all UX pages
uxPages.forEach(page => {
    if (currentPage === page) {
        console.log("This is a UX page!")
        // document.getElementby("NavBarLinksChild").classList.add("CurrentPage");
        // console.log(document.getElementsByClassName("NavBarLinksChild")[1].innerHTML);
        document.getElementsByClassName("NavBarLinksChild")[1].classList.add("CurrentPage");
    }
});

// Compare current page to array of all graphic design pages
graphicDesignPages.forEach(page => {
    if (currentPage === page) {
        console.log("This is a graphic design page!")
        document.getElementsByClassName("NavBarLinksChild")[2].classList.add("CurrentPage");
    }
});

