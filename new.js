var firstimg = document.getElementById('firstimg');
var secondimg = document.querySelector('#secondimg');
var thirdimg = document.querySelector('#thirdimg');
var imagesSection = document.querySelector('.images');
var totalClicks = 0;
var names = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'];
    
    console.log(firstimg);
    console.log(secondimg);
    console.log(thirdimg);
    Images.all=[];
    function Images(imgName){
        this.imagename = imgName.split('.')[0];
        this.imagePath = `assets/${imgName}`;
        this.views = 0;
        this.clicks = 0;
  Images.all.push(this);
}
for (var i = 0; i < names.length; i++) {
    new Images(names[i]);
  
    
}
console.log(Images.all) ;

var firstone , secondone, thirdone;

function render(){
    do{
    //   do {
    //     leftPro = Product.all[randomNumber(0, Product.all.length - 1)];
    //     rightPro = Product.all[randomNumber(0, Product.all.length - 1)];
    //     middlePro = Product.all[randomNumber(0, Product.all.length - 1)];
       
      
    //     leftImage.setAttribute('src', leftPro.imagePath);
    //     leftImage.setAttribute('alt', leftPro.productName);
    //     leftImage.setAttribute('title', leftPro.productName);
      
    //     rightImage.setAttribute('src', rightPro.imagePath);
    //     rightImage.setAttribute('alt', rightPro.productName);
    //     rightImage.setAttribute('title', rightPro.productName);
    
    //     middleImage.setAttribute('src', middlePro.imagePath);
    //     middleImage.setAttribute('alt', middlePro.productName);
    //     middleImage.setAttribute('title', middlePro.productName);
    //     }
    // while( leftPro==middlePro || leftPro == rightPro || middlePro ==rightPro) ; 
     
    firstone = Images.all[randomNumber(0,Images.all.length -1)];
    secondone = Images.all[randomNumber(0,Images.all.length -1)];
    thirdone = Images.all[randomNumber(0,Images.all.length -1)];
    firstimg.setAttribute('src', firstone.imagePath);
    firstimg.setAttribute('alt', firstone.imagename);
    firstimg.setAttribute('title', firstone.imagename);

    secondimg.setAttribute('src', secondone.imagePath);
    secondimg.setAttribute('alt', secondone.imagename);
    secondimg.setAttribute('title', secondone.imagename);

    thirdimg.setAttribute('src', thirdone.imagePath);
    thirdimg.setAttribute('alt', thirdone.imagename);
    thirdimg.setAttribute('title', thirdone.imagename);}
    while(firstone===secondone || firstone===thirdone ||thirdone===secondone);
    console.log(firstone)
    console.log(secondone);
    console.log(thirdone);
// firstone.src=firstimg.imagePath;
// firstone.alt=firstimg.imagename;
// firstone.tittle=firstimg.imagename;

// secondone.src=secondimg.imagePath;
// secondone.alt=secondimg.imagename;
// secondone.tittle=secondimg.imagename;

// thirdone.src=thirdone.imagePath;
// thirdone.alt=thirdone.imagename;
// thirdone.tittle=thirdone.imagename;
firstimg.setAttribute('src', firstone.imagePath);
firstimg.setAttribute('alt', firstone.imagename);
firstimg.setAttribute('title', firstone.imagename);

secondimg.setAttribute('src', secondone.imagePath);
secondimg.setAttribute('alt', secondone.imagename);
secondimg.setAttribute('title', secondone.imagename);

thirdimg.setAttribute('src', thirdone.imagePath);
thirdimg.setAttribute('alt', thirdone.imagename);
thirdimg.setAttribute('title', thirdone.imagename);
}
render();
function randomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
}


imagesSection.addEventListener('click', handleClickonIMG);

function handleClickonIMG(event) {
// event.preventDefault();
  console.log(event.target.id);

  if (totalClicks < 20) {
    if (event.target.id !== 'imagesSection') {
      totalClicks++;
      console.log(totalClicks);
      firstone.views++;
      secondone.views++;
      thirdone.views++;

      
      if (event.target.id === 'firstimg') {
        firstone.clicks++;
      }
      if (event.target.id === 'secondimg') {
        secondone.clicks++;
      }
      if (event.target.id === 'thirdimg') {
        thirdone.clicks++;
      }
      getClicks();

render();
    }
    
  } else if (totalClicks === 20){
    renderSummary();
    createChartSummary();
    getImg();
    console.log(totalClicks);
  }
}
function renderSummary() {
    imagesSection.removeEventListener('click',handleClickonIMG);
    console.log('you voted 20 times already!!');
    var ulE1 = document.getElementById('finalResults');
    for(var i=0; i<Images.all.length; i++) {
      var liE = document.createElement('li');
      ulE1.appendChild(liE);
      liE.textContent = `${Images.all[i].imagename} has ${Images.all[i].clicks} clicks and ${Images.all[i].views} views`;
    }
  }
//lab12
function createChartSummary() {var clicksArr = [];
  var shownArr = [];
for(var i = 0; i<Images.all.length; i++){
  var totalResult = Images.all[i];
  clicksArr.push(totalResult.clicks);
  shownArr.push(totalResult.views);
}var ctx = document.getElementById('myChart').getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:["bag.jpg","banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg",
    "bubblegum.jpg","chair.jpg","cthulhu.jpg","dog-duck.jpg","dragon.jpg","pen.jpg","pet-sweep.jpg","scissors.jpg","shark.jpg","sweep.png","tauntaun.jpg","unicorn.jpg","usb.gif","water-can.jpg","wine-glass.jpg"
        
      ],
    datasets: [{
      label: '# of clicks',
      data: clicksArr,
      backgroundColor:
        'rgba(54, 162, 235, 0.2)',
      borderColor:
        'rgba(54, 162, 235, 1)',
      borderWidth: 2
    },
    {
      label: '# of Views',
      data: shownArr,
      backgroundColor:
        'rgba(255, 99, 132, 0.2)',
      borderColor:
        'rgba(255, 99, 132, 1)',
      borderWidth: 3
    }]
  },
  options: {
    scales: {

      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
}
// lab 13

function getImg() {
  var imagesString = JSON.stringify(Images.all);
  localStorage.setItem('Images', imagesString);
}

function secondTime() {

  var ImagesString = localStorage.getItem('Images');
  var ImagesARR = JSON.parse(ImagesString);
  if (ImagesARR) {
    Images.all=ImagesARR;
  }}
  console.log(Images.all);
  secondTime();
  /// second function
  function getClicks(){
    var clicksString = JSON.stringify(totalClicks);
    localStorage.setItem('clicks', clicksString);
  }

  function clicksSecond(){
    var clicksString =localStorage.getItem('clicks');
    var ClicksA =JSON.parse(clicksString);
    if (ClicksA){
      totalClicks=ClicksA;
    }
     
  }console.log(totalClicks);
  clicksSecond();