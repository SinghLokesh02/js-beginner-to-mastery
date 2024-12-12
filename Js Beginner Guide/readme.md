# JavaScript Beginner Guide  

## Overview  
This README introduces two foundational topics for beginners diving into JavaScript:  
1. **JavaScript vs ECMAScript**  
2. **Installing VS Code and Running Your First Program**  

---

## 1. JavaScript vs ECMAScript  

### **JavaScript**  
JavaScript is a **programming language** widely used for web development. It allows developers to make web pages interactive, handle events, and build full-fledged applications.  

### **ECMAScript**  
ECMAScript (ES) is a **specification** for scripting languages, maintained by ECMA International. JavaScript follows this specification to ensure standardization and compatibility across environments.  

### **Key Differences**  
| **JavaScript**         | **ECMAScript**                  |  
|-------------------------|---------------------------------|  
| A scripting language.   | A specification for scripting languages. |  
| Includes browser APIs (e.g., `DOM`, `fetch`). | Defines core language features only. |  
| Evolving with frameworks and libraries. | Updated periodically (e.g., ES6, ES7). |  

### **Relationship**  
JavaScript is the implementation of ECMAScript, and ECMAScript defines the core standards for how JavaScript should work.  

---

## 2. Install VS Code and Run Your First Program  

### **Step 1: Download and Install VS Code**  
1. Go to the official [VS Code website](https://code.visualstudio.com/).  
2. Download the appropriate version for your operating system.  
3. Follow the installation steps to set up VS Code on your system.  

### **Step 2: Install Node.js (Optional)**  
To run JavaScript code outside the browser, install Node.js:  
1. Visit the [Node.js website](https://nodejs.org/).  
2. Download and install the latest LTS version.  
3. Verify installation:  
   ```bash
   node -v
   npm -v
   ```  

### **Step 3: Write Your First Program**  
1. Open VS Code and create a new file:  
   - File → New File → Save as `script.js`.  
2. Write your first JavaScript program:  
   ```javascript
   console.log("Hello, World!");
   ```  

### **Step 4: Run Your Program**  

#### Option 1: Using Node.js  
1. Open a terminal in VS Code.  
2. Navigate to the file location:  
   ```bash
   cd path-to-your-file
   ```  
3. Run the program:  
   ```bash
   node script.js
   ```  
   Output:  
   ```
   Hello, World!
   ```  

#### Option 2: Using Browser Developer Tools  
1. Open your browser (e.g., Chrome).  
2. Go to **Developer Tools** (Right-click → Inspect → Console).  
3. Copy-paste your JavaScript code into the Console and press Enter.  

---

## Conclusion  

- **JavaScript vs ECMAScript**: Understand the difference between the language and the specification.  
- **Running Code**: Use VS Code or browser consoles to execute JavaScript easily.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  