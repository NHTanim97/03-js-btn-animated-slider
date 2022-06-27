
    // -------------
    let image = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
    let index = 0;
    let imgLength = image.length;

    let myImg = document.getElementById('myImg');

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');


    // ---next btn
    next.addEventListener('click', ()=>{
        index++;

        if(index >= imgLength){
            index = 0;
            myImg.src = image[index]
        }
        else{
            myImg.src = image[index]
        }
    });



    // ---prev btn
    prev.addEventListener('click', ()=>{
        index--;

        if(index < 0){
            index = imgLength -1;
            myImg.src = image[index]
        }
        else{
            myImg.src = image[index]
        }
    })