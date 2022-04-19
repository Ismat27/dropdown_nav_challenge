const showBtn = document.querySelector('.hamburger')
const removeBtn = document.querySelector('.remove-nav')
const subNavs = document.querySelector('.sub-navs')
const supNavs = document.querySelectorAll('.sup-nav')
const navBar = document.querySelector('.navbar')
const heroImage = document.querySelector('.hero-image')

showBtn.addEventListener('click', ()=>{
    document.body.classList.add('overlay')
    navBar.classList.add('show-nav')
})

removeBtn.addEventListener('click', ()=>{
    document.body.classList.remove('overlay')
    navBar.classList.remove('show-nav')
})

supNavs.forEach(element => {
    const btn = element.querySelector('.sub-nav-toggle')
    btn.addEventListener('click', ()=> {
        element.classList.toggle('show-sub-navs')
    })
});

window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 800) {
        heroImage.src = "/images/image-hero-desktop2.png"
    }
    else {
        heroImage.src = "/images/image-hero-mobile.png"
    }
})

window.onload =  () => {
    if (window.innerWidth >= 800) {
        heroImage.src = "/images/image-hero-desktop2.png"
    }
    else {
        heroImage.src = "/images/image-hero-mobile.png"
    }
}
