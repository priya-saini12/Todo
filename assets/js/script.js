document.querySelector('#push').onclick = function(){
    if(document.querySelector('#additem').value.length == 0){
        document.getElementById("error").innerHTML="*Enter Task!!";
    }
    else{
        let a = document.querySelector('.items');
        a.insertAdjacentHTML('afterend',`
           
                <div class="item d-flex justify-content-between bg-light rounded-2 mb-3">
           
             <p class="mt-2">
                ${document.querySelector('#additem').value}
                </p>
          <span class="mt-1">

                <button type="button" class="btn btn2" id="done"><i class="fa-regular fa-circle-check fa-xs text-white"></i></button>
            <button type="button" class="btn btn3" id="remove"><i class="fa-regular fa-circle-xmark fa-xs text-white"></i></button>
   </span>
        </div>
        `);
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
            document.getElementById("error").innerHTML="";
        }
    document.querySelector('#additem').value="";
}