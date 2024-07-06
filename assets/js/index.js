const headerCode = document.querySelector('#headerCode')
const body1 = document.querySelector('#body1')
const body2 = document.querySelector('#body2')
const body3 = document.querySelector('#body3')
const body4 = document.querySelector('#body4')
document.querySelector('#code').addEventListener('keyup', (e) => {
    headerCode.innerHTML = 'JavaScript Key Code ' + e.keyCode
    e.target.innerText = e.keyCode
    body1.innerHTML = e.key
    body2.innerHTML = e.location
    body3.innerHTML = e.code
    body4.innerHTML = e.which
})