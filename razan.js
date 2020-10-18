var names = ["bag","banana","bathroom","boots","breakfast",
"bubblegum","chair","cthulhu","dog-duck","dragon","pen","pet-sweep","scissors","shark","sweep","tauntaun","unicorn","usb","water-can","wine-glass"
    
  ];
  
  var leftImage = document.getElementById('leftImage');
  var rightImage = document.querySelector('#rightImage');
  var middleImage=document.getElementById('middleImage');
  
  console.log(leftImage);
  console.log(rightImage);
  
  
  Product.all = []; 
  
  function Product(pName) {
    this.productName = pName;//property
    this.imagePath = `assets/${pName}.jpg`;
    this.views = 0;
    this.votes = 0;
    Product.all.push(this);
  }
  
  
  for (var i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
  
  console.log(Product.all);
  
  
  
  var leftPro, rightPro, middlePro ;
  function render() {
    leftPro = Product.all[randomNumber(0, Product.all.length - 1)];
    rightPro = Product.all[randomNumber(0, Product.all.length - 1)];
    middlePro = Product.all[randomNumber(0, Product.all.length - 1)];
   
  
    leftImage.setAttribute('src', leftPro.imagePath);
    leftImage.setAttribute('alt', leftPro.productName);
    leftImage.setAttribute('title', leftPro.productName);
  
    rightImage.setAttribute('src', rightPro.imagePath);
    rightImage.setAttribute('alt', rightPro.productName);
    rightImage.setAttribute('title', rightPro.productName);

    middleImage.setAttribute('src', rightPro.imagePath);
    middleImage.setAttribute('alt', rightPro.productName);
    middleImage.setAttribute('title', rightPro.productName);





  }
  render();
  
  var totalClicks = 0;
  
  
  
  var imagesSection = document.querySelector('#imagesSection');
  imagesSection.addEventListener('click', handleClickonPro);
  
  function handleClickonPro(event) {
  
    console.log(event.target.id);
  
    if (totalClicks < 25) {
      if (event.target.id !== 'imagesSection') {
        totalClicks++;
        console.log(totalClicks);
        rightPro.views++;
        leftPro.views++;
        middlePro.views++;
  
        
  
        if (event.target.id === 'leftImage') {
          leftPro.votes++;
          
        }
        if (event.target.id === 'rightImage') {
          rightPro.votes++;
        }
        if(event.target.id === 'middleImage') {
          middlePro.votes++;
        }
  
        render();
      }
    } else if (totalClicks === 25){
      renderSummary();
      console.log(totalClicks);
    }
  
  }
  
  function renderSummary() {
    imagesSection.removeEventListener('click',handleClickonPro);
    console.log('you voted 25 times already!!');
    var ulE1 = document.getElementById('finalResults');
    for(var i=0; i<Product.all.length; i++) {
      var liE = document.createElement('li');
      ulE1.appendChild(liE);
      
      liE.textContent = `${Product.all[i].productName} has ${Product.all[i].votes} clicks and ${Product.all[i].seen} views`;
    }
  }
  
  
  // TODO unique images
  // (6) prevent having two exact images at the same time
  // (7) prevent images from repeating one right after the other
  
  
  //helper functions
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }