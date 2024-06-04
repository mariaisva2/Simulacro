import { navigateTo } from '../../Router'
export function RegisterPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <form>
        <input type="text" placeholder="Jhon Doe"/>
        <input type="email" autocomplete="username"/>
        <input type="password" autocomplete="current-password"/>
        <button type="submit">Crear usuario</button>
    </form>`

    //Aplicamos la lógica
    const $createUserFrom = document.getElementsByTagName('form')[0]
    $createUserFrom.addEventListener('submit', e => {
        e.preventDefault()

        const $userName = document.querySelector('[type="text"]')
        const $userEmail = document.getElementsByTagName('input')[1]
        const $userPassword = document.querySelector('[type="password"]')

        if(!$userName.value || !$userEmail.value || !$userPassword.value){
            alert("Todos los campos son requeridos")
        }
        //fetch
        const userCreated = fetch('http://localhost:300/users',{
        method:'POST',
        headers: {
            'Content-Type': 'aplication/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            name: $userName.value,
            email: $userEmail.value,
            password: $userPassword.value
        })
    })

    if(!userCreated.ok){
        alert('Error al crear el usuario')
        return
    }
    alert('Usuario creado')
    navigateTo('/login')
    })
}