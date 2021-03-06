// Type definitions for module jimp - v0.2.20
// Project: https://github.com/oliver-moran/jimp
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Jimp {
    //#region Constructors

    /**
     * Jimp constructor (from a file).
     * @param src - A path to the image.
     */
    constructor(src: string);
    /**
     * Jimp constructor (from a file).
     * @param src - A path to the image.
     * @param cb - A function to call when the image is parsed to a bitmap.
     */
    constructor(src: string, cb: Jimp.Callback<Jimp>);
    /**
     * Jimp constructor (from another Jimp image).
     * @param image - A Jimp image to clone.
     * @param cb - A function to call when the image is parsed to a bitmap.
     */
    constructor(image: Jimp, cb: Jimp.Callback<Jimp>);
    /**
     * Jimp constructor (from a Buffer).
     * @param data - A Buffer containing the image data.
     * @param cb - A function to call when the image is parsed to a bitmap.
     */
    constructor(data: Buffer, cb: Jimp.Callback<Jimp>);
    /**
     * Jimp constructor (to generate a new image).
     * @param width - The width of the image.
     * @param height - The height of the image.
     */
    constructor(width: number, height: number);
    /**
     * Jimp constructor (to generate a new image).
     * @param width - The width of the image.
     * @param height - The height of the image.
     * @param cb - A function to call when the image is parsed to a bitmap.
     */
    constructor(width: number, height: number, cb: Jimp.Callback<Jimp>);
    /**
     * Jimp constructor (to generate a new image).
     * @param width - The width of the image.
     * @param height - The height of the image.
     * @param pixelColor - The default pixel color of the image.
     * @param cb - A function to call when the image is parsed to a bitmap.
     */
    constructor(width: number, height: number, pixelColor: number, cb: Jimp.Callback<Jimp>);
    /**
     * Jimp constructor (to generate a new image).
     * @param width - The width of the image.
     * @param height - The height of the image.
     * @param pixelColor - The default pixel color of the image.
     */
    constructor(width: number, height: number, pixelColor: number);

    //#endregion

    //#region read()

    /**
     * Read an image from a file.
     * @param src - The path to the file containing the file data.
     */
    static read(src: string): Promise<Jimp>;
    /**
     * Read an image from a file.
     * @param src - The path to the file containing the file data.
     * @param cb - A callback function when the file is read.
     */
    static read(src: string, cb: Jimp.Callback<Jimp>): Promise<Jimp>;

    /**
     * Read an image from a Buffer.
     * @param data - A Buffer containing the file data.
     */
    static read(data: Buffer): Promise<Jimp>;
    /**
     * Read an image from a Buffer.
     * @param data - A Buffer containing the file data.
     * @param cb - A callback function when the file is read.
     */
    static read(data: Buffer, cb: Jimp.Callback<Jimp>): Promise<Jimp>;

    //#endregion

    //#region Constants

    static AUTO: number;

    static MIME_PNG: string;
    static MIME_JPEG: string;
    static MIME_BMP: string;

    static PNG_FILTER_AUTO: number;
    static PNG_FILTER_NONE: number;
    static PNG_FILTER_SUB: number;
    static PNG_FILTER_UP: number;
    static PNG_FILTER_AVERAGE: number;
    static PNG_FILTER_PAETH: number;
    
    static RESIZE_NEAREST_NEIGHBOR: string;
    static RESIZE_BILINEAR: string;
    static RESIZE_BICUBIC: string;
    static RESIZE_HERMITE: string;
    static RESIZE_BEZIER: string;
    
    //#endregion

    //#region Helpers

    /**
     * A static helper method that converts RGBA values to a single integer value
     * @param r - The red value (0-255)
     * @param g - The green value (0-255)
     * @param b - The blue value (0-255)
     * @param a - The alpha value (0-255)
     * @returns an single integer colour value.
     */
    static rgbaToInt(r: number, g: number, b: number, a: number): number;
    /**
     * A static helper method that converts RGBA values to a single integer value.
     * @param r - The red value (0-255)
     * @param g - The green value (0-255)
     * @param b - The blue value (0-255)
     * @param a - The alpha value (0-255)
     * @param cb - A callback for when complete
     */
    static rgbaToInt(r: number, g: number, b: number, a: number, cb: Jimp.Callback<number>): any;

    /**
     * A static helper method that converts RGBA values to a single integer value.
     * @param i - A single integer value representing an RGBA colour (e.g. 0xFF0000FF for red)
     * @returns An object with the properties r, g, b and a representing RGBA values
     */
    static intToRGBA(i: number): Jimp.RGBA;
    /**
     * A static helper method that converts RGBA values to a single integer value.
     * @param i - A single integer value representing an RGBA colour (e.g. 0xFF0000FF for red).
     * @param cb - A callback for when complete
     */
    static intToRGBA(i: number, cb: Jimp.Callback<Jimp.RGBA>): any;

    /**
     * Limits a number to between 0 or 255.
     * @param n - A number
     * @returns - The number limited to between 0 or 255
     */
    static limit255(n: number): number;

    /**
     * Diffs two images and returns a report.
     * @param img1 - A Jimp image to compare.
     * @param img2 - A Jimp image to compare.
     * @returns An object { percent: percent similar, diff: a Jimp image highlighting differences }.
     */
    static diff(img1: Jimp, img2: Jimp): Jimp.Diff;

    /**
     * Diffs two images and returns a report.
     * @param img1 - A Jimp image to compare.
     * @param img2 - A Jimp image to compare.
     * @param threshold - A number, 0 to 1, the smaller the value the more sensitive the comparison (default: 0.1).
     * @returns An object { percent: percent similar, diff: a Jimp image highlighting differences }.
     */
    static diff(img1: Jimp, img2: Jimp, threshold: number): Jimp.Diff;

    /**
     * Calculates the hammering distance of two images based on their perceptual hash.
     * @param img1 - A Jimp image to compare.
     * @param img2 - A Jimp image to compare.
     * @returns A number ranging from 0 to 1, 0 means they are believed to be identical.
     */
    static distance(img1: Jimp, img2: Jimp): number;

    //#endregion

    //#region Public properties

    /** An object representing a bitmap in memory. */
    bitmap: Jimp.Bitmap;

    /** The quality to be used when saving JPEG images. */
    _quality: number;
    _deflateLevel: number;
    _filterType: number;

    /** Whether PNGs will be exported as RGB or RGBA. */
    _rgba: boolean;

    /** Default colour to use for new pixels. */
    _background: number;

    //#endregion

    //#region Setters methods

    /**
     * Creates a new image that is a clone of this one.
     * @returns The new Image.
     */
    clone(): this;
    /**
     * Creates a new image that is a clone of this one.
     * @param cb - A callback for when complete.
     */
    clone(cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the quality of the image when saving as JPEG format (default is 100).
     * @param n - The quality to use 0-100.
     * @returns this for chaining of methods.
     */
    quality(n: number): this;
    /**
     * Sets the quality of the image when saving as JPEG format (default is 100).
     * @param n - The quality to use 0-100.
     * @param cb - A callback for when complete.
     */
    quality(n: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the deflate level used when saving as PNG format (default is 9).
     * @param l - Deflate level to use 0-9. 0 is no compression. 9 (default) is maximum compression.
     * @returns this for chaining of methods.
     */
    deflateLevel(l: number): this;
    /**
     * Sets the deflate level used when saving as PNG format (default is 9).
     * @param l - Deflate level to use 0-9. 0 is no compression. 9 (default) is maximum compression.
     * @param cb - A callback for when complete.
     */
    deflateLevel(l: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the filter type used when saving as PNG format (default is automatic filters).
     * @param f - The quality to use -1-4.
     * @returns this for chaining of methods.
     */
    filterType(f: number): this;
    /**
     * Sets the filter type used when saving as PNG format (default is automatic filters).
     * @param f - The quality to use -1-4.
     * @param cb - A callback for when complete.
     */
    filterType(f: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the type of the image (RGB or RGBA) when saving as PNG format (default is RGBA).
     * @param bool - A Boolean, true to use RGBA or false to use RGB.
     * @returns this for chaining of methods.
     */
    rgba(bool: boolean): this;
    /**
     * Sets the type of the image (RGB or RGBA) when saving as PNG format (default is RGBA).
     * @param bool - A Boolean, true to use RGBA or false to use RGB.
     * @param cb - A callback for when complete.
     */
    rgba(bool: boolean, cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the default pixel color for this image.
     * @param hex - The int color for the default pixel color.
     * @returns this for chaining of methods.
     */
    background(hex: number): this;
    /**
     * Sets the default pixel color for this image.
     * @param hex - The int color for the default pixel color.
     * @param cb - A callback for when complete.
     */
    background(hex: number, cb: Jimp.Callback<Jimp>): any;

    //#endregion

    //#region Pixels Methods

    /**
     * Scanes through a region of the bitmap, calling a function for each pixel.
     * @param x - The x coordinate to begin the scan at.
     * @param y - The y coordiante to begin the scan at.
     * @param w - The width of the scan region.
     * @param h - The height of the scan region?
     * @param f  - A function to call on even pixel; the (x, y) position of the pixel
     * and the index of the pixel in the bitmap buffer are passed to the function
     * @returns this for chaining of methods
     */
    scan(x: number, y: number, w: number, h: number, f: (x: number, y: number, i: number) => any): this;
    /**
     * Scanes through a region of the bitmap, calling a function for each pixel.
     * @param x - The x coordinate to begin the scan at.
     * @param y - The y coordiante to begin the scan at.
     * @param w - The width of the scan region.
     * @param h - The height of the scan region?
     * @param f  - A function to call on even pixel; the (x, y) position of the pixel
     * and the index of the pixel in the bitmap buffer are passed to the function
     * @param cb - A callback for when complete
     */
    scan(x: number, y: number, w: number, h: number, f: (x: number, y: number, i: number) => any, cb: Jimp.Callback<Jimp>): any;

    /**
     * Returns the offset of a pixel in the bitmap buffer.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @returns - The index of the pixel or -1 if not found.
     */
    getPixelIndex(x: number, y: number): number;
    /**
     * Returns the offset of a pixel in the bitmap buffer.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @param cb - A callback for when complete.
     */
    getPixelIndex(x: number, y: number, cb: Jimp.Callback<number>): any;

    /**
     * Returns the hex colour value of a pixel.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @returns - The hex colour value of a pixel.
     */
    getPixelColor(x: number, y: number): number;
    /**
     * Returns the hex colour value of a pixel.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @param cb - A callback for when complete.
     */
    getPixelColor(x: number, y: number, cb: Jimp.Callback<number>): any;

    /**
     * Returns the hex colour value of a pixel.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @returns - The hex colour value of a pixel.
     */
    getPixelColour(x: number, y: number): number;
    /**
     * Returns the hex colour value of a pixel.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @param cb - A callback for when complete.
     */
    getPixelColour(x: number, y: number, cb: Jimp.Callback<number>): any;

    /**
     * Sets the hex colour value of a pixel.
     * @param hex - The int color to set a specified position.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @returns this for chaining of methods
     */
    setPixelColor(hex: number, x: number, y: number): this;
    /**
     * Sets the hex colour value of a pixel.
     * @param hex - The int color to set a specified position.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @param cb - A callback for when complete.
     */
    setPixelColor(hex: number, x: number, y: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Sets the hex colour value of a pixel.
     * @param hex - The int color to set a specified position.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @returns this for chaining of methods
     */
    setPixelColour(hex: number, x: number, y: number): this;
    /**
     * Sets the hex colour value of a pixel.
     * @param hex - The int color to set a specified position.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     * @param cb - A callback for when complete.
     */
    setPixelColour(hex: number, x: number, y: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Generates a perceptual hash of the image (in base64) <https://en.wikipedia.org/wiki/Perceptual_hashing>.
     * @returns a string representing the hash.
     */
    hash(): string;
    /**
     * Generates a perceptual hash of the image <https://en.wikipedia.org/wiki/Perceptual_hashing>.
     * @param base - number between 2 and 64 representing the base for the hash (e.g. 2 is binary, 10 is decimaal, 16 is hex, 64 is base 64). Defaults to 64.
     * @returns a string representing the hash.
     */
    hash(base: number): string;
    /**
     * Generates a perceptual hash of the image (in base64) <https://en.wikipedia.org/wiki/Perceptual_hashing>.
     * @param cb - A callback for when complete.
     */
    hash(cb: Jimp.Callback<string>): any;
    /**
     * Generates a perceptual hash of the image <https://en.wikipedia.org/wiki/Perceptual_hashing>.
     * @param base - number between 2 and 64 representing the base for the hash (e.g. 2 is binary, 10 is decimaal, 16 is hex, 64 is base 64). Defaults to 64.
     * @param cb - A callback for when complete.
     */
    hash(base: number, cb: Jimp.Callback<string>): any;

    //#endregion

    //#region Manipulation Methods

    /**
     * Crops the image at a given point to a give size.
     * @param x - The x coordinate to crop form.
     * @param y - The y coordiante to crop form.
     * @param w - The width of the crop region.
     * @param h - The height of the crop region.
     * @returns this for chaining of methods.
     */
    crop(x: number, y: number, w: number, h: number): this;
    /**
     * Crops the image at a given point to a give size.
     * @param x - The x coordinate to crop form.
     * @param y - The y coordiante to crop form.
     * @param w - The width of the crop region.
     * @param h - The height of the crop region.
     * @param cb - A callback for when complete.
     */
    crop(x: number, y: number, w: number, h: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Autocrop same color borders from this image.
     * @returns this for chaining of methods.
     */
    autocrop(): this;
    /**
     * Autocrop same color borders from this image.
     * @param cb - A callback for when complete.
     */
    autocrop(cb: Jimp.Callback<Jimp>): any;

    /**
     * Blits a source image on to this image.
     * @param src - The source Jimp instance.
     * @param x  - The x position to blit the image.
     * @param y  - The y position to blit the image.
     * @returns this for chaining of methods.
     */
    blit(src: Jimp, x: number, y: number): this;
    /**
     * Blits a source image on to this image.
     * @param src - The source Jimp instance.
     * @param x  - The x position to blit the image.
     * @param y  - The y position to blit the image.
     * @param cb - A callback for when complete.
     */
    blit(src: Jimp, x: number, y: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Blits a source image on to this image.
     * @param src - The source Jimp instance.
     * @param x  - The x position to blit the image.
     * @param y  - The y position to blit the image.
     * @param cropX  - The x position of the crop area.
     * @param cropY  - The y position of the crop area.
     * @param cropW  - The width of the crop area.
     * @param cropH  - The height of the crop area.
     * @returns this for chaining of methods.
     */
    blit(src: Jimp, x: number, y: number, cropX: number, cropY: number, cropW: number, cropH: number): this;
    /**
     * Blits a source image on to this image.
     * @param src - The source Jimp instance.
     * @param x  - The x position to blit the image.
     * @param y  - The y position to blit the image.
     * @param cropX  - The x position of the crop area.
     * @param cropY  - The y position of the crop area.
     * @param cropW  - The width of the crop area.
     * @param cropH  - The height of the crop area.
     * @param cb - A callback for when complete.
     */
    blit(src: Jimp, x: number, y: number, cropX: number, cropY: number, cropW: number, cropH: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Masks a source image on to this image using average pixel colour.
     * A completely black pixel on the mask will turn a pixel in the image completely transparent.
     * @param src - The source Jimp instance.
     * @param x  - The x position to mask the image.
     * @param y  - The y position to mask the image.
     * @returns this for chaining of methods.
     */
    mask(src: Jimp, x: number, y: number): this;
    /**
     * Masks a source image on to this image using average pixel colour.
     * A completely black pixel on the mask will turn a pixel in the image completely transparent.
     * @param src - The source Jimp instance.
     * @param x  - The x position to mask the image.
     * @param y  - The y position to mask the image.
     * @param cb - A callback for when complete.
     */
    mask(src: Jimp, x: number, y: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Composites a source image over to this image respecting alpha channels.
     * @param src - The source Jimp instance.
     * @param x  - The x position to compose the image.
     * @param y  - The y position to compose the image.
     * @returns this for chaining of methods.
     */
    composite(src: Jimp, x: number, y: number): this;
    /**
     * Composites a source image over to this image respecting alpha channels.
     * @param src - The source Jimp instance.
     * @param x  - The x position to compose the image.
     * @param y  - The y position to compose the image.
     * @param cb - A callback for when complete.
     */
    composite(src: Jimp, x: number, y: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Adjusts the brightness of the image.
     * @param val - The amount to adjust the brightness, a number between -1 and +1.
     * @returns this for chaining of methods.
     */
    brightness(val: number): this;
    /**
     * Adjusts the brightness of the image.
     * @param val - The amount to adjust the brightness, a number between -1 and +1.
     * @param cb - A callback for when complete.
     */
    brightness(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Adjusts the contrast of the image
     * @param val - The amount to adjust the contrast, a number between -1 and +1.
     * @returns this for chaining of methods.
     */
    contrast(val: number): this;
    /**
     * Adjusts the contrast of the image
     * @param val - The amount to adjust the contrast, a number between -1 and +1.
     * @param cb - A callback for when complete.
     */
    contrast(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Apply a posterize effect.
     * @param val - The effect level (> 2).
     * @returns this for chaining of methods.
     */
    posterize(val: number): this;
    /**
     * Apply a posterize effect.
     * @param val - The effect level (> 2).
     * @param cb - A callback for when complete.
     */
    posterize(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Inverts the image.
     * @returns this for chaining of methods.
     */
    invert(): this;
    /**
     * Inverts the image.
     * @param cb - A callback for when complete.
     */
    invert(cb: Jimp.Callback<Jimp>): any;

    /**
     * Flip the image.
     * @param horizontal  - The x position to blit the image.
     * @param vertical  - The y position to blit the image.
     * @returns this for chaining of methods.
     */
    mirror(horizontal: boolean, vertical: boolean): this;
    /**
     * Flip the image.
     * @param horizontal  - The x position to blit the image.
     * @param vertical  - The y position to blit the image.
     * @param cb - A callback for when complete.
     */
    mirror(horizontal: boolean, vertical: boolean, cb: Jimp.Callback<Jimp>): any;

    /**
     * Flip the image.
     * @param horizontal  - The x position to blit the image.
     * @param vertical  - The y position to blit the image.
     * @returns this for chaining of methods.
     */
    flip(horizontal: boolean, vertical: boolean): this;
    /**
     * Flip the image.
     * @param horizontal  - The x position to blit the image.
     * @param vertical  - The y position to blit the image.
     * @param cb - A callback for when complete.
     */
    flip(horizontal: boolean, vertical: boolean, cb: Jimp.Callback<Jimp>): any;

    /**
     * Applies a true Gaussian blur to the image (warning: this is VERY slow).
     * @param val - The pixel radius of the blur.
     * @returns this for chaining of methods.
     */
    gaussian(val: number): this;
    /**
     * Applies a true Gaussian blur to the image (warning: this is VERY slow).
     * @param val - The pixel radius of the blur.
     * @param cb - A callback for when complete.
     */
    gaussian(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * A fast blur algorithm that produces similar effect to a Gausian blur - but MUCH quicker.
     * @param val - The pixel radius of the blur.
     * @returns this for chaining of methods.
     */
    blur(val: number): this;
    /**
     * A fast blur algorithm that produces similar effect to a Gausian blur - but MUCH quicker.
     * @param val - The pixel radius of the blur.
     * @param cb - A callback for when complete.
     */
    blur(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Removes colour from the image using ITU Rec 709 luminance values.
     * @returns this for chaining of methods.
     */
    grayscale(): this;
    /**
     * Removes colour from the image using ITU Rec 709 luminance values.
     * @param cb - A callback for when complete.
     */
    grayscale(cb: Jimp.Callback<Jimp>): any;

    /**
     * Removes colour from the image using ITU Rec 709 luminance values.
     * @returns this for chaining of methods.
     */
    greyscale(): this;
    /**
     * Removes colour from the image using ITU Rec 709 luminance values.
     * @param cb - A callback for when complete.
     */
    greyscale(cb: Jimp.Callback<Jimp>): any;

    /**
     * Applies a sepia tone to the image.
     * @returns this for chaining of methods.
     */
    sepia(): this;
    /**
     * Applies a sepia tone to the image.
     * @param cb - A callback for when complete.
     */
    sepia(cb: Jimp.Callback<Jimp>): any;

    /**
     * Multiplies the opacity of each pixel by a factor between 0 and 1.
     * @param val - A number, the factor by wich to multiply the opacity of each pixel
     * @returns this for chaining of methods.
     */
    opacity(val: number): this;
    /**
     * Multiplies the opacity of each pixel by a factor between 0 and 1.
     * @param val - A number, the factor by wich to multiply the opacity of each pixel
     * @param cb - A callback for when complete.
     */
    opacity(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Fades each pixel by a factor between 0 and 1.
     * @param val - A number from 0 to 1. 0 will haven no effect. 1 will turn the image completely transparent.
     * @returns this for chaining of methods.
     */
    fade(val: number): this;
    /**
     * Fades each pixel by a factor between 0 and 1.
     * @param val - A number from 0 to 1. 0 will haven no effect. 1 will turn the image completely transparent.
     * @param cb - A callback for when complete.
     */
    fade(val: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Set the alpha channel on every pixel to fully opaque.
     * @returns this for chaining of methods.
     */
    opaque(): this;
    /**
     * Set the alpha channel on every pixel to fully opaque.
     * @param cb - A callback for when complete.
     */
    opaque(cb: Jimp.Callback<Jimp>): any;

    /**
     * Apply a ordered dithering effect and reduce colorspace to 656.
     * @returns this for chaining of methods.
     */
    dither565(): this;
    /**
     * Apply a ordered dithering effect and reduce colorspace to 656.
     * @param cb - A callback for when complete.
     */
    dither565(cb: Jimp.Callback<Jimp>): any;

    /**
     * Apply a ordered dithering effect and reduce colorspace to 656.
     * @returns this for chaining of methods.
     */
    dither16(): this;
    /**
     * Apply a ordered dithering effect and reduce colorspace to 656.
     * @param cb - A callback for when complete.
     */
    dither16(cb: Jimp.Callback<Jimp>): any;

    /**
     * Apply multiple color modification rules.
     * @param actions - List of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }.
     * @returns this for chaining of methods.
     */
    color(actions: Jimp.ColorAction[]): this;
    /**
     * Apply multiple color modification rules.
     * @param actions - List of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }.
     * @param cb - A callback for when complete.
     */
    color(actions: Jimp.ColorAction[], cb: Jimp.Callback<Jimp>): any;

    /**
     * Apply multiple color modification rules.
     * @param actions - List of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }.
     * @returns this for chaining of methods.
     */
    colour(actions: Jimp.ColorAction[]): this;
    /**
     * Apply multiple color modification rules.
     * @param actions - List of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }.
     * @param cb - A callback for when complete.
     */
    colour(actions: Jimp.ColorAction[], cb: Jimp.Callback<Jimp>): any;

    //#endregion

    //#region Resize Methos

    /**
     * Resizes the image to a set width and height using a 2-pass bilinear algorithm.
     * @param w - The width to resize the image to (or Jimp.AUTO).
     * @param h - The height to resize the image to (or Jimp.AUTO).
     * @returns this for chaining of methods.
     */
    resize(w: number, h: number): this;
    /**
     * Resizes the image to a set width and height using a 2-pass bilinear algorithm.
     * @param w - The width to resize the image to (or Jimp.AUTO).
     * @param h - The height to resize the image to (or Jimp.AUTO).
     * @param cb - A callback for when complete.
     */
    resize(w: number, h: number, cb: Jimp.Callback<Jimp>): any;
    /**
     * Resizes the image to a set width and height using a 2-pass bilinear algorithm.
     * @param w - The width to resize the image to (or Jimp.AUTO).
     * @param h - The height to resize the image to (or Jimp.AUTO).
     * @param mode - The resize mode.
     * @returns this for chaining of methods.
     */
    resize(w: number, h: number, mode: string): this;
    /**
     * Resizes the image to a set width and height using a 2-pass bilinear algorithm.
     * @param w - The width to resize the image to (or Jimp.AUTO).
     * @param h - The height to resize the image to (or Jimp.AUTO).
     * @param mode - The resize mode.
     * @param cb - A callback for when complete.
     */
    resize(w: number, h: number, mode: string, cb: Jimp.Callback<Jimp>): any;

    /**
     * Uniformly scales the image by a factor.
     * @param f the factor to scale the image by
     * @returns this for chaining of methods.
     */
    scale(f: number): this;
    /**
     * Uniformly scales the image by a factor.
     * @param f the factor to scale the image by
     * @param cb - A callback for when complete.
     */
    scale(f: number, cb: Jimp.Callback<Jimp>): any;
    /**
     * Uniformly scales the image by a factor.
     * @param f the factor to scale the image by
     * @param mode - The resize mode.
     * @returns this for chaining of methods.
     */
    scale(f: number, mode: string): this;
    /**
     * Uniformly scales the image by a factor.
     * @param f the factor to scale the image by
     * @param mode - The resize mode.
     * @param cb - A callback for when complete.
     */
    scale(f: number, mode: string, cb: Jimp.Callback<Jimp>): any;

    /**
     * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
     * @param w the width to resize the image to
     * @param h the height to resize the image to
     * @returns this for chaining of methods.
     */
    scaleToFit(w: number, h: number): this;
    /**
     * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
     * @param w the width to resize the image to
     * @param h the height to resize the image to
     * @param cb - A callback for when complete.
     */
    scaleToFit(w: number, h: number, cb: Jimp.Callback<Jimp>): any;
    /**
     * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
     * @param w the width to resize the image to
     * @param h the height to resize the image to
     * @param mode - The resize mode.
     * @returns this for chaining of methods.
     */
    scaleToFit(w: number, h: number, mode: string): this;
    /**
     * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
     * @param w the width to resize the image to
     * @param h the height to resize the image to
     * @param mode - The resize mode.
     * @param cb - A callback for when complete.
     */
    scaleToFit(w: number, h: number, mode: string, cb: Jimp.Callback<Jimp>): any;

    /**
     * Scale the image so that it fills the given width and height. Some parts of the image may be clipped.
     * @param w - The width to resize the image to.
     * @param h - The height to resize the image to.
     * @returns this for chaining of methods.
     */
    cover(w: number, h: number): this;
    /**
     * Scale the image so that it fills the given width and height. Some parts of the image may be clipped.
     * @param w - The width to resize the image to.
     * @param h - The height to resize the image to.
     * @param cb - A callback for when complete.
     */
    cover(w: number, h: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Scale the image to the largest size so that its width and height fits inside the given width and height.
     * @param w - The width to resize the image to.
     * @param h - The height to resize the image to.
     * @returns this for chaining of methods.
     */
    contain(w: number, h: number): this;
    /**
     * Scale the image to the largest size so that its width and height fits inside the given width and height.
     * @param w - The width to resize the image to.
     * @param h - The height to resize the image to.
     * @param cb - A callback for when complete.
     */
    contain(w: number, h: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Uniformly scales the image by a factor.
     * @param f - The width to resize the image to.
     * @returns this for chaining of methods.
     */
    scale(f: number): this;
    /**
     * Uniformly scales the image by a factor.
     * @param f - The width to resize the image to.
     * @param cb - A callback for when complete.
     */
    scale(f: number, cb: Jimp.Callback<Jimp>): any;
    
    /**
     * Uniformly scales the image by a factor.
     * @param f - The width to resize the image to.
     * @param cb - A callback for when complete.
     */
    contain(f: number, cb: Jimp.Callback<Jimp>): any;

    /**
     * Rotates the image clockwise by a number of degrees.
     * The width and height of the image will be resized appropriately.
     * @param deg - The number of degress to rotate the image by.
     * @returns this for chaining of methods.
     */
    rotate(deg: number): this;
    /**
     * Rotates the image clockwise by a number of degrees.
     * The width and height of the image will be resized appropriately.
     * @param deg - The number of degress to rotate the image by.
     * @param cb - A callback for when complete.
     */
    rotate(deg: number, cb: Jimp.Callback<Jimp>): any;
    /**
     * Rotates the image clockwise by a number of degrees.
     * @param deg - The number of degress to rotate the image by.
     * @param resize - A boolean, if false then the width and height of the image will not be changed.
     * @returns this for chaining of methods.
     */
    rotate(deg: number, resize: boolean): this;
    /**
     * Rotates the image clockwise by a number of degrees.
     * @param deg - The number of degress to rotate the image by.
     * @param resize - A boolean, if false then the width and height of the image will not be changed.
     * @param cb - A callback for when complete.
     */
    rotate(deg: number, resize: boolean, cb: Jimp.Callback<Jimp>): any;

    //#endregion

    //#region Write

    /**
     * Converts the image to a buffer.
     * @param mime - The mime type of the image buffer to be created
     * @param cb - A Node-style function to call with the buffer as the second argument
     * @returns this for chaining of methods
     */
    getBuffer(mime: string, cb: Jimp.Callback<Buffer>): this;

    /**
     * Converts the image to a base 64 string
     * @param mime - The mime type of the image buffer to be created
     * @param cb - A Node-style function to call with the buffer as the second argument
     * @returns this for chaining of methods
     */
    getBase64(mime: string, cb: Jimp.Callback<Buffer>): this;

    /**
     * Writes the image to a file.
     * @param path - A path to the destination file (either PNG or JPEG).
     * @returns this for chaining of methods
     */
    write(path: string): this;
    /**
     * Writes the image to a file.
     * @param path - A path to the destination file (either PNG or JPEG).
     * @param cb - A function to call when the image is saved to disk.
     * @returns this for chaining of methods
     */
    write(path: string, cb: Jimp.Callback<Jimp>): this;

    //#endregion
}

declare namespace Jimp {
    export type Callback<T> = (err: Error, result: T) => any;

    export interface RGBA {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    export interface Diff {
        image: Jimp;
        percent: number;
    }

    export interface ColorAction {
        apply: string;
        params: any[];
    }

    /** An object representing a bitmap in memory. */
    export interface Bitmap {
        /** A buffer of the bitmap data. */
        data: Buffer;
        /** The width of the image in pixels. */
        width: number;
        /** The height of the image in pixels. */
        height: number;
    }
}

export = Jimp;
