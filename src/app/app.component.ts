import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('tableView') tableView!: ElementRef;
  title = 'pruebasEstilados';

  isScrolling: boolean = false;
  columnas = [...Array(17).keys()];
  filas = [...Array(35).keys()];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const tableView = document.querySelector('.table-view');
    console.log('scroll')
    if (tableView) {
      const scrollLeft = (tableView as HTMLElement).scrollLeft;
      this.isScrolling = scrollLeft > 0;
    }
   }

   ngAfterViewInit() {
    // Añadir el evento de scroll directamente al contenedor de la tabla
    this.tableView.nativeElement.addEventListener('scroll', () => {
      const scrollLeft = this.tableView.nativeElement.scrollLeft;
      this.isScrolling = scrollLeft > 0;
    });
  }
}
