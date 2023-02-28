const text = document.querySelector(".segundo__texto");
const textLoad = () => {
    setTimeout(() => (
        text.textContent = "Juan Carlos"
            ), 0);
setTimeout(() => (
    text.textContent = "Cruz González"
            ), 4000);
        }
textLoad();
setInterval(textLoad, 8000);