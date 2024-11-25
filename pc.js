let cabeçalho = document.getElementsByTagName("nav")[0]
let rodape = document.getElementsByTagName('footer')[0]
let promocao = document.getElementsByTagName('h3')[0]
let preco = document.getElementsByClassName("preco")
let lua = document.getElementById('lua')
let sol = document.getElementById('sol')
let corpo = document.getElementsByTagName('body')[0]

/*btn de compras*/
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')

/*Eventos*/
lua.addEventListener('click', escuro)
sol.addEventListener('click', claro)
btn1.addEventListener('click', alterar1)
btn2.addEventListener('click', alterar2)
btn3.addEventListener('click', alterar3)
btn4.addEventListener('click', alterar4)
btn5.addEventListener('click', alterar5)
btn6.addEventListener('click', alterar6)
btn7.addEventListener('click', alterar7)
btn8.addEventListener('click', alterar8)
btn9.addEventListener('click', alterar9)
/*funções*/
function escuro() {
    corpo.style.background = '#212529'
    cabeçalho.style.background = '#00000091'
    rodape.style.background = '#00000091'
    promocao.style.background = '#00000091'
}

function claro() {
    corpo.style.background= "#fff"
    cabeçalho.style.background = '#1711CF'
    rodape.style.background = '#1711CF'
    promocao.style.background = '#1711CF'  
}

function alterar1(){
    btn1.style.background = "lightgreen"
    btn1.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar2(){
    btn2.style.background = "lightgreen"
    btn2.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar3(){
    btn3.style.background = "lightgreen"
    btn3.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar4(){
    btn4.style.background = "lightgreen"
    btn4.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar5(){
    btn5.style.background = "lightgreen"
    btn5.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar6(){
    btn6.style.background = "lightgreen"
    btn6.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar7(){
    btn7.style.background = "lightgreen"
    btn7.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar8(){
    btn8.style.background = "lightgreen"
    btn8.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

function alterar9(){
    btn9.style.background = "lightgreen"
    btn9.innerHTML = 'Comprado'
    alert('Sua compra foi realizada com sucesso!')
}

