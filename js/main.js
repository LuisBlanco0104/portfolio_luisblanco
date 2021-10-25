/*------------ about section tabs --------------*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event) =>{
            /* if event.target contains "tab-item" class and not contains "active" */
            if(event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                console.log(target);
                /* deactivate existing active "tab-item" */
                tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
                event.target.classList.add("outer-shadow", "active");
                /* deactivate existing active "tab-content" */
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                // active new 'tab-content' //
                aboutSection.querySelector(target).classList.add("active");
            }
        })
})(); 
