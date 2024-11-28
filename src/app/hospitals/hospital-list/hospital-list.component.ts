import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent {
  displayedColumns: string[] = ['name', 'location', 'actions'];
  hospitals = [
    { name: 'Hospital 1', location: 'City A' },
    { name: 'Hospital 2', location: 'City B' },
    { name: 'Hospital 3', location: 'City C' }
  ];

  onEdit(hospital: any) {
    console.log('Edit hospital:', hospital);
  }

  onDelete(hospital: any) {
    console.log('Delete hospital:', hospital);
  }
}
