let step = 0;

const exibirTitulo = (id) => {
    document.getElementById(id).style.display = 'flex';
}

const esconderTitulo = (id) => {
    document.getElementById(id).style.display = 'none';
}

const deslizarEsquerda = (id, deslocamento) => {
    if (step < 1200) {
        step += deslocamento;
        document.getElementById(id).style.marginRight = String(step) + 'px';
    } else {
        return;
    }
    console.log(step);
}

const deslizarDireita = (id, deslocamento) => {
    if (step > -800) {
        step -= deslocamento;
        document.getElementById(id).style.marginRight = String(step) + 'px';
    } else {
        return;
    }
    console.log(step);
}