let tabs = document.getElementsByClassName('tab');
let tabsContent = document.getElementsByClassName('tab__content');

function clicker() {
    for (let i = 0; i < tabs.length; i++) {
    
        tabs[i].addEventListener('click', funcTabs);

        function funcTabs() {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].className = 'tab';
                tabsContent[j].className = 'tab__content'
            }
            tabs[i].className = 'tab tab_active';
            tabsContent[i].className = 'tab__content tab__content_active';
        }
    }

}

clicker();