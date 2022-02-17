const iconTrigger = document.querySelector('#iconTrigger')
const arrow = document.querySelector('#initials')
const sidebarMain= document.querySelector('.sidebar-main')

iconTrigger.addEventListener('click', () =>{
    if (arrow.classList.contains('vo-right')){
        /*Icon change*/
        arrow.classList.remove('vo-right')
        arrow.classList.add('vo-left')
        /*Sidebar */
        sidebarMain.classList.add('show')
        sidebarMain.classList.remove('hide')
    }
    else {
        /*Icon change*/
        arrow.classList.add('vo-right')
        arrow.classList.remove('vo-left')
        /*Sidebar */
        sidebarMain.classList.remove('show')
        sidebarMain.classList.add('hide')
    }
})