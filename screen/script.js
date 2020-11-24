//Это 6 градусов. Юзаются в минутах и секундах, потому что 360/60
const deg = 6;
//Получаем элементы со страницы
let hr = document.getElementById('hr');
let mm = document.getElementById('mm');
let sc = document.getElementById('sc');


function time() {
    //получаем full дату
    let date = new Date();
    //Получаем часы и умножаем на 30 градусов(в итоге получаем цифру в градусах(360/12))
    let hours = date.getHours() * 30;
    //Получаем минуты и умнажаем на 6 градусов(в итоге получаем цифру в градусах)
    let minutes = date.getMinutes() * deg;
    //Получаем скунды и умнажаем на 6 градусов
    let sec = date.getSeconds() * deg;

    //трансформация(поворот). Deg это как 1%
    //Закидываюм в градусах часы и прибавляем 5 градусов за минуту
    hr.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`
    //тут всё проще, сразу передаём градусы
    mm.style.transform = `rotateZ(${(minutes)}deg)`
    sc.style.transform = `rotateZ(${(sec)}deg)`
}

//С помощью этого минусуем баг
time()

//Делаем что-то типо цикла, чтобы каждую секунду происходило обновление
setInterval(time, 1000)