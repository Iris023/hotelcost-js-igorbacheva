const calculateBTN = document.querySelector("#calculateBTN");
calculateBTN.addEventListener("click", calculateAmount);

const buttonFood = document.querySelector("#addFood");
buttonFood.addEventListener("click", showFoodCost);

function showFoodCost(e) {
  e.preventDefault(); 
  food.style.display = "block";
  buttonFood.style.display = "none";
}

function calculateAmount(e) {
  e.preventDefault(); 
  const roomCost = document.querySelector("#room").value;
  const days = document.querySelector('#days').value;
  const adults = document.querySelector("#adults").value;
  const kids = document.querySelector("#kids").value;
  const foodPerPerson = document.querySelector("#food").value;

  if (roomCost === "" || adults === "" || isNaN(adults) || isNaN(days) || isNaN(kids)) {
    Swal.fire({
      icon: 'error',
      title: 'Ошибка!',
      text: 'Введите информацию'
    })
  }

  else if (room.options.selectedIndex == 1 && (adults < 1 || adults > 4)) {
    Swal.fire({
      icon: 'error',
      title: 'В этом номере может проживать от 1 до 4 взрослых',
      text: 'Если в Вашей компании более 4 взрослых - оформите несколько бронирований'
    })
  }

  else if (room.options.selectedIndex == 2 && adults > 2) {
    Swal.fire({
      icon: 'error',
      title: 'Неверно введено кол-во людей!',
      text: 'Слишком много взрослых проживающих для этого номера'
    })
  }

  else if (room.options.selectedIndex == 3 && adults > 2) {
    Swal.fire({
      icon: 'error',
      title: 'Неверно введено кол-во людей!',
      text: 'Слишком много взрослых проживающих для этого номера'
    })
  }

  else if (room.options.selectedIndex == 4 && adults > 1) {
    Swal.fire({
      icon: 'error',
      title: 'Неверно введено кол-во людей!',
      text: 'Слишком много взрослых проживающих для этого номера'
    })
  }

  else if (days < 1 || days > 30) {
    Swal.fire({
      icon: 'error',
      title: 'Неверно введено кол-во дней!',
      text: 'Расситать стоимость проживания можно от 1 до 30 дней'
    })
  }

  else {
    document.querySelector('#myAudio').play();
    const costForLiving = roomCost * days;
    const foodForAllPeople = (foodPerPerson * adults * days) + (0.5 * foodPerPerson * kids * days);
    const totalSum = costForLiving + foodForAllPeople;
    document.querySelector("#roomAmount").textContent = costForLiving;
    document.querySelector("#restaurantTotal").textContent = foodForAllPeople;
    document.querySelector("#totalSum").textContent = totalSum;
  }

}

