# My-Assignment---06
1. The primary differences between var, let, and const in JavaScript are scope, reassignment, and redeclaration. var is function-scoped, let and const are block-scoped. var and let allow variable reassignment, while const does not. var can be redeclared within its scope, whereas let and const cannot. Use let for variables that may change and const for those that won't, while var is generally avoided in modern JavaScript.
2. The JavaScript array methods map(), forEach(), and filter() serve distinct purposes when working with arrays.
forEach():
Purpose:
Iterates over each element in an array and executes a provided callback function for each element.
Return Value:
undefined. It does not create a new array or modify the original array directly (unless explicitly done within the callback).
Use Case:
When the goal is to perform a side effect for each element, such as logging values, updating a database, or manipulating the DOM.
map():
Purpose:
Creates a new array by applying a provided callback function to each element of the original array.
Return Value:
A new array containing the results of calling the callback function on every element in the original array. The original array remains unchanged.
Use Case:
When the goal is to transform each element of an array into a new value and collect these transformed values into a new array.
filter():
Purpose:
Creates a new array containing only the elements from the original array that satisfy a provided condition (i.e., for which the callback function returns a truthy value).
Return Value:
A new array containing a subset of the original array's elements. The original array remains unchanged.
Use Case:
When the goal is to select specific elements from an array based on a condition and create a new array containing only those selected elements.
3. Key characteristics of arrow functions:
Concise Syntax: They eliminate the need for the function keyword and often allow for implicit returns and omission of parentheses for single parameters.
Lexical "this" Binding: Unlike traditional functions where this is determined by how the function is called, arrow functions lexically bind this. This means this within an arrow function refers to the this value of the enclosing scope where the arrow function is defined. This solves common issues related to this context in callbacks and event handlers.
Anonymous Functions: Arrow functions are always anonymous; they do not have a name property.
No arguments Object: Arrow functions do not have their own arguments object. If you need to access arguments, you can use rest parameters (...args).
Cannot be Used as Constructors: Arrow functions cannot be used with the new keyword to create new objects.
No "prototype" Property: Arrow functions do not have a prototype property.
4. How does destructuring assignment work in ES6:
Array Destructuring:
Values are extracted based on their position (index) within the array.
The syntax uses square brackets [] on the left-hand side of the assignment.
Skipping elements: You can skip elements by leaving commas in the pattern.
Rest parameter: The rest parameter (...) can be used to gather remaining elements into a new array.
Object Destructuring:
Properties are extracted based on their names (keys) within the object.
The syntax uses curly braces {} on the left-hand side of the assignment.
Renaming variables: You can assign extracted properties to different variable names using a colon :.
Default values: You can provide default values for properties that might be missing in the object.
Rest property: The rest property (...) can be used to gather remaining properties into a new object.
5. Template literals, introduced in ECMAScript 2015 (ES6), provide a more flexible and readable way to create strings in JavaScript compared to traditional string concatenation.
Template literals are enclosed by backticks (`` ` ``) instead of single or double quotes. They offer the following features: 
Embedded Expressions (Interpolation):
You can embed variables and JavaScript expressions directly within the string using the ${expression} syntax. The expression inside the curly braces will be evaluated and its result inserted into the string.
Multi-line Strings:
Template literals can span multiple lines without the need for escape characters like \n. Line breaks within the backticks are preserved in the resulting string.
Difference from String Concatenation: Traditional string concatenation typically uses the + operator to combine strings and variables.
The Key Differences: Key Differences:
Syntax:
Template literals use backticks (`` ` ``) and ${} for embedding, while concatenation uses + and quotes.
Readability:
Template literals often lead to more readable code, especially when dealing with multiple variables or multi-line strings, as they avoid the repetitive use of + and quotes.
Multi-line Support:
Template literals inherently support multi-line strings, whereas concatenation requires explicit \n characters for line breaks.
Expression Evaluation:
Template literals allow direct embedding of expressions for evaluation within the string, making complex string construction more concise. Concatenation requires pre-evaluating expressions or converting them to strings before joining.
