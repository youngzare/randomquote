async function getRandomQuote() {
  const quoteContainer = document.getElementById('quoteContainer');

  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    const { content, author } = data;

    quoteContainer.innerHTML = `<p>"${content}"</p><p>- ${author}</p>`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteContainer.innerHTML = 'Error fetching quote';
  }
}