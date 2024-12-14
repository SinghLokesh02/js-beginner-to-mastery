// Block Scope vs Function Scope in JavaScript

/*
Definition:
Block Scope:
- Variables declared with `let` and `const` are limited to the block, statement, or expression where they are defined.

Function Scope:
- Variables declared with `var` are scoped to the function in which they are declared.

Key Points:
1. `var` is function-scoped, while `let` and `const` are block-scoped.
2. Block scope is more restrictive and prevents unintentional access outside the block.
3. Avoid using `var` due to its tendency to create bugs from hoisting.

Syntax:
{
  let blockScoped = "Accessible only in this block";
}

function example() {
  var functionScoped = "Accessible throughout this function";
}
*/

// Example 1: Block Scope
{
    let blockScopedVariable = "I am block scoped!";
    console.log(blockScopedVariable); // Output: I am block scoped!
  }
  try {
    console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
  } catch (e) {
    console.error(e);
  }
  
  // Example 2: Function Scope
  function functionScopeExample() {
    var functionScopedVariable = "I am function scoped!";
    console.log(functionScopedVariable); // Output: I am function scoped!
  }
  functionScopeExample();
  try {
    console.log(functionScopedVariable); // ReferenceError: functionScopedVariable is not defined
  } catch (e) {
    console.error(e);
  }
  
  // Example 3: Redeclaration with `var` vs `let`
  var a = 10;
  var a = 20; // Allowed
  console.log(a); // Output: 20
  
  let b = 30;
  try {
    let b = 40; // Error if redeclared in the same scope
  } catch (e) {
    console.error(e);
  }
  
  // Example 4: Hoisting Behavior of `var`
  console.log(hoistedVar); // Output: undefined (due to hoisting)
  var hoistedVar = "Hoisted Variable";
  try {
    console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
    let hoistedLet = "Block Scoped";
  } catch (e) {
    console.error(e);
  }
  
  /*
  Notes:
  - Always prefer `let` and `const` for variable declarations.
  - Use `const` when the variable will not be reassigned.
  - Block scoping helps avoid errors caused by unintended variable access.
  */
  