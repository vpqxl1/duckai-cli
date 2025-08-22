# DuckDuckGo CLI

A command-line interface for searching DuckDuckGo directly from your terminal.

## Features

- Real-time DuckDuckGo search results
- Clean, terminal-based interface
- Shows abstracts, direct answers, and related topics
- Simple and intuitive to use

## Installation

1. Make sure you have Node.js installed on your system
2. Clone or download this repository
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

Run the CLI with:
```bash
node duck.js
```

Once running, you can:
- Type any search query and press Enter to get results
- Type `exit` or `quit` to exit the program
- Type `help` to see available commands

## Example

```
$ node duck-cli.js
==========================================
      DuckDuckGo Command Line Interface
==========================================
Type your search query and press Enter.
Type "exit" or "quit" to leave.

duck> what is javascript
Searching...

JavaScript is a programming language commonly used in web development.

duck> exit
Goodbye!
```

## Dependencies

- Node.js
- axios (for HTTP requests)

## Notes

This CLI tool uses DuckDuckGo's official API to fetch search results. Please use responsibly and respect DuckDuckGo's terms of service.

## License

MIT
