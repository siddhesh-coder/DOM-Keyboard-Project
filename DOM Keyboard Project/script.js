const insert = document.getElementById('class'); //you can also use document.querySelector

window.addEventListener('keydown', (e)=>{
   insert.innerHTML =
   `
   <div>
     <table>
        <tr>
          <th>Key</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'space' : e.key}</td>
          <td>${e.code}</td>
        </tr>
     </table>
   </div>`;
});