const solLua = document.querySelector('.sol-lua')

document.querySelector('.botao-tema').addEventListener('click', () => {
    document.body.classList.toggle('escuro')
    const atualRotacao = parseInt(getComputedStyle(solLua).getPropertyValue('--rotacao'))
    solLua.style.setProperty('--rotacao', atualRotacao + 180)
})