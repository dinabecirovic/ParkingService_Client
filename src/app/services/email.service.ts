import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = 'service_o0ipxev';
  private templateID = 'template_vapbjw5';
  private userID = 'your_user_id';

  constructor() {}

  sendEmail(to_email: string, subject: string, message: string): void {
    const templateParams = {
      to_email,
      subject,
      message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
      }, (error) => {
        console.error('Error sending email:', error);
      });
  }
}
