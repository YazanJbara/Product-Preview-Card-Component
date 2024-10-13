# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Dark cyan: hsl(158, 36%, 37%)
- Cream: hsl(30, 38%, 92%)

### Neutral

- Very dark blue: hsl(212, 21%, 14%)
- Dark grayish blue: hsl(228, 12%, 48%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weights: 500, 700

- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

old css : 

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-clr);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;

}



.container {
  /* padding: 10px; */
  background-color: var(--btn-clr);
  width: 37.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:30px;
  border-radius: 10px;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.content {
    /* text-align: center; */
    /* padding: 0 20px; */
}



.type {
  color: var(--text-clr);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--headings-clr);
}

.description {
  font-size: 14px;
  color: var(--text-clr);
}

.price {
  font-size: 1.2rem;
  color: var(--btn-bg);

}
.add {
  background-color: var(--btn-bg);
  color: var(--btn-clr);
  padding: 14px 67px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

}

