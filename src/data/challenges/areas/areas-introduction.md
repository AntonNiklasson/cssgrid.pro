# This is where the magic happens 😍

Instead of fiddling with these lines, grid includes something called _areas_. The idea is that the container defines the available areas, items inside the grid only needs a single area name to be part of the grid.

**Your job is to tell the grid where the different areas should be placed.**

Every row in the grid gets its own string argument in the `grid-area` property. Each of those strings for the rows tells the grid what areas are place in each cell in that row.

A 2x2 grid could be mapped out like this:

```
grid-areas: "header header" "content sidebar";
```

---

Now for the challenge:

```
+------------------------------------------+
|                                          |
|                   cat                    |
|                                          |
+-----------+------------------------------+
|           |                              |
|           |                              |
|           |                              |
|           |                              |
| elephant  |            turtle            |
|           |                              |
|           |                              |
|           |                              |
|           |                              |
+-----------+------------------------------+
|                                          |
|                   dog                    |
|                                          |
+------------------------------------------+
```

For this we need two columns: **300px** for the sidebar and **"the rest"** for the content.

Three rows will cover the vertical alignments. Header and footer should be **200px** each, while the middle row **grows to fill the remaining space**.

`grid-template-areas` takes one parameter per row defined. Which is three in this case. Each string then specifies what are to place in each cell in that row.

```
grid-template-areas: "area-1 area-2" "area-1 area-3" "area-4 area-4";
```
