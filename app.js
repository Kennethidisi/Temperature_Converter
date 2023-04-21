
let convert = document.querySelector('.convert_btn')
let result_div = document.querySelector('.result-div')

convert.addEventListener('click', (event)=>{
    event.preventDefault();

    let frm = document.querySelector('.frm_scale').value
    let to = document.querySelector('.to_scale').value
    let input_value = document.querySelector('.input_value').value
    let result = document.querySelector('.result')

    if(input_value == ""){
        document.querySelector('.input_value').classList.add('error');
        setInterval(()=>{
            document.querySelector('.input_value').classList.remove('error');
        },1000)
    }else{
        result_div.style.display = "flex"
        result.innerHTML= ''

        
    if(frm === 'C' && to === 'K'){
        let ans = Number(input_value) + 273
        ans = ans.toFixed(2)
        result.innerHTML = ans + 'K'
    }else if(frm === 'C' && to === 'C'){
        let ans = Number(input_value) * 1
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℃'
    }else if(frm === 'C' && to === 'F'){
        let ans = (9/5) * Number(input_value) + 32
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℉'
    }else if(frm === 'K' && to === 'K'){
        let ans = Number(input_value) * 1
        ans = ans.toFixed(2)
        result.innerHTML = ans + 'K'
    }else if(frm === 'K' && to === 'C'){
        let ans = Number(input_value) - 273
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℃'
    }else if(frm === 'K' && to === 'F'){
        let ans = (9/5) * (Number(input_value) - 273) + 32
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℉'
    }else if(frm === 'F' && to === 'F'){
        let ans = Number(input_value) * 1
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℉'
    }else if(frm === 'F' && to === 'C'){
        let ans = (5/9) * (Number(input_value) - 32) 
        ans = ans.toFixed(2)
        result.innerHTML = ans + '℃'
    }else if(frm === 'F' && to === 'K'){
        let ans = (5/9) * (Number(input_value) - 32) + 273
        ans = ans.toFixed(2)
        result.innerHTML = ans + 'K'
    }else if(frm === "" && to === ""){
        result_div.style.display = "none"
    }
    }

    
})