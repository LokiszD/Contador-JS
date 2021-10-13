function contar(){

    var initxt = window.document.querySelector('[name=iniciotxt]').value
    var ini = Number(initxt) //n1
    var fimtxt = window.document.querySelector('[name=fimtxt]').value
    var fim = Number(fimtxt) //n2
    var ptxt = window.document.querySelector('[name=passotxt]').value
    var passo = Number(ptxt) //n3
    var res = window.document.getElementById('resposta') //resposta

    res.innerHTML = `<p>Contando...</p>`

    if(ini >= fim || ini == null || fim == null){
        window.alert('[ERRO] INICIO ou FIM inválidos, tente outra vez')
        window.location.reload()
    }else if(passo <= 0 || passo >= fim || passo == null){
        window.alert('[ERRO] PASSO inválido, tente outra vez')
        window.location.reload()
    }else{
        for(let i = ini; i <= fim; i += passo){
            res.innerHTML += `${i} \u{27A1}	 `
        }
    }

    res.innerHTML += `\u{2705}`

}