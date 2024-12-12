
let isblue = false;
const p = document.querySelector("#me");
if (p!=null)
{
    p.addEventListener('click', function(event)
    {
        const body = document.body;
        if (isblue)
        {
            body.classList.remove('change_background');
            body.classList.add('change_background_back');
        }
        else
        {
            body.classList.remove('change_background_back');
            body.classList.add('change_background');
        }
        isblue = !isblue;
        
    });
}

const table_b = document.getElementById("small_button_2");
if (table_b!=null)
{
    table_b.addEventListener('click', function(event)
    {
        const table = document.getElementById("lectures");
        if (table.classList.contains('hide_lectures'))
        {
            table.classList.remove('hide_lectures');
            table.classList.add('show_lectures');
        }
        else
        {
            table.classList.remove('show_lectures');
            table.classList.add('hide_lectures');
        }
    });
}

