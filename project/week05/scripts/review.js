document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.querySelector("#review-count");

    let reviewCount =  Number(window.localStorage.getItem("numReviews")) || 0;
    
    reviewCount++;
    localStorage.setItem("numReviews", reviewCount);

    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});