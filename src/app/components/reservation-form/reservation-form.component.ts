import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
})
export class ReservationFormComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      date: ['', Validators.required],
      eventType: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;
      const emailBody = `
        Dátum: ${formData.date}\n
        Typ udalosti: ${formData.eventType}\n
        Meno: ${formData.name}\n
        Email: ${formData.email}\n
        Telefónne číslo: ${formData.phone}\n
        Správa: ${formData.message}
      `;
      // window.location.href = `mailto:aaa@ddd.sk?subject=Rezervácia&body=${encodeURIComponent(
      //   emailBody
      // )}`;
    }
  }
}
