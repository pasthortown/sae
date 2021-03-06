import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoDocumentoComponent } from './tipodocumento.component';

describe('TipoDocumentoComponent', () => {
   let component: TipoDocumentoComponent;
   let fixture: ComponentFixture<TipoDocumentoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoDocumentoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoDocumentoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});