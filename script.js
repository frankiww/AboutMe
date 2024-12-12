//-----------------ПРАКТИКА 12-----------------------
function showMessage(message)
{
    console.log(message);
}

function changeBackgroundColor(color)
{
    //если ввели шестнадцатеричное значение
    if (/^[0-9a-fA-F]{6}$/.test(color))
    {
        color = `#${color}`
    }
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector)
{
    const element = document.querySelector(selector);
    const currentDisplay = window.getComputedStyle(element).display;
    if (currentDisplay === "none")
    {
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
}
function toggleVisibility_t(selector)
{
    const element = document.querySelector(selector);
    const currentDisplay = window.getComputedStyle(element).display;
    if (currentDisplay === "none")
    {
        element.style.display = "table";
    }
    else
    {
        element.style.display = "none";
    }
}

function find_url()
{
    const currentUrl = new URLSearchParams(window.location.search);
    const utm = currentUrl.get("utm_term");
    const h2 = document.querySelector("h2");
    if (utm) 
    {
        h2.textContent = utm;
    }
}

function logCurrentTime()
{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    console.log(`${h}:${m}:${s}`);
}

function resetBackgroundColor()
{
    document.body.style.backgroundColor = "white";
}
// showMessage("Скрипт загружен!");
// logCurrentTime();
// resetBackgroundColor();
// document.addEventListener('DOMContentLoaded', changeBackgroundColor("lightblue"));
// document.addEventListener('DOMContentLoaded', toggleVisibility(".content"));
// document.addEventListener('DOMContentLoaded', toggleVisibility(".content"));


//-----------------ПРАКТИКА 13-----------------------

const h1 = document.querySelector('h2');
if (h1!=null)
{
    h1.addEventListener('click', function(event)
    {
        alert("Вы кликнули на заголовок - так держать!");
    });
}


const btn = document.getElementsByClassName("small_button");
const table_button = btn[0];
if (table_button!=null)
{
    table_button.addEventListener('click', function(event)
    {
        toggleVisibility_t("#seminars1");
        toggleVisibility_t("#seminars2");
    });
}

const photo = document.getElementById("mainphoto");
if (photo!=null)
{
    photo.addEventListener("mouseover", function(event)
    {
        photo.style.width = "40%";
    });
    photo.addEventListener("mouseout", function(event)
    {
        photo.style.width = "30%";
    });
    photo.addEventListener("click", function(event)
    {
        toggleVisibility("#mainphoto");
        toggleVisibility("#mainphoto2");

    });
    photo.addEventListener("dblclick", function(event)
    {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
}
const photo2 = document.getElementById("mainphoto2");
if (photo2!=null)
{
    photo2.addEventListener("mouseover", function(event)
    {
        photo2.style.width = "40%";
    });
    photo2.addEventListener("mouseout", function(event)
    {
        photo2.style.width = "30%";
    });
    photo2.addEventListener("click", function(event)
    {
        toggleVisibility("#mainphoto");
        toggleVisibility("#mainphoto2");

    });
    photo2.addEventListener("dblclick", function(event)
    {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
}









