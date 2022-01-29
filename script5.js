let userCardNumber = prompt('Введите номер Вашей карты : ');

document.write(`Последние 4 цифры Вашей карты : ${userCardNumber.replace(userCardNumber.slice(0, -4), "************")}`);