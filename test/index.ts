import * as Jimp from "jimp";
const _Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("lenna.png", (err, lenna) => {
    if (err) throw err;
    
    lenna.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("lena-small-bw.jpg"); // save
});


// Using promises
Jimp.read("lenna.png")
    .then(lenna => {
        lenna.resize(256, 256)            // resize
            .quality(60)                 // set JPEG quality
            .greyscale()                 // set greyscale
            .write("lena-small-bw.jpg"); // save
    })
    .catch(err => {
        console.error(err);
    });


// Basic usage
Jimp.read("./path/to/image.jpg", (err, image) => {
    // do stuff with the image (if no exception)
});

Jimp.read("./path/to/image.jpg")
    .then(image => {
        // do stuff with the image
    })
    .catch(err => {
        // handle an exception
    });


// The method can also read a PNG, JPEG or BMP buffer or from a URL:
let buffer: Buffer;
Jimp.read(buffer, (err, image) => {
    // do stuff with the image (if no exception)
});

Jimp.read("http://www.example.com/path/to/lenna.jpg", (err, image) => {
    // do stuff with the image (if no exception)
});


//Once the callback is filed or the promise fulfilled, the following methods can be called on the image
Jimp.read("http://www.example.com/path/to/lenna.jpg", (err, image) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let src: Jimp, val: number, n: number, hex: number,
        x: number, y: number, w: number, h: number, 
        srcx: number, srcy: number, srcw: number, srch: number, 
        r: number, f: number, deg: number,
        horz: boolean, vert: boolean, 
        mode: string, resize: boolean;
    
    image.crop(x, y, w, h);     // crop to the given region
    image.autocrop();           // automatically crop same-color borders from image (if any)
    image.invert();             // invert the image colours
    image.flip(horz, vert);     // flip the image horizontally or vertically
    image.gaussian(r);          // Gaussian blur the image by r pixels (VERY slow)
    image.blur(r);              // fast blur the image by r pixels
    image.greyscale();          // remove colour from the image
    image.sepia();              // apply a sepia wash to the image
    image.opacity(f);           // multiply the alpha channel by each pixel by the factor f, 0 - 1
    image.resize(w, h);         // resize the image. Jimp.AUTO can be passed as one of the values.
    image.resize(w, h, mode);   // resize the image. Jimp.AUTO can be passed as one of the values with resize mode.
    image.scale(f);             // scale the image by the factor f
    image.rotate(deg);          // rotate the image clockwise by a number of degrees.
    image.rotate(deg, resize);  // rotate the image clockwise by a number of degrees. Unless `false` is passed as the second parameter, the image width and height will be resized appropriately.
    image.blit(src, x, y);
    image.blit(src, x, y, srcx, srcy, srcw, srch);
                                // blit the image with another Jimp image at x, y, optionally cropped.
    image.composite(src, x, y); // composites another Jimp image over this iamge at x, y
    image.brightness(val);      // adjust the brighness by a value -1 to +1
    image.contrast(val);        // adjust the contrast by a value -1 to +1
    image.posterize(n);         // apply a posterization effect with n level
    image.mask(src, x, y);      // masks the image with another Jimp image at x, y using average pixel value
    image.dither565();          // ordered dithering of the image and reduce color space to 16-bits (RGB565)
    image.cover(w, h);          // scale the image so that it fills the given width and height
    image.contain(w, h);        // scale the image to the largest size so that fits inside the given width and height
    image.background(hex);      // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and image.rotate) and when writing formats that don't support alpha channels
    image.mirror(horz, vert);   // an alias for flip
    image.fade(f);              // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
    image.opaque();             // set the alpha channel on every pixel to fully opaque
    image.clone();              // returns a clone of the image
});


//Once the callback is filed or the promise fulfilled, the following methods can be called on the image
Jimp.read("http://www.example.com/path/to/lenna.jpg").then(image => {
    let 
        src: Jimp, val: number, n: number, hex: number,
        x: number, y: number, w: number, h: number, 
        srcx: number, srcy: number, srcw: number, srch: number, 
        r: number, f: number, deg: number,
        horz: boolean, vert: boolean, 
        mode: string, resize: boolean;
    
    image.crop(x, y, w, h);     // crop to the given region
    image.autocrop();           // automatically crop same-color borders from image (if any)
    image.invert();             // invert the image colours
    image.flip(horz, vert);     // flip the image horizontally or vertically
    image.gaussian(r);          // Gaussian blur the image by r pixels (VERY slow)
    image.blur(r);              // fast blur the image by r pixels
    image.greyscale();          // remove colour from the image
    image.sepia();              // apply a sepia wash to the image
    image.opacity(f);           // multiply the alpha channel by each pixel by the factor f, 0 - 1
    image.resize(w, h);         // resize the image. Jimp.AUTO can be passed as one of the values.
    image.resize(w, h, mode);   // resize the image. Jimp.AUTO can be passed as one of the values with resize mode.
    image.scale(f);             // scale the image by the factor f
    image.rotate(deg);          // rotate the image clockwise by a number of degrees.
    image.rotate(deg, resize);  // rotate the image clockwise by a number of degrees. Unless `false` is passed as the second parameter, the image width and height will be resized appropriately.
    image.blit(src, x, y);
    image.blit(src, x, y, srcx, srcy, srcw, srch);
                                // blit the image with another Jimp image at x, y, optionally cropped.
    image.composite(src, x, y); // composites another Jimp image over this iamge at x, y
    image.brightness(val);      // adjust the brighness by a value -1 to +1
    image.contrast(val);        // adjust the contrast by a value -1 to +1
    image.posterize(n);         // apply a posterization effect with n level
    image.mask(src, x, y);      // masks the image with another Jimp image at x, y using average pixel value
    image.dither565();          // ordered dithering of the image and reduce color space to 16-bits (RGB565)
    image.cover(w, h);          // scale the image so that it fills the given width and height
    image.contain(w, h);        // scale the image to the largest size so that fits inside the given width and height
    image.background(hex);      // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and image.rotate) and when writing formats that don't support alpha channels
    image.mirror(horz, vert);   // an alias for flip
    image.fade(f);              // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
    image.opaque();             // set the alpha channel on every pixel to fully opaque
    image.clone();              // returns a clone of the image
});


let image: Jimp, image1: Jimp, image2: Jimp;

//The default rezing algorithm uses a bilinear method as follows:
image.resize(250, 250);       // resize the image to 250 x 250
image.resize(Jimp.AUTO, 250); // resize the height to 250 and scale the width accordingly
image.resize(250, Jimp.AUTO); // resize the width to 250 and scale the height accordingly

//Optionally, the following constants can be passed to choose a particular resizing algorithm:
Jimp.RESIZE_NEAREST_NEIGHBOR;
Jimp.RESIZE_BILINEAR;
Jimp.RESIZE_BICUBIC;
Jimp.RESIZE_HERMITE;
Jimp.RESIZE_BEZIER;

//For example:
image.resize(250, 250, Jimp.RESIZE_BEZIER);


//Writing to files
image.write("path", (err, image) => {
    // Node-style callback will be fired when write is successful
});

//Writing to Buffers
image.getBuffer( Jimp.MIME_JPEG, (err, image) => {
    // Node-style callback wiml be fired with result
});


//PNG and JPEG quality

//The quality of JPEGs can be set with:
image.quality(80);

//The format of PNGs can be set with:
image.rgba(true);           // set whether PNGs are saved as RGBA (true, default) or RGB (false)
image.filterType(0.5);   // set the filter type for the saved PNG
image.deflateLevel(0.5); // set the deflate level for the saved PNG

//For convenience, supported filter types are available as static properties:
Jimp.PNG_FILTER_AUTO;    // -1
Jimp.PNG_FILTER_NONE;    //  0
Jimp.PNG_FILTER_SUB;     //  1
Jimp.PNG_FILTER_UP;      //  2
Jimp.PNG_FILTER_AVERAGE; //  3
Jimp.PNG_FILTER_PAETH;   //  4


//Colour manipulation
image.color([
    { apply: 'hue', params: [ -90 ] },
    { apply: 'lighten', params: [ 50 ] },
    { apply: 'xor', params: [ '#06D' ] }
]);

//Low-level manipulation 
image.bitmap.data; // a Buffer of the raw bitmap data
image.bitmap.width; // the width of the image
image.bitmap.height // the height of the image

//A helper method is available to scan a region of the bitmap:
image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    // x, y is the position of this pixel on the image
    // idx is the position start position of this rgba tuple in the bitmap Buffer
    // this is the image

    const red   = this.bitmap.data[ idx + 0 ];
    const green = this.bitmap.data[ idx + 1 ];
    const blue  = this.bitmap.data[ idx + 2 ];
    const alpha = this.bitmap.data[ idx + 3 ];

    // rgba values run from 0 - 255
    // e.g. this.bitmap.data[idx] = 0; // removes red from this pixel
});

//Alternatively, you can manipulate individual pixels using the following these functions:
image.getPixelColor(0, 1); // returns the colour of that pixel e.g. 0xFFFFFFFF
image.setPixelColor(0xFFFFFFFF, 0, 1); // sets the colour of that pixel

//Two static helper functions exist to convert RGBA values into single integer (hex) values:
Jimp.rgbaToInt(0, 0, 0, 0.5); // e.g. converts 255, 255, 255, 255 to 0xFFFFFFFF
Jimp.intToRGBA(0xFF123456); // e.g. converts 0xFFFFFFFF to {r: 255, g: 255, b: 255, a:255}



//Comparing images
//To generate a perceptual hash of a Jimp image, based on the pHash algorithm, use:
image.hash(); // aHgG4GgoFjA

//By default the hash is returned as base 64. The hash can be returned at another base by passing a number from 2 to 64 to the method:
image.hash(2); // 1010101011010000101010000100101010010000011001001001010011100100

//There are 18,446,744,073,709,551,615 unique hashes. The hamming distance between the binary representation of these hashes can be used to find similar-looking images.
//To calculate the hamming distance between two Jimp images based on their perceptual hash use:
Jimp.distance(image1, image2); // returns a number 0-1, where 0 means the two images are perceived to be identical

//Jimp also allows the diffing of two Jimp images using PixelMatch as follows:
const diff = Jimp.diff(image1, image2, 0.5); // threshold ranges 0-1 (default: 0.1)
diff.image;   // a Jimp image showing differences
diff.percent; // the proportion of different pixels (0-1), where 0 means the images are pixel identical


//Using a mix of hamming distance and pixel diffing to comare images, the following code has a 99% success rate of detecting the same image from a random sample (with 1% false positives). The test this figure is drawn from attempts to match each image from a sample of 120 PNGs against 120 corresponing JPEGs saved at a quality setting of 60.
const distance = Jimp.distance(image1, image2); // perceived distance
const diff2 = Jimp.diff(image1, image2);         // pixel difference

if (distance < 0.15 || diff.percent < 0.15) {
    // images match
} else {
    // not a match
}

//Chaining or callbacks

//Most instance methods can be chained together, for example as follows:
Jimp.read("lenna.png", (err, image) => {
    image.greyscale()
        .scale(0.5)
        .write("lena-half-bw.png");
});

//Alternatively, methods can be passed Node-style callbacks:
Jimp.read("lenna.png", (err, image) => {
    image.greyscale((err, image) => {
        image.scale(0.5, (err, image) => {
            image.write("lena-half-bw.png");
        });
    });
});
