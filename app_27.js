// app_27

const circleCursor = document.querySelector('body #container .circleCursor');

// function move circleCursor
function move(e){
    return `top:${e.clientY}px;left:${e.clientX}px;`;
};
// function scale circleCursor
function scale(){
    return 2.1;
};
// event mousemove in docuemnt
document.addEventListener('mousemove',function(e){
    circleCursor.style.cssText = move(e);
});
const aItems = document.querySelectorAll('body #container nav .list li');
aItems.forEach(function(item){
    item.children[0].addEventListener('mouseover',function(){
        document.documentElement.style.setProperty('--sizeScale','2.3');
        console.log('over');
    });
    item.children[0].addEventListener('mouseout',function(){
        document.documentElement.style.setProperty('--sizeScale','1');
        console.log('out');
    });
});
