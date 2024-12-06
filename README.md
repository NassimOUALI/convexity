# Convex Equation Visualization

This project visualizes mathematical concepts of convexity through interactive plots using **p5.js**. It allows users to graph functions, adjust parameters, and explore convexity properties visually.

## Features

- **Interactive Grid and Axes**: Displays a Cartesian grid for better visualization of functions and points.
- **Custom Function Input**: Users can enter a mathematical function \( F(x) \) to be graphed.
- **Dynamic Parameters**: Adjust \( λ \), \( a \), and \( b \) using sliders to explore convexity:
  - Blue Point: \( F(λ a + (1-λ)b) \)
  - Red Point: \( λ F(a) + (1-λ)F(b) \)
- **Convexity Testing**: Observe the relative positions of the points to test the convexity property:
  \[
  F(λ a + (1-λ)b) \leq λ F(a) + (1-λ)F(b)
  \]

## Files

### `main.js`
The JavaScript file that:
- Sets up the canvas and interactive elements.
- Draws the Cartesian grid and axes.
- Evaluates and plots the input function.
- Dynamically calculates and plots points based on user inputs.

### `index.html`
The HTML file that:
- Hosts the input controls for \( F(x) \), \( a \), \( b \), and \( λ \).
- Embeds the p5.js canvas in a container.
- Includes a brief explanation of the convexity property.

### Required Library
The project uses the **p5.js** library, included via CDN.

## How to Use

1. Open the `index.html` file in your browser.
2. Use the inputs to:
   - Define a function \( F(x) \) (e.g., \( x^2 \)).
   - Adjust \( λ \), \( a \), and \( b \) with the sliders.
3. Observe:
   - The function graph.
   - The blue and red points representing \( F(λ a + (1-λ)b) \) and \( λ F(a) + (1-λ)F(b) \), respectively.
   - Verify the convexity property visually.

## Example

For \( F(x) = x^2 \), \( a = -1 \), \( b = 1 \), and \( λ = 0.5 \):
- The blue point will represent \( F(0) = 0 \).
- The red point will represent \( 0.5 ⋅ F(-1) + 0.5 ⋅ F(1) = 0.5 + 0.5 = 1 \).

The red point lies above the blue point, indicating that \( F(x) \) is convex.

## License
This project is open for educational use.