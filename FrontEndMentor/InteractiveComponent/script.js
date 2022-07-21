const u6rating = document.querySelector('#u6rating')
const u6thanks = document.querySelector('#u6thanks')
const u6submit = document.querySelector('.u6submit')
let selectedRate = document.querySelector('#selected')
let rate = 0;
const optionsDOM = document.querySelectorAll('.u6rate')

optionsDOM.forEach(num => {
    num.addEventListener('click', function () {
        rate = this.innerHTML
        optionsDOM.forEach(btn => btn.classList.remove('u6active'));
        this.classList.add('u6active');
    });
})

u6submit.addEventListener('click', rateHandler)

function rateHandler() {
    if (rate === 0) {
        alert("Please rate us")
    }
    else {
        selectedRate.innerHTML = rate
        u6rating.style.display = "none";
        u6thanks.style.display = "block";
    }
}