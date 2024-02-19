function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)

        deleteButton.addEventListener('click', () => deleteEmployee(idCell.textContent))
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
document.getElementById("b77").addEventListener("click" , function(){createEmployee()})

// TODO
// add event listener to delete button

// TODO
function createEmployee (){
  let t=document.getElementById("name").value
  let z=document.getElementById("id").value
  if(t===""||z===""){return}
  let nemployee={id:z,name:t}
  const link= fetch('http://localhost:3000/api/v1/employee',
  {
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    
    body:JSON.stringify(nemployee)
  })
  fetchEmployees()
}

// TODO
function deleteEmployee (ID){
  fetch('http://localhost:3000/api/v1/employee/' + ID, {
    method: 'DELETE',
  })
  setTimeout(() => {
    fetchEmployees();
  }, 10);
}



fetchEmployees()
