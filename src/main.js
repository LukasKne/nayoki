const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = '';

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  console.log(apiKey, formData);

  try {
    const response = await fetch('/api/support/rest-api-1-0/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${apiKey}`
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      responseMessage.textContent = 'Nachricht wurde erfolgreich gesendet!';
      responseMessage.className = 'text-green-600';
    } else {
      responseMessage.textContent = 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.';
      responseMessage.className = 'text-red-600';
    }
  } catch (error) {
    responseMessage.textContent = 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.';
    responseMessage.className = 'text-red-600';
  }
});
