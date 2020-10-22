var names = ["bag.jpg","banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg",
"bubblegum.jpg","chair.jpg","cthulhu.jpg","dog-duck.jpg","dragon.jpg","pen.jpg","pet-sweep.jpg","scissors.jpg","shark.jpg","sweep.png","tauntaun.jpg","unicorn.jpg","usb.gif","water-can.jpg","wine-glass.jpg"
    
  ];
  var leftImage = document.getElementById('leftImage') ;
  var rightImage = document.getElementById('rightImage') ;
  var middleImage = document.getElementById('middleImage') ;

  Product.all = [];

  function Product (pName) {
      this.productName = pName ;
      this.imagePath = `assets/${pName}` ;
      this.seen = 0 ;
      this.votes = 0 ;

      Product.all.push(this) ;




  }

  for (var i =0 ; i <names.length ; i++ )  {
      new Product (names[i])  ;
  }               

  var leftPro , rightPro , middlePro ;

  function render ( ) {
do {
leftPro = Product.all[randomNumber(0 , Product.all.length -1)] ;
rightPro = Product.all[randomNumber(0 , Product.all.length -1)] ;
middlePro = Product.all[randomNumber(0 , Product.all.length -1)] ;


leftImage.setAttribute('src',leftPro.imagePath) ;
leftImage.setAttribute('alt', leftPro.productName);
leftImage.setAttribute('title', leftPro.productName);
  
rightImage.setAttribute('src',rightPro.imagePath) ;
rightImage.setAttribute('alt',rightPro.productName) ;
rightImage.setAttribute('title',rightPro.productName) ;

middleImage.setAttribute('src',middlePro.imagePath) ;
middleImage.setAttribute('alt',middlePro.productName) ;
middleImage.setAttribute('title',middlePro.productName) ;
}

while( leftPro==middlePro || leftPro == rightPro || middlePro ==rightPro) ; 

  






  }
render () ;

var totalClicks = 0 ;


var imagesSection = document.getElementById('imagesSection') ;
imagesSection.addEventListener('click', handleClickonPro) ;

function handleClickonPro (event) {

    if (totalClicks<25) {
if(event.target.id !== 'imagesSection') {
totalClicks++ ;
rightPro.seen++;
leftPro.seen++;
middlePro.seen++;


if(event.target.id==='leftImage'){
    leftPro.votes++;
}
if(event.target.id==='rightImage'){

rightPro.votes++;


}
if(event.target.id==='middleImage'){

    middlePro.votes++;

}
render();
}



} else if (totalClicks ===25) {
alert('You Already Voted 25!') ;

renderSum();



}



    }
    function renderSum (){
imagesSection.removeEventListener('click',handleClickonPro ) ;
var ul2 = document.getElementById('finalResults') ;

for (var i =0 ; i<Product.all.length ; i++)
{    
    var li = document.createElement('li') ;
    ul2.appendChild(li) ;
    
    li.textContent= `${Product.all[i].productName} has ${Product.all[i].votes } and ${Product.all[i].seen} seen ` ;

}
    }



    














////// final

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }