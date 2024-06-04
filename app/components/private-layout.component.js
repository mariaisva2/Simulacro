export function PrivateLayout($content, logic){
    document.getElementById('root').innerHTML = `
    <nav>
        <ul> 
         <li><a href="/tasks">Tasks</a></li>
         <li><a href="/users">Users</a></li>
         <li><a href="/logout">Logout</a></li>
        </ul>
    </nav>
    ${$content}`;
    
    logic()
}