let btn = document.getElementById('btn');
let inb = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;

btn.onclick = function(){
    if(inp.value != '')
    {
        boxs[0].innerHTML += `
        <p class='item' draggable="true">${inp.value}<p/>
        `
        inp.value = '';
    }

    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart' , function(){
            drag = item;
            item.style.opacity = '0.2';
        })

         item.addEventListener('dragend' , function(){
            drag = null;
            item.style.opacity = '1';
        })
        boxs.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault()
                this.style.background = '#090';
                this.style.color = '#FFF';
            })
            box.addEventListener('dragleave', function(){
                this.style.background = 'aliceblue';
                this.style.color = 'rgb(43, 47, 50)';
            })

            box.addEventListener('drop', function(){
                box.append(drag)
                this.style.background = 'aliceblue';
                this.style.color = 'rgb(43, 47, 50)';
            })
        })
    })
}