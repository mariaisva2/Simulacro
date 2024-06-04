import { navigateTo } from "../../Router"

export function LoginPage(){
    const root = document.getElementById('root')
    root.innerHTML = `
    <form>
   
    <input type="email" autocomplete="username"/>
    <input type="password" autocomplete="current-password"/>
    <button type="submit">Iniciar sesion</button>
</form>
    `
    //Lógica
    const $loginFrom = document.getElementsByTagName('form')[0]
    $loginFrom.addEventListener('submit', async (e) => {
        e.preventDefault()

       
        const $userEmail = document.getElementsByTagName('input')[1]
        const $userPassword = document.querySelector('[type="password"]')
    

        if(!$userEmail.value || !$userPassword.value){
            alert("Todos los campos son requeridos")
        }
        //fetch
        const usersFetched = await fetch('http://localhost:300/users')
            
    if(!userCreated.ok){
        alert('Error al iniciar sesión')
        return
    }
   const usersToJson = await usersFetched.json()
   const userFound = usersToJson.find(user => user.email === $userEmail.value)

   if(!userFound) {
    alert('Usuario no encontrado')
    return
   }

   if(descrytData(userFound.password) !== $userPassword.value){
    console.log("Contraseña incorrecta")
    return;
   }
const token = Math.random().toString(36).substring(2)
localStorage.setItem('token', token)
navigateTo('/tasks')

   
    })
}