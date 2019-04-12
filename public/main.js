function wysun(){
    
    var menu = document.querySelector('.side-menu');
    menu.classList.add('on-wrap');
    var sidebar = document.querySelector('.sidebar');
    sidebar.setAttribute('style','left: 0px');
    var button = document.querySelector('.arrow-right');
    button.classList.add('disable');
    var button2 = document.querySelector('.arrow-left');
    button2.classList.remove('disable');

}

function wsun(){
    var menu = document.querySelector('.side-menu');
    menu.classList.remove('on-wrap');
    var sidebar = document.querySelector('.sidebar');
    
    if(screen.width>1680){
        sidebar.setAttribute('style','left: -150px');
    }else{
        sidebar.setAttribute('style','left: -117px');
    }

    var button = document.querySelector('.arrow-right');
    button.classList.remove('disable');
    var button2 = document.querySelector('.arrow-left');
    button2.classList.add('disable');

}

function showSearchInput(){
    var searchText = document.querySelector('.search-text');
    searchText.classList.add('active');
    var button = document.querySelector('.search-button');
    button.classList.remove('active');
    var button2 = document.querySelector('.search-button-close');
    button2.classList.add('active');
    var button3 = document.querySelector('.search-button-active');
    button3.classList.add('active');

}

function searchText(){
    var searchingText = document.querySelector('.search-text');

    alert('Looking text: '+searchingText.value); 

}

function closeSearch(){
    var searchText = document.querySelector('.search-text');
    searchText.classList.remove('active');
    var button = document.querySelector('.search-button');
    button.classList.add('active');
    var button2 = document.querySelector('.search-button-close');
    button2.classList.remove('active');
    var button3 = document.querySelector('.search-button-active');
    button3.classList.remove('active');
}