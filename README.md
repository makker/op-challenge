# op-challenge
This was done as part of a job application

## Browser support
IE >= 9
All all modern desktop and mobile browser, but no niche browsers like Opera Mini

Tested with latest Win Chrome, Win FF, Edge, IE 9 - 11, and Android Chrome in mobile and tablet.

## Solutions

### Text content
As there was only contents provided for one of the 3 sections, I used the same contents for the two others as well.

### Fonts
The font weights in the numeric layout instructions were too much. For example based on the instructions main heading should have font weight 600, but in Chrome with font weight 500 the result looks mush more like the layout image.

For other texts there was no weight instructed in the layouts. Chrome defaults to 400, but in looked too bold. 

I ended up using 300 and 500, but normally I would've ofcourse consulted the designer which weight he/she ment to be used.

### SVGs
I decided to use the SVGs for the chevrons as the original asset bundle didn't include the Opuxicons font. That font is used in the OP site to produce the animated colorized chevron. 

### Class names
Classes and elements would be named differently if this the page was part of a larger system.

### Dev features
Js and CSS include some features that can be activated by adding '?dev' after the index.html url. Features were used in development and would be removed before deploy to prod.
- CSS adds a layout tracing image as bg
- Opens first item