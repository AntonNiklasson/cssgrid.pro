# Fractions ⚡️

The Grid spec also comes with a new unit for expressing length: **fr**! The size of a fraction depends on the total number of fractions in that particular dimension.

For example: two children where one has the size of 1fr and the other 2fr will be rendered
with the larger of the two being 66.666% of the parent, while the other being 33.333%.

Put together the following grid using _fractions_:

```
        1fr           4fr
    +--------+-------------------------------+
    |        |                               |
    |        |                               |
2fr |        |                               |
    |        |                               |
    |        |                               |
    +--------+-------------------------------+
    |        |                               |
1fr |        |                               |
    |        |                               |
    +--------+-------------------------------+
```
