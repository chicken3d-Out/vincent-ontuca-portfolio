const iconTrigger = document.querySelector('#iconTrigger')
const arrow = document.querySelector('#initials')
const sidebarMain= document.querySelector('.sidebar-main')

iconTrigger.addEventListener('click', () =>{
    if (arrow.classList.contains('vo-right')){
        /*Icon change*/
        arrow.classList.remove('vo-right')
        arrow.classList.add('vo-left')
        /*Sidebar */
        sidebarMain.classList.add('hide')
        sidebarMain.classList.remove('show')
    }
    else {
        /*Icon change*/
        arrow.classList.add('vo-right')
        arrow.classList.remove('vo-left')
        /*Sidebar */
        sidebarMain.classList.remove('hide')
        sidebarMain.classList.add('show')
    }
})