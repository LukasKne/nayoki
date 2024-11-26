const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = '';

  const email = document.getElementById('email').value

  const standardFields = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
  };

  try {
    const response = await fetch(`/api/contacts/email/${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.maileon.api+json',
        'Authorization': `Basic ${apiKey}`
      },
      body: JSON.stringify({ standard_fields: standardFields }),
    });

    if (response.ok) {
      responseMessage.textContent = 'Erfolgreich angemeldet!';
      
    } else {
      responseMessage.textContent = 'Fehler beim Anmelden für den Newsletter. Bitte versuchen Sie es erneut.';
      responseMessage.className = 'text-red-600';
    }
  } catch (error) {
    responseMessage.textContent = 'Beim Anmelden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support.';
    responseMessage.className = 'text-red-600';
  }
});
