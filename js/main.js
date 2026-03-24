// Core JS for MatriTecture UX
document.addEventListener("DOMContentLoaded", () => {
    // Basic filter logic for Projects page
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active classes
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            // Logic to filter project items would go here
            console.log("Filtering by:", e.target.dataset.filter);
        });
    });
});