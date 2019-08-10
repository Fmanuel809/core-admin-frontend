import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;

    public username: string;
    public userId: number;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    public menuItems = [
        { name: 'Dashboard', link: '/dashboard', icon: 'fa fa-fw fa-dashboard'},
        { name: 'Users', link: '/users', icon: 'fa fa-users', childrens: [
            {name: 'View',   link: '/users', icon: 'fa fa-eye'},
            {name: 'Add',    link: '/users/add',  icon: 'fa fa-plus'}
        ] },
        { name: 'Products', link: '/products', icon: 'fa fa-archive', childrens: [
            {name: 'View',   link: '/products',   icon: 'fa fa-eye'},
            {name: 'Add',    link: '/products/add',    icon: 'fa fa-plus'}
        ] }
    ];

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        const currentUser = JSON.parse(sessionStorage.getItem('current_user'));
        this.userId = currentUser.id;
        this.username = currentUser.username;
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        console.log(element);
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
