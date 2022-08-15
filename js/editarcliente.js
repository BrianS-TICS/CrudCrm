import { consultarCliente, actualizarCliente} from './API.js';
import { validaObjCliente, mostrarAlerta } from './funciones.js';

(function () {

    document.addEventListener('DOMContentLoaded', () => {
        const parametrosUrl = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosUrl.get('id'));

        // Muestra cliente en pantalla
        mostrarCliente(idCliente);
        
        //Al precionar guardar cambios
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validaFormulario);
    });

    async function mostrarCliente(idCliente) {

        const cliente = await consultarCliente(idCliente);
        const { nombre, email, telefono, empresa, id} = cliente;
        
        document.querySelector('#nombre').value = nombre;
        document.querySelector('#email').value = email;
        document.querySelector('#telefono').value = telefono;
        document.querySelector('#empresa').value = empresa;
        document.querySelector('#id').value = id;
    }
    
    async function validaFormulario(e){
        e.preventDefault();
    
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        const id = parseInt(document.querySelector('#id').value);
    
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id
        }
    
        if (validaObjCliente(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        
        console.log(cliente);
        actualizarCliente(cliente);
    }

})();

