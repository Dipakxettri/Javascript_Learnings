const titile = document.querySelector('#title');
const cName = document.querySelector('#channel-name');
const viewsF = document.querySelector('#views');
const timeF = document.querySelector('#time');

const changeContent = (title, channelN, views, time) => {
    titile.innerHTML = title;
    cName.innerHTML = channelN;
    viewsF.innerHTML = views;
    timeF.innerHTML = time;
}

changeContent("Create house in Blender", "CODEIPAK", "20k", "30:30");