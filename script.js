const btnCadastrar = document.querySelector('.btn-primary');

function cadastrar(event){
    event.preventDefault();
    const tarefa = document.querySelector('#tarefa');
    let linha = `
      <tr>
        <td><input class="form-check-input" type="checkbox" value="" onclick="taxar(this)"></td>
        <td class="task">${tarefa.value}</td>
        <td><button onclick="deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button></td>
      </tr>
    `;
    const lista = document.querySelector('#lista');
    lista.innerHTML = lista.innerHTML + linha;
    tarefa.value='';
  }
  
  function taxar(checkbox) {
    const task = checkbox.parentNode.nextElementSibling;
    if (checkbox.checked) {
      task.classList.add('completo');
    } else {
      task.classList.remove('completo');
    }
  }
  

  btnCadastrar.addEventListener('click', cadastrar); 

function deletar(registro){
    registro.remove();       
}



