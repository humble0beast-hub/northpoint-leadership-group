const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});}
const form=document.getElementById('leadForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=document.getElementById('formNote');note.textContent='Thank you — your demo enquiry has been recorded on this page only. No message was sent.';note.classList.add('success');form.reset();});}