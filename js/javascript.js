'use strict';
/* Blur-эффект на карточках */
let bttnGarden = document.querySelector('.services__content__top__button1 button');
let bttnLawn = document.querySelector('.services__content__top__button2 button');
let bttnPlanting = document.querySelector('.services__content__top__button3 button');
let service1 = document.querySelector('.services__item1'),
    service2 = document.querySelector('.services__item2'),
    service3= document.querySelector('.services__item3'),
    service4 = document.querySelector('.services__item4'),
    service5 = document.querySelector('.services__item5'),
    service6 = document.querySelector('.services__item6');

function checkedBttn() {
  if (bttnPlanting.classList.contains('activated') && bttnLawn.classList.contains('activated') && bttnGarden.classList.contains('activated')) {
    service1.className = 'services__item1';
    service2.className = 'services__item2';
    service3.className = 'services__item3';
    service4.className = 'services__item4';
    service5.className = 'services__item5';
    service6.className = 'services__item6';
    bttnGarden.className = 'default';
    bttnLawn.className = 'default';
    bttnPlanting.className = 'default';
    bttnGarden.className;
    bttnLawn.className;
    bttnPlanting.className;
    service1.className;
    service2.className;
    service3.className;
    service4.className;
    service5.className;
    service6.className;
  } 
}

/* Check bttns functions */ 
function checkFirstandSecbttn() {
  if (bttnGarden.classList.contains('activated') && bttnLawn.classList.contains('activated')) {
    service1.className = 'services__item1';
    service5.className = 'services__item5';
    service3.className = 'services__item3';
    service1.className;
    service3.className;
    service5.className
  }
}

function checkSecandThirdbttn() {
  if (bttnLawn.classList.contains('activated') && bttnPlanting.classList.contains('activated')) {
    service2.className = 'services__item2';
    service3.className = 'services__item3';
    service2.className;
    service3.className;
  }
}

function checkFirstandThirdbttn() {
  if (bttnGarden.classList.contains('activated') && bttnPlanting.classList.contains('activated')) {
    service1.className = 'services__item1';
    service2.className = 'services__item2';
    service4.className = 'services__item4';
    service5.className = 'services__item5';
    service6.className = 'services__item6';
    service1.className;
    service2.className;
    service4.className;
    service5.className
    service6.className
  }
}

/* Gardens */
bttnGarden.addEventListener('click', function addClasses() {
  if (service1.classList.contains('services__item1__blur') && service5.classList.contains('services__item1__blur')) {
    service1.className = 'services__item1';
    service5.className = 'services__item5';
    service1.className;
    service5.className;
  }
  bttnGarden.className = 'activated';
  service2.className = 'services__item2__blur';
  service3.className = 'services__item3__blur';
  service4.className = 'services__item1__blur';
  service6.className = 'services__item1__blur';
  bttnGarden.className;
  service2.className;
  service3.className;
  service4.className;
  service6.className;
  checkedBttn();
  checkFirstandSecbttn();
  checkFirstandThirdbttn();
});

/* Lawn */
bttnLawn.addEventListener('click', function addClassesForLawn() {
  if (service3.classList.contains('services__item3__blur')) {
    service3.className = 'services__item3';
    service3.className;
  }
  bttnLawn.className = 'activated';
  service1.className = 'services__item1__blur';
  service2.className = 'services__item2__blur';
  service4.className = 'services__item1__blur';
  service5.className = 'services__item1__blur';
  service6.className = 'services__item1__blur';
  bttnLawn.className;
  service1.className;
  service2.className;
  service4.className;
  service5.className;
  service6.className;
  checkedBttn();
  checkFirstandSecbttn();
  checkSecandThirdbttn();
})

/* Planting */
bttnPlanting.addEventListener('click', function addClassesForPlanting() {
  if (service2.classList.contains('services__item2__blur') && service4.classList.contains('services__item1__blur') && service6.classList.contains('services__item1__blur')) {
    service2.className = 'services__item2';
    service4.className = 'services__item4';
    service6.className = 'services__item6';
  }
  bttnPlanting.className = 'activated';
  bttnPlanting.className;
  service1.className = 'services__item1__blur';
  service3.className = 'services__item3__blur';
  service5.className = 'services__item1__blur';
  service1.className;
  service3.className;
  service5.className;
  checkedBttn();
  checkSecandThirdbttn();
  checkFirstandThirdbttn();

})

/* Checking for all accordions */
function checkedSecAndThirdAccordion() {
  if (procaredButton.classList.contains('choise3_show') && standardButton.classList.contains('choise2_show')) {
    standardButton.classList.toggle('choise2_show');
    procaredButton.classList.toggle('choise3_show');
  }
}

function checkedFirstAndThirdAccordion() {
  if (basicsButton.classList.contains('choise1_show') && procaredButton.classList.contains('choise3_show')) {
    basicsButton.classList.toggle('choise1_show');
    procaredButton.classList.toggle('choise3_show');
  }
}

function checkedSecAndFirstAccordion() {
  if (basicsButton.classList.contains('choise1_show') && standardButton.classList.contains('choise2_show')) {
    basicsButton.classList.toggle('choise1_show');
    standardButton.classList.toggle('choise2_show');
  }
}



/* Accordion button 1 */ 
let basicsButton = document.querySelector('.choise1');

basicsButton.addEventListener('click', function showBlock () {
  if (basicsButton.classList.contains('choise1') !== basicsButton.classList.contains('choise1_show')) {
    basicsButton.classList.toggle('choise1_show'); 
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  } else if (basicsButton.classList.contains('choise1_show')) {
    basicsButton.className = 'choise1';
    basicsButton.className;
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  }
});


/* Accordion button 2 */ 
let standardButton = document.querySelector('.choise2');

standardButton.addEventListener('click', function showBlock () {
  if (standardButton.classList.contains('choise2') !== standardButton.classList.contains('choise2_show')) {
    standardButton.classList.toggle('choise2_show');
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  } else if (standardButton.classList.contains('choise2_show')) {
    standardButton.className = 'choise2';
    standardButton.className;
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  }
});

/* Accordion button 3 */ 
let procaredButton = document.querySelector('.choise3');

procaredButton.addEventListener('click', function showBlock () {
  if (procaredButton.classList.contains('choise3') !== procaredButton.classList.contains('choise3_show')) {
    procaredButton.classList.toggle('choise3_show');
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  } else if (procaredButton.classList.contains('choise3_show')) {
    procaredButton.className = 'choise3';
    procaredButton.className;
    checkedSecAndThirdAccordion();
    checkedFirstAndThirdAccordion();
    checkedSecAndFirstAccordion();
  }
});

/* Accordion не закрывается по клику на order */
let orderBttn = document.querySelectorAll('.order');
orderBttn[0].addEventListener('click', (e) => {
  if (e.target && basicsButton.classList.contains('choise1_show')) {
    basicsButton.classList = 'choise1';
    basicsButton.classList;
  }
});

orderBttn[1].addEventListener('click', (e) => {
  if (e.target && standardButton.classList.contains('choise2_show')) {
    standardButton.classList = 'choise2';
    standardButton.classList;
  }
});

orderBttn[2].addEventListener('click', (e) => {
  if (e.target && procaredButton.classList.contains('choise3_show')) {
    procaredButton.classList = 'choise3';
    procaredButton.classList;
  }
});

// Contacts //
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');
  let svg4 = document.querySelector('.svg4');
  let mainBttn = document.querySelector('.contacts__city');
  let Canandaigua = document.querySelector('.selected__city__Canandaigua');
  let NY = document.querySelector('.selected__city__NY');
  let Yonkers = document.querySelector('.selected__city__Yonkers');
  let Sherill = document.querySelector('.selected__city__Sherrill');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)});

  selectItem.forEach(item => {
    item.addEventListener('click', selectedItem)});

  selectHeader[0].addEventListener('click', rotateSvg4);

  mainBttn.addEventListener('click', toogleCity, {once: false});

  function selectToggle() {
    this.parentElement.classList.toggle('select__is-active');
    Canandaigua.classList.remove('selected__city__Canandaigua-active');
    Canandaigua.classList.add('selected__city__Canandaigua');
    NY.classList.remove('selected__city__NY-active');
    NY.classList.add('selected__city__NY');
    Yonkers.classList.remove('selected__city__Yonkers-active');
    Yonkers.classList.add('selected__city__Yonkers');
    Sherill.classList.remove('selected__city__Sherrill-active');
    Sherill.classList.add('selected__city__Sherrill');
  }

  function selectedItem() {
        let text = this.innerText,
        select = this.closest('.selectCity'),
        currentText = select.closest('.selectCity').querySelector('.select__current');
        
    currentText.innerText = text;
    select.classList.remove('select__is-active');

    function showBlock() {
      if (text == 'Canandaigua, NY') {
        Canandaigua.classList.remove('selected__city__Canandaigua');
        Canandaigua.classList.add('selected__city__Canandaigua-active');
      } else if (text == 'New York City') {
        NY.classList.remove('selected__city__NY');
        NY.classList.add('selected__city__NY-active');
      } else if (text == 'Yonkers, NY') {
        Yonkers.classList.remove('selected__city__Yonkers');
        Yonkers.classList.add('selected__city__Yonkers-active');
      } else if (text == 'Sherrill, NY') {
        Sherill.classList.remove('selected__city__Sherrill');
        Sherill.classList.add('selected__city__Sherrill-active');
      }
    }

    showBlock();

  }

  function rotateSvg4() {
    svg4.classList.toggle('svg4_is-active');
  }

  function toogleCity () {
    mainBttn.classList.remove('contacts__city');
    mainBttn.classList.add('contacts__city_is-active');
  }

  
}

select ();














