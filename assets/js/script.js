document.querySelector('#push').onclick = function(){
    if(document.querySelector('#additem').value.length == 0){
        alert("Enter Task Name!!!!")
    }

    else{
    
        document.querySelector('.items').innerHTML += `
           
                <div class="item d-flex justify-content-between bg-light p-2 rounded-2 mb-3">
           
             <p class="m-2">
                ${document.querySelector('#additem').value}
                </p>
          <span>

                <button type="button" class="btn btn-success" id="done"><i class="fa-regular fa-circle-check"></i></button>
            <button type="button" class="btn btn-danger" id="remove"><i class="fa-regular fa-circle-xmark text-white"></i></button>
   </span>
        </div>
        `;
     
        let remove = document.querySelectorAll("#remove");
        for(let i=0; i<remove.length; i++){
            remove[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }
     
        let done = document.querySelectorAll("#done");
        for(let i=0; i<done.length; i++){
            done[i].onclick = function(){
                let line = this.parentNode.parentNode.firstElementChild;
                if (line.style.textDecoration === 'line-through') {
                    line.style.textDecoration = 'none';
                } else {
                    line.style.textDecoration = 'line-through';
                }
            }
            }
        }
        
    
    document.querySelector('#additem').value="";
}
