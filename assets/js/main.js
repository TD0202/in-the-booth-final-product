const form=document.getElementById('bookingForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMessage').textContent='Thank you. Your request has been captured in this website demo. Connect this form to email, Calendly, or a booking system before going live.';form.reset();});}
