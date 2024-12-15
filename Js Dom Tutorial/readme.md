# DOM Tutorial  

## Overview  

This tutorial provides a comprehensive introduction to working with the Document Object Model (DOM) in JavaScript. You will learn how to manipulate HTML and CSS dynamically using JavaScript and gain a solid foundation for building interactive web pages.  

---

## Table of Contents  

1. [HTML and CSS Crash Course](#1-html-and-css-crash-course)  
2. [Async vs Defer](#2-async-vs-defer)  
3. [Select Elements Using ID](#3-select-elements-using-id)  
4. [querySelector](#4-queryselector)  
5. [textContent & innerText](#5-textcontent--innertext)  
6. [Change Styles of Elements Using JavaScript](#6-change-styles-of-elements-using-javascript)  
7. [Get and Set Attributes](#7-get-and-set-attributes)  
8. [Select Multiple Elements and Loop Through Them](#8-select-multiple-elements-and-loop-through-them)  
9. [innerHTML](#9-innerhtml)  
10. [DOM Tree: Root Node, Element Nodes, Text Nodes](#10-dom-tree-root-node-element-nodes-text-nodes)  
11. [classList](#11-classlist)  
12. [Add New Elements to Page](#12-add-new-elements-to-page)  
13. [Create Elements](#13-create-elements)  

---

### 1. HTML and CSS Crash Course  

**HTML Basics:**  
HTML defines the structure of web pages. It contains elements such as headings, paragraphs, images, and links.  

**Example:**  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Tutorial</title>
  </head>
  <body>
    <h1>Welcome to DOM Tutorial</h1>
    <p>This is an introduction to DOM manipulation.</p>
  </body>
</html>
```  

**CSS Basics:**  
CSS styles the elements, adding visual appeal.  

**Example:**  
```css
h1 {
  color: green;
  font-size: 28px;
}

p {
  color: gray;
  font-size: 16px;
}
```  

---

### 2. Async vs Defer  

- **Async:** The script loads and executes asynchronously, possibly interrupting HTML parsing.  
- **Defer:** The script executes only after the HTML is fully parsed.  

**Example:**  
```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```  

---

### 3. Select Elements Using ID  

Use `getElementById` to select a specific element by its ID.  

**Example:**  
```javascript
const title = document.getElementById("main-title");
console.log(title.textContent);
```  

---

### 4. querySelector  

`querySelector` selects the first matching element using a CSS selector.  

**Example:**  
```javascript
const heading = document.querySelector("h1");
console.log(heading.textContent);
```  

---

### 5. textContent & innerText  

- **textContent:** Retrieves the entire text content, including hidden text.  
- **innerText:** Retrieves only the visible text.  

**Example:**  
```javascript
const para = document.querySelector("p");
console.log(para.textContent);
console.log(para.innerText);
```  

---

### 6. Change Styles of Elements Using JavaScript  

Modify styles directly using the `style` property.  

**Example:**  
```javascript
const heading = document.querySelector("h1");
heading.style.color = "blue";
heading.style.fontSize = "32px";
```  

---

### 7. Get and Set Attributes  

Use `getAttribute` and `setAttribute` to work with element attributes.  

**Example:**  
```javascript
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // Get the href attribute
link.setAttribute("href", "https://newsite.com"); // Update the href attribute
```  

---

### 8. Select Multiple Elements and Loop Through Them  

Use `querySelectorAll` to select multiple elements, and iterate through them with a loop.  

**Example:**  
```javascript
const items = document.querySelectorAll(".list-item");
items.forEach((item) => {
  console.log(item.textContent);
});
```  

---

### 9. innerHTML  

Modify the HTML structure inside an element.  

**Example:**  
```javascript
const container = document.querySelector("#content");
container.innerHTML = "<p>This is dynamic content</p>";
```  

---

### 10. DOM Tree: Root Node, Element Nodes, Text Nodes  

The DOM represents the HTML structure as a tree.  

- **Root Node:** The `<html>` element.  
- **Element Nodes:** HTML tags like `<div>`.  
- **Text Nodes:** The text inside elements.  

**Example:**  
```javascript
console.log(document.documentElement); // Root node
console.log(document.body); // Element node
```  

---

### 11. classList  

Use `classList` to add, remove, or toggle classes on elements.  

**Example:**  
```javascript
const btn = document.querySelector("button");
btn.classList.add("active");
btn.classList.remove("inactive");
btn.classList.toggle("hidden");
```  

---

### 12. Add New Elements to Page  

Use `append` or `appendChild` to dynamically add elements.  

**Example:**  
```javascript
const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New List Item";
list.appendChild(newItem);
```  

---

### 13. Create Elements  

Use `document.createElement` to dynamically generate new elements.  

**Example:**  
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, DOM!";
document.body.appendChild(newDiv);
```  

---

## Conclusion  

By mastering these concepts, you can dynamically interact with and manipulate web pages, providing a better experience for users. Practice these examples to solidify your understanding of DOM manipulation.  

---  

## License  

This repository is licensed under the [MIT License](LICENSE).  