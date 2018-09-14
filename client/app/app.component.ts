import { AfterViewChecked, ChangeDetectorRef, Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SettingsService } from './core/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements AfterViewChecked {

  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.isFixed; };
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.isCollapsed; };
  @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.isBoxed; };
  @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.layout.useFullLayout; };
  @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.layout.hiddenFooter; };
  @HostBinding('class.layout-h') get horizontal() { return this.settings.layout.horizontal; };
  @HostBinding('class.aside-float') get isFloat() { return this.settings.layout.isFloat; };
  @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.layout.offsidebarOpen; };
  @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.layout.asideToggled; };
  @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.layout.isCollapsedText; };


  constructor(public auth: AuthService,
    private changeDetector: ChangeDetectorRef,public settings: SettingsService) { }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}
