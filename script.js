let departments =

[
    {
        name: "Human Resources HR"
    },
    {
        name: "Finance"
    },
    {
        name: "Maketing"
    },
    {
        name: "Sales"
    },
    {
        name: "Information Technology (IT)"
    },
    {
        name: "Customer Service"
    },
    {
        name: "Research and Development (R&D)"
    },
    {
        name: "Operations"
    }
]

let itemToDelete = ''

let htmlDepartment = ''

for (let i = 0; i < departments.length; i++) {
    htmlDepartment = htmlDepartment + `<div class="select-list-1">
    <div class="select">
        <div class="select-name">
            <p class="name-content">${departments[i].name}</p>
        </div>
        <div class="btn-seclect">
            <button class="edit">
                <p class="btn-title">Edit</p>
            </button>
            <button class="delete" onclick="deleteItemWindow('${departments[i].name}')">
                <p class="btn-title">Delete</p>
            </button>
        </div>
    </div>
    </div>`
    
}
// console.log (html)

document.getElementById('select-1').innerHTML = htmlDepartment


function closeWindow() {
    document.getElementById('window1').style.display = 'none'
}

function deleteItemWindow(itemIndex) {
    document.getElementById('window1').style.display = 'block'
    itemToDelete = itemIndex
}

function deleteItem() {
    departments = departments.filter((item, index) => {
        if (item.name !== itemToDelete) {
            return item
        }
    })
    console.log(departments);
    let upDatedHtml = ''
    for (let i = 0; i < departments.length; i++) {
        upDatedHtml = upDatedHtml + `<div class="select-list-1">
        <div class="select">
            <div class="select-name">
                <p class="name-content">${departments[i].name}</p>
            </div>
            <div class="btn-seclect">
                <button class="edit">
                    <p class="btn-title">Edit</p>
                </button>
                <button class="delete" onclick="deleteItemWindow('${departments[i].name}')">
                    <p class="btn-title">Delete</p>
                </button>
            </div>
        </div>
        </div>`
    }
   
    document.getElementById('select-1').innerHTML = upDatedHtml
    closeWindow()
}




