/*------------ about section tabs --------------*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event) =>{
            /* if event.target contains 'tab-item' class and not contains 'active' */
            if(event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
                console.log("event.target contains 'tab-item' class and not contains 'active' class");
                console.log(event.target);
            }
        })

})();