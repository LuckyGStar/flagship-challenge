# Flagship Coding Challenge Task A

## Requirements
Product page. Replace add to cart form with a custom form that allows the customer to
add multiple variants of the same product at the same time using the Ajax API.
Variant information should be presented in the following way (feel free to style the form as you like)
That table should list all the variants of the product, showing the SKU and price of each one, followed by an input to set the desired quantity of the product. If some particular variant is sold out, the corresponding input should be disabled. If all the variants are sold out, the add to cart button should be disabled.

## Prerequisites
- Make sure browser ready for testing.
- Visit store with password so that you can visit other pages without typing passord.

## Getting Started
1. Visit live site.
```
https://flagship-test-wang.myshopify.com
```
2. Type password and save session.
```
nawnto
```
3. Visit a product with 3 available variants. (full inventories)
```
https://flagship-test-wang.myshopify.com/products/the-videographer-snowboard
```
4. Try to update quantities of variants and click `Add to cart`.
- If you type quantities which is smaller than available inventories, it will add items to the cart successfully. [screenshot](https://prnt.sc/Nxc9sB2uhSDj)
- If you type quantities which is bigger than available inventories, it will prevent you from add to cart and show an error notification. [screenshot](https://prnt.sc/kLd6FnXJAk31)
- If you haven't typed any quantities and all values are 0, it will prevent you from add to cart and show an error notification. [screenshot](https://prnt.sc/qN4bIXwFibH4)

5. Visit a product with partially available variants. (some of 3 variants are without enough inventories) [screenshot](https://prnt.sc/zZACYtnU1LNh)
```
https://flagship-test-wang.myshopify.com/products/the-videographer-snowboard-partially-available
```
6. Try to update quantities of variants and click `Add to cart`.
- Variants inputs with unavailable inventories will be disabled by default so that you cannot add/update quantities. [screenshot](https://prnt.sc/WGwLUtZ86T8g)

7. Visit a product with unavailable variants. (all of the variants are without enough inventories) [screenshot](https://prnt.sc/iiEgICzRtULo)
```
https://flagship-test-wang.myshopify.com/products/the-videographer-snowboard-non-available
```

8. Try to update quantities of variants and click `Add to cart`.
- All variant inputs are disabled. [screenshot](https://prnt.sc/dffa1kai7zO3)
- `Add to cart` button is disabled. [screenshot](https://prnt.sc/dffa1kai7zO3)

# Flagship Coding Challenge Task B

## Requirements
In the store define a metaobject named Dimensions with the following properties.Also in the store, define a variant metafield named information.dimensions . The type of this metafield should be a metaobject reference to the previously created Dimensions metaobject.
After defining both metafields. Create a new product template (based on the default product template from Dawn theme). This template should include a section that renders the following table, using the metaobject information when the product has the information.dimensions metafield defined (feel free to style the table as you like). Actual values should be obtained from the corresponding fields from the metaobject referenced by the variant.:

## Prerequisites
- Make sure browser ready for testing.
- Visit store with password so that you can visit other pages without typing passord.

## Getting Started
1. Visit the product with metafields setup properly and new product template.
```
https://flagship-test-wang.myshopify.com/products/the-videographer-snowboard-variants
```

2. Try to change the active variant by clicking the product options.
- It will update the variant dimensions table with active variant selected. [screenshot](https://prnt.sc/6nf-7YlNUMMT)
- MetaObject definition. [screenshot](https://prnt.sc/6D-uhMVVxaOf)
- MetaField definition. [screenshot](https://prnt.sc/3nKMyD1TfBUU)

# Flagship Coding Challenge Task C

## Requirements
Create a new Section named “news-carousel.liquid”, where 3 different types of blocks of information will be shown, configured with the Shopify CMS. The section has to be in the home page.
There will be 3 different blocks: campaign, new-product, news. All of these blocks will have the same attributes/settings:
- Title (text)
- Description (textarea)
- Featured (checkbox)

The section has to render all the different blocks, showing the title and description. The title for the campaign has to be red, the title for the new-product has to be blue and the title for the news has to be green. Blocks who have the “Featured” attribute enabled/selected, have to appear first in the list.

## Prerequisites
- Make sure browser ready for testing.
- Visit store with password so that you can visit other pages without typing passord.

## Getting Started
1. Visit the home page of the website.
```
https://flagship-test-wang.myshopify.com/
```
2. The `new-carousels` section is being rendered.
- This section will have 3 blocks with proper settings. (`News` block is a `featured` one) [screenshot](https://prnt.sc/Cbz_H27GQR1r)
- Try to check mobile device width for responsive. [screenshot](https://prnt.sc/S2PTbAvvmkV3)
- Customer settings. [screenshot](https://prnt.sc/Yu_iqtSBzlYX)
- Block settings. [screenshot](https://prnt.sc/Op76I5g-R3PZ)

# Flagship Coding Challenge Task D

## Requirements
Using a Admin API access token, that can be generated in the development store, create a script in Node that will create a product metafield (namespace: global, key: test, type: integer), if the metafield does not exist, the metafield value should be 0, if the metafield already exists, add +1 to the value. The script is executed manually.

## Prerequisites
- Make sure you have installed latest version of [node](https://nodejs.org/en/).

## Getting Started
1. Install dependencies.
```bash
$ npm install
```

2. Make sure .env file is setup properly.
```bash
$ cp .env.example .env
```

3. Environment file (.env) template.
```
SHOPIFY_STORE_URL=***.myshopify.com
SHOPIFY_ACCESS_TOKEN=
SHOPIFY_PRODUCT_ID=9688409407776
SHOPIFY_API_VERSION=2024-10
METAFIELD_NAMESPACE=global
METAFIELD_KEY=test
METAFIELD_TYPE=number_integer
```

4. Run script.
```bash
$ npm run start
```

5. It will update metafield of the product.
- If metafield doesn't exist, it will create a new one with value 0.
- If metafield exists already, it will increase it's value by 1. [screenshot](https://prnt.sc/FAWgOe5Epdhg)

## Reference
- [Shopify ](https://aviationstack.com/documentation)

Thank you! :star_struck:
