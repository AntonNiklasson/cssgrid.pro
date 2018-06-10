# Position the cat!

A grid is composed of rows and columns. These form the cells inside the grid.
But it also has a number of **lines**.

Three vertical lines, and four horizontal lines gives you a 3x2 grid. It is possible to target these
lines and insert items in-between them.

```
  1                   2                     3
1 +-------------------+---------------------+
  |                   |                     |
  |                   |                     |
  |                   |                     |
2 +-------------------+---------------------+
  |                   |                     |
  |                   |                     |
  |                   |                     |
3 +-------------------+---------------------+
  |                   |                     |
  |                   |  <insert-cat-here>  |
  |                   |                     |
4 +-------------------+---------------------+
```

`grid-column` and `grid-row` are shorthand properties for `grid-column-start`, `grid-column-end`, `grid-row-start` and `grid-row-end`.

Separate the _starting line_ from the _ending line_ with a `/`.

```
grid-column: A / B;
grid-row: C / D;
```

__What would the values be for placing the cat in the lower right corner?__
