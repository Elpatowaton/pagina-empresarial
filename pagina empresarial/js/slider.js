(function(){
  
  const sliders = [...document.querySelectorAll('.testimony_body')];
  const buttonNext = document.querySelector('#next');
  let value;
  
  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });
  
  buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
  });
  
  const changePosition = (add)=>{
    const currentTestimony = document.querySelector('testimony_body--show').dataset.id
    value = Number(currentTestimony);
    value+= add;
    
    console.log(value);
  }

