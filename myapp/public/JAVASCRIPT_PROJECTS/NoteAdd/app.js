let add_button = document.querySelector('.panel button');
let html;
let NoteNumber = 1;
add_button.addEventListener('click', function(e){
    let text = document.getElementById('enter').value;
    let grid = document.querySelector('.gridi');
    let ahtml = '<div class="card" id="crd"><h4> Note'+NoteNumber+'</h4><p id="note1">'+text+'</p><button class="del">Delete Note</button></div>'
    let card = document.getElementById('crd');
    if(card != null){
        card.style.setProperty('width', '150px');
    }
    
    console.log(card);
    if(typeof(html) == 'undefined'){
        html = ahtml;
    }
    else{
        html +=  ahtml;
    }

    
    grid.innerHTML = html
    NoteNumber ++;
    let delbutton = grid.getElementsByClassName('del');
    Array.from(delbutton).forEach(elem=>{
        elem.addEventListener('click', function(evv){
            del(evv.target);
        })
    })
    })

function del(ev){
    let parent = ev.parentElement;
    parent.remove();
}

function show(){
    console.log('helo you click')
    
}


