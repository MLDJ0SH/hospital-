import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent {
  hospitalId: string | null;

  constructor(private route: ActivatedRoute) {
    this.hospitalId = this.route.snapshot.paramMap.get('id');
  }
}
