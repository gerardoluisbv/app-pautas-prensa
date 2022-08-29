let tabs = document.querySelectorAll('#select-tab');
let contents = document.querySelectorAll('#select-content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.add('hidden');
        });

        tabs.forEach((tab) => {
            tab.classList.remove('hidden');
            tab.classList.remove('bg-blue-200','border-x','border-t','font-bold');
            tab.classList.add('border-b');
        });
        
        contents[index].classList.remove('hidden');
        tabs[index].classList.add('bg-blue-200','border-x','border-t','font-bold');
        tab.classList.remove('border-b');
    });
});    