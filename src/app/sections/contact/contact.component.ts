import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

  submitted = signal(false);
  jsonOutput = signal<any | null>(null);

  onSubmit(): void {

    this.submitted.set(true);

    if(this.contactForm.valid) {
      const data = this.contactForm.getRawValue();
      this.jsonOutput.set(data);

      console.log('✅ Formulario en JSON:', data);

      this.contactForm.reset();
      this.submitted.set(false);
    }else {
      console.warn('⚠️ Formulario inválido');
    }
  }
}
