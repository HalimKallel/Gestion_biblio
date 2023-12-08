// contact-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.addContact(contactData).subscribe(response => {
        console.log('Contact added successfully:', response);
        // Optionally, reset the form after successful submission
        this.contactForm.reset();
      });
    }
  }
}
