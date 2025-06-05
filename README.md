# Design System

This repository contains a very small collection of React components and
supporting styles that can be used as the starting point for a design system.

## Components

- **ListElement** – renders a selectable list row. See `index.jsx` and
  `style.css` for the implementation and styles.
- **TypeBasicWrapper** – an input wrapper with different visual states.
  Implemented in `index1.jsx` with styles in `style1.css`.
- **Search** – simple search icon component.
- **Cancel** – simple cancel (cross) icon component.

All components are exported from `index.js` for convenience:

```javascript
import { ListElement, TypeBasicWrapper, Search, Cancel } from './index.js';
```

## Styles

The `styleguide.css` file defines the CSS custom properties used throughout
these components. Duplicate definitions also exist in `styleguide1.css`.

## Usage

These components are written in React and expect a bundler or build system
that understands JSX. They can be imported individually or via `index.js`.
