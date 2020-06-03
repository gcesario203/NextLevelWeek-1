const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const modalA = document.querySelector('#modal .header a')

buttonSearch.addEventListener('click',
()=>modal.classList.remove('hide'))

modalA.addEventListener('click',
()=>modal.classList.add('hide'))
