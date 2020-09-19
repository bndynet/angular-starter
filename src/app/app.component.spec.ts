import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from 'src/test.module';
import { AppComponent } from './app.component';
import { EventsService, NotificationService, StatusService } from './_services';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let statusService: StatusService;
  let eventsService: EventsService;
  let notifcationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        EventsService,
        StatusService,
        NotificationService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    statusService = TestBed.inject(StatusService);
    eventsService = TestBed.inject(EventsService);
    notifcationService = TestBed.inject(NotificationService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render all elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).not.toBeNull();
    expect(compiled.querySelector('app-sidebar')).not.toBeNull();
  });

  it(`should not show progress bar by default`, () => {
    expect(component.showProgressbar).toBeFalsy();
  });

  it('should expand sidebar by default', () => {
    expect(component.sidebarOpened).toBeTrue();
  });

  it('should collapse sidebar', () => {
    component.toggleSidebar();
    expect(component.sidebarOpened).toBeFalse();
  });

  it('should raise a toggle event for sidebar', () => {
    eventsService.toggleSidebar();
    expect(component.sidebarOpened).toBeFalse();
  });

  it('should raise a toggle event for content sidebar', done => {
    eventsService.openContentSidebar();
    setTimeout(() => {
      expect(component.contentSidebarOpened).toBeTrue();
      done();

      eventsService.closeContentSidebar();
      setTimeout(() => {
        expect(component.contentSidebarOpened).toBeFalse();
        done();
      }, 200);
    }, 200);

  });

  it('should toggle main progress bar', () => {
    statusService.requesting();
    expect(component.showProgressbar).toBeTrue();
    statusService.requested();
    expect(component.showProgressbar).toBeFalse();
  });
});
