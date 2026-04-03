
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
  });

  document.querySelectorAll('.chat-input button').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      if (input && input.value.trim()) {
        alert('Prototype only: a live chat message would be sent here.');
        input.value = '';
      } else {
        alert('Prototype only: enter a sample message to simulate chat.');
      }
    });
  });
});
