let locals = localStorage;
let nondu;
let table = document.getElementById('table table-striped');
let addButton = document.getElementById('add_book');
let count = 1;

addButton.addEventListener('click', function(){
    getInfo();
})



function getInfo(){
    let bname = document.getElementById('book').value;
    let authorn = document.getElementById('author').value;
    let type = document.getElementsByClassName('type1');
    
    if (bname === '' || authorn === '' || type === ''){
        console.log('Invlid input'); 
        return false;
    }
    

    let checked;
    Array.from(type).forEach(ell=>{
       if (ell.checked==true){
        checked = ell.value;
       }
    })
    addToLocal(bname, authorn, checked);
    // addInfo();
}


var local_counts;
function addToLocal(name, author, checked){
    local_counts = locals.length+1;
    console.log(locals.length)
    let a = [name, author, checked];
    c = 0;
    locals.setItem(local_counts, JSON.stringify(a));
    local_counts ++;
    addInfo();  
}


function addInfo(){
    let tra = document.getElementsByClassName('tr1');
    if(tra != null){
        Array.from(tra).forEach(ar=>{
            console.log('hi');
            ar.remove();
        })
    }
    
    let keys = Object.keys(locals);
    keys.sort().forEach(el=>{
        let tr = table.insertRow();
        tr.className = 'tr1';
        item = JSON.parse(locals.getItem(el));
        // console.log(item, typeof(item));

        item.forEach(ell=>{
            let cl = tr.insertCell();
            cl.innerHTML = ell;
        })
    })
    
    

}
addInfo();


