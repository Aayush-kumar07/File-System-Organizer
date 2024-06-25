Certainly! Here's a detailed README content for your File-System-Organizer project:

---

# File System Organizer

The File System Organizer (FO) is a command-line tool built using JavaScript and Node.js that helps organize files within a directory into structured subfolders based on file types. It offers several commands to manage and organize files effectively.

## Commands

1. **Tree Command**
   - Syntax: `node FO.js tree <dirname>`
   - Description: Generates a tree-like structure of the specified directory `<dirname>`.

2. **Organize Command**
   - Syntax: `node FO.js organize <dirname>`
   - Description: Organizes files in the specified directory `<dirname>` into subfolders based on their file types (e.g., images, documents, videos).

3. **Help Command**
   - Syntax: `node FO.js help`
   - Description: Displays help information and usage instructions for the available commands.

## Getting Started

To use the File System Organizer, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd File-System-Organizer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Usage:**
   - Copy the source code of `FO.js` and paste it into your IDE.
   - Open a terminal or command prompt and navigate to the directory where `FO.js` is located.
   - Use the following syntax to execute commands:

     ```bash
     node FO.js <command_type> '<folder_path>'
     ```

     Replace `<command_type>` with one of the commands (`tree`, `organize`, `help`) and `<folder_path>` with the path of the folder you want to organize.

## Example

To organize files in the `Downloads` folder located at `C:\Users\Username\Downloads`:

```bash
node FO.js organize 'C:\Users\Username\Downloads'
```

This will organize the files in the `Downloads` folder into subfolders based on their types.

## Notes

- Ensure Node.js is installed on your system.
- Use single quotes (`'`) around folder paths containing spaces.

---

This README provides clear instructions on installing, using, and understanding the File System Organizer tool. Adjust the `<repository-url>` with the actual URL of your GitHub repository where the project is hosted.
    Input sytax-
    
    node FO.js <command_type from above > 'folder_path in which operation is to be done' 
    
