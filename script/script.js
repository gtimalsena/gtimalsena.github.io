

let calcScroll =() => {
    let scrollProgress = document.querySelector(".scroller");
    let progressValue = document.querySelector(".scroll-progress");
    let position = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let scrollValue = Math.round((position * 100)/ scrollHeight)

    position > 100 ? scrollProgress.style.display = "grid" : scrollProgress.style.display = "none"

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient(#e92727 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`

}
    

window.onscroll = calcScroll;
window.onload = calcScroll;