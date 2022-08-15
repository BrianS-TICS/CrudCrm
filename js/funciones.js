export function mostrarAlerta(mensaje) {

    const formulario = document.querySelector('#formulario');
    const error = document.querySelector('#formulario .error');

        if (!error) {
            const alerta = document.createElement('div');
            alerta.textContent = mensaje;
            alerta.classList.add('py-3', 'px-5', 'bg-red-400', 'text-white', 'mt-5', 'text-center', 'uppercase', 'font-bold', 'error');
    
            formulario.appendChild(alerta);
            setTimeout(() => {
                alerta.remove();
            }, 3000);        
        }

}

// Object.values() - Despliega todos los elementos de un objeto
    // every(input => input !== '') - Busca en cada uno de los campos
    
export function validaObjCliente(obj) {
    return !Object.values(obj).every(input => input !== '');
}