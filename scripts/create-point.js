function populateUf(){
    const stateSelect = document.querySelector('select[name=state]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res=>res.json())
    .then(states=>{
        for(const state of states){
            stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
    .then()
}

populateUf()

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=stateHidden]')
    const ufValue = event.target.value

    const indexOfSelectateUf = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectateUf].text

    const url= `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.disabled=false

    if(ufValue){
        citySelect.innerHTML = `<option value="">Selecione a cidade</option>`

        fetch(url)
        .then(res=>res.json())
        .then(cities=>{
            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
        })
    }else{
        citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
        citySelect.disabled = true
    }

}

document.querySelector("select[name=state]")
.addEventListener("change", getCities)

const itemsToCollect = document.querySelectorAll('.items-grid li')

for(item of itemsToCollect){
    item.addEventListener('click',handleSelectedItem)
}

const collectedItems=document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")


    const itemId = event.target.dataset.id
    const alreadySelected = selectedItems.findIndex(item=>item==itemId)

    if(alreadySelected>=0){
        const filteredItems = selectedItems.filter(item=>{
            const itemIsDifferent = item!=itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
}