# EmailJS Setup Instructions

To enable the contact form to send emails to polokkumar9030@gmail.com, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}} - Portfolio Contact Form

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Step 4: Get Your Credentials
1. **Service ID**: Found in your Email Services section
2. **Template ID**: Found in your Email Templates section  
3. **Public Key**: Found in Account > API Keys

## Step 5: Update Contact Component
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your public key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email (polokkumar9030@gmail.com) for the message

## Features Implemented:
✅ All form fields are required
✅ Form validation before submission
✅ Email sent directly to polokkumar9030@gmail.com
✅ Success toast notification on successful submission
✅ Error toast notification on failure
✅ Form automatically resets after successful submission
✅ Loading state during submission