const url = 'http://localhost:4000/clientes';

// Crea un nuevo cliente en la api
export const nuevoCliente = async cliente => {
    try {

        // Envio de informacion usando
        // POST
        // Y enviendo cliente como string
        // especificando que sera texto con application/json
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}
// Obtiene todos los clientes de la api
export const consultaClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();

        return clientes;
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method : 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

// Consulta cliente por id
export const consultarCliente = async (id) => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza cliente por id

export const actualizarCliente =  async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method : 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
};