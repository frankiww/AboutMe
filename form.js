//кнопки на карточках
const showButton = document.getElementById('showDialog');
const showButton2 = document.getElementById('showDialog2');
const showButton3 = document.getElementById('showDialog3');
//модальное окно
const favDialog = document.getElementById("favDialog");
//крестик
const closeButton = document.getElementById("close");
//открытие формы на кнопках
document.addEventListener("click", function(event)
{
    if (event.target.classList.contains("showDialog"))
    {
        form.reset();
        favDialog.showModal();
    }
});
closeButton.addEventListener("click", () =>{favDialog.close();
});


const form = document.getElementById("contactForm");
// объект, содержащий данные из формы
let formData = 
{
    name: '',
    email: '',
    number: '',
    date: '',
    comment: '',
    // метод для вывода данных
    printData: function()
    {
        console.log("Имя:", this.name);
        console.log("E-mail:", this.email);
        console.log("Телефон:", this.number);
        console.log("Дата:", this.date);
        console.log("Комментарий:", this.comment);
    }
}
// функция
function submitForm(event)
{
    event.preventDefault();
    // собираем данные и записываем в formData
    formData.name = form.elements["name"].value;
    formData.email = form.elements["email"].value;
    formData.number = form.elements["number"].value;
    formData.date = form.elements["date"].value;
    formData.comment = form.elements["comment"].value;
    // вывод данных
    formData.printData();
    
    const dialog = document.getElementById("favDialog");
    const dialog_2 = document.getElementById("thanks")
    dialog.close();
    dialog_2.showModal();
    const closeButton_2 = document.getElementById("close_2");
    closeButton_2.addEventListener("click", () =>{dialog_2.close();
    });

}

form.addEventListener("submit", submitForm);
