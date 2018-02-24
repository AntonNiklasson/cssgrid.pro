# This is where the magic happens 😍

Instead of fiddling with these lines, grid includes something called _areas_, and it's awesome.

The idea is that the container defines the available areas, and the items just decides where it
wants to reside.

A basic website usually comes with a _header_, a _sidebar_, some kind of main _content_ area and a _footer_.

```
----------------------------
|          header          |
----------------------------
|         |                |
|         |                |
| sidebar |    content     |
|         |                |
|         |                |
----------------------------
|          footer          |
----------------------------
```

For this we need two columns: **300px** for the sidebar and **the rest** for the content.

Three rows will cover the vertical alignments. Header and footer should be **200px** each, while the middle row **grows to fill the remaining space**.

`grid-template-areas` takes one parameter per row defined. Which is three in this case. Each string then specifies what are to place in each cell in that row.

```
grid-template-areas: "area-1 area-2" "area-1 area-3" "area-4 area-4";
```
