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

let aux = 0

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=stateHidden]')
    const ufValue = event.target.value

    const indexOfSelectateUf = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectateUf].text
    
    const url= `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.disabled=false

    if(ufValue && aux === 0){
        fetch(url)
        .then(res=>res.json())
        .then(cities=>{
            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }
        })
        aux ++
        console.log(aux)
    }else if(ufValue && aux>=1){
        citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
        fetch(url)
        .then(res=>res.json())
        .then(cities=>{
            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }
        })
    }
    else{
        citySelect.disabled = true
        citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
    }

}

document.querySelector("select[name=state]")
.addEventListener("change", getCities)