//search button
document.querySelector('[data-header-search]').addEventListener('click',
() => {
    document.getElementsByTagName("dialog")[1].style.display = "flex"
})

document.querySelector('[data-search-cancel]').addEventListener('click',
() => {
    document.getElementsByTagName("dialog")[1].style.display = "none"
})

//settings button
document.querySelector('[data-header-settings]').addEventListener('click',
() => {
    document.getElementsByTagName("dialog")[2].style.display = "flex"
})

document.querySelector('[data-settings-cancel]').addEventListener('click',
() => {
    document.getElementsByTagName("dialog")[2].style.display = "none"
})

//theme



//console.log(document.querySelector('[data-settings-theme]').getElementsByTagName("option")[0])