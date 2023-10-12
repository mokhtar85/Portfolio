import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  downloadPDF() {
    const pdfUrl = '/assets/cv Amairi Mokhtar.pdf'; // Replace with the actual path to your PDF file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'cv Amairi Mokhtar'; // Specify the desired file name
    link.click();
  }
}
