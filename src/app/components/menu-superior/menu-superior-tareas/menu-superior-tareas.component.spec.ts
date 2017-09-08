import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperiorTareasComponent } from './menu-superior-tareas.component';

describe('MenuSuperiorTareasComponent', () => {
  let component: MenuSuperiorTareasComponent;
  let fixture: ComponentFixture<MenuSuperiorTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSuperiorTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuperiorTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
