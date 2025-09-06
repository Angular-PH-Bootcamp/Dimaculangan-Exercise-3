# Angular Signals Quiz – Shopping Cart App

## Objective
You will refactor and enhance a simple shopping cart application by using **Angular Signals**.  
This quiz will test your understanding of signals (`signal`, `computed`, `input`, `output`) and user interactions in Angular.

---

## Instructions

### 1. Refactor to Signals
- Convert the existing application state management to use **Angular Signals**.
- Replace any `@Input()` and `@Output()` with `input()` and `output()`.
- Use `signal()` to hold the cart items.
- Use `computed()` if necessary to derive values (e.g., total price, item count).
- Use `effect()` if you need to react to state changes.

---

### 2. Add to Cart (Click to Select)
- When the user clicks on a product card:
  - Add the item to the cart.
  - Change the background color of the product card to indicate it is selected.

---

### 3. Remove from Cart (Toggle Behavior)
- If the user clicks again on a product that is already in the cart:
  - Remove the item from the cart.
  - Reset the product card background color to its default.

---
