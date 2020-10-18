var names = ["bag","banana","bathroom","boots","breakfast",
"bubblegum","chair","cthulhu","dog-duck","dragon","pen","pet-sweep","scissors","shark","sweep","tauntaun","unicorn","usb","water-can","wine-glass"] ;

var leftImage = document.getElementById("leftImage") ;

var rightImage = document.getElementById("rightImage") ;

var middleImage = document.getElementById("middleImage") ;







Product.all =[] ;

function Product (pName) {
this.productName = pName ;
this.imgsrc = `assets/${pName}`;
this.seen = 0 ;
this.votes =0  ;
Product.all.push(this) ;

}

/////////////////////////////////////////
for (var i = 0; i < names.length; i++) {
    new Product (names[i]);
  }
  
  console.log(Product.all);




  


var leftPro , middlePro , rightPro ,randomNumber ;

function render() {

}
rightPro = Product.all[randomNumber(0, Product.all.length - 1)];
middlePro = Product.all[randomNumber(0, Product.all.length - 1)];

console.log(middlePro) ;



leftImage.setAttribute('src', leftPro.imagePath);
leftImage.setAttribute('alt', leftPro.productName);
leftImage.setAttribute('title', leftPro.productName);

rightImage.setAttribute('src', rightPro.imagePath);
rightImage.setAttribute('alt', rightPro.productName);
rightImage.setAttribute('title', rightPro.productName);

middleImage.setAttribute('src', middlePro.imagePath);
middleImage.setAttribute('alt', middlePro.productName);
middleImage.setAttribute('title', middlePro.productName);





render();




var totalClicks = 0;


var imagesSection = document.querySelector('#imagesSection');
imagesSection.addEventListener('click', handleClickOnPro);

function handleClickOnPro(event) {

    console.log(event.target.id);
  
    if (totalClicks < 20 ) {
      if (event.target.id !== 'imagesSection') {
        totalClicks++;
        console.log(totalClicks);
        rightPro.seen++;
        leftPro.seen++;
        middlePro.seen++;
      }

     if (event.target.id==='leftImage')   
     {
        leftPro.votes++; }
        if (event.target.id==='rightImage'){

            rightPro.votes++;
        }
        if (event.target.id==='middleImage') {
        middlePro.votes++;


        }
      
        render(); 
      }
    




     else if (totalClicks=== 19) {

    renderSummary();
    console.log(totalClicks);
  }


}

function renderSummary() {
  imagesSection.removeEventListener('click',handleClickOnPro);
  console.log('you have finished 25 rounds already!!');
  var ulE1 = document.getElementById('finalResults');
  for(var i=0; i<Product.all.length; i++) {
    var liE = document.createElement('li');
    ulE1.appendChild(liE);
    
    liE.textContent = `${Product.all[i].productName} had ${Product.all[i].votes} votes and was seen ${Product.all[i].seen} times`;
  }
}


