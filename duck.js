const readline = require('readline');
const axios = require('axios');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'duck> '
});

// Function to search DuckDuckGo
async function searchDuckDuckGo(query) {
  try {
    const response = await axios.get(`https://api.duckduckgo.com/`, {
      params: {
        q: query,
        format: 'json',
        no_html: 1,
        skip_disambig: 1
      }
    });
    
    const data = response.data;
    
    if (data.AbstractText) {
      return data.AbstractText;
    } else if (data.Answer) {
      return data.Answer;
    } else if (data.Redirect) {
      return `Redirect: ${data.Redirect}`;
    } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      // Return the first few related topics
      return data.RelatedTopics.slice(0, 3)
        .map(topic => topic.Text)
        .filter(Boolean)
        .join('\n');
    } else {
      return 'No results found for your query.';
    }
  } catch (error) {
    console.error('Error fetching data from DuckDuckGo:', error.message);
    return 'An error occurred while searching. Please try again later.';
  }
}

// Display welcome message
console.log('==========================================');
console.log('      DuckDuckGo Command Line Interface');
console.log('==========================================');
console.log('Type your search query and press Enter.');
console.log('Type "exit" or "quit" to leave.\n');

// Start the prompt
rl.prompt();

// Handle user input
rl.on('line', async (line) => {
  const input = line.trim();
  
  if (input === 'exit' || input === 'quit') {
    console.log('Goodbye!');
    rl.close();
    return;
  }
  
  if (input === 'help') {
    console.log('\nAvailable commands:');
    console.log('  <query>     - Search DuckDuckGo');
    console.log('  exit/quit  - Exit the CLI');
    console.log('  help       - Show this help\n');
    rl.prompt();
    return;
  }
  
  if (input) {
    console.log('Searching...');
    const result = await searchDuckDuckGo(input);
    console.log('\n' + result + '\n');
  }
  
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
