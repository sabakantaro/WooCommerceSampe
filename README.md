# WooCommerce - Third Party API Integration

## Overview

Woocommerce, open-source e-commerce plugin for WordPress, is designed for small to large-sized online merchants using WordPress.
It helps us to manage your inventory, take secure payments, manage shipping, and will even apply taxes accordingly.

In conclusion, WooCommerce is a powerful e-commerce platform that can be used to sell anything from physical products to digital downloads.

## Benefits

- Real-time Updates: Immediate synchronization between WooCommerce and Third Party API.
- Automatic Synchronization: Eliminates the need for manual data entry.

## Example usage

- When a new product is created in WooCommerce, the product is automatically created in Third Party API.
- When an product is updated in WooCommerce, the product is automatically updated in Third Party API.
- When an product is deleted in WooCommerce, the product is automatically deleted in Third Party API.
  etc.

## Prerequisites

- WooCommerce Store
- Third Party API API

## Setup

### WooCommerce Webhook Configuration

1. Login to WordPress admin and navigate to `WooCommerce` > `Settings` > `Advanced` > `Webhooks`.
2. Create a new webhook.
3. Set the `Delivery URL` to point to the Third Party API API endpoint.

### Third Party API API Configuration

1. Create endpoints to handle incoming data from WooCommerce.

### Next tasks (Sep 7, 2023)

1. Create a new order in WooCommerce with Webhook (Check the JSON data).
2. Create a new order in Third Party API with Rest API (Using API Key and Postman).
3. After receiving test account of the Third Party API, test the API with the test account.

# WooCommerce API

## Authentication

WooCommerce uses a key-based authentication system to access the API. You can create API keys from the WooCommerce admin.

### Creating API Keys

1. Login to WordPress admin and navigate to `WooCommerce` > `Settings` > `Advanced` > `REST API`.
2. Click on `Add Key` button.
3. Enter a description for the API key.
4. Select the user you would like to generate a key for in the `User` field.
5. Select the `Permissions` for this API key.
6. Click on `Generate API Key` button.
7. Copy the generated `Consumer Key` and `Consumer Secret`.

## Orders

### Create an Order

Create a new order in WooCommerce.
[WooCommerce REST API document](https://woocommerce.github.io/woocommerce-rest-api-docs/?shell#create-an-order)

POST Order:

```zsh
curl -X POST https://woo-superbly-swag-glitter.wpcomstaging.com/wp-json/wc/v3/orders \
    -u "ck_4dff468e60ced188ae64c8887fb781bf2941696f:cs_0da9a8c750f6c92990f2918fdf4e4ee805d847c7" \
    -H "Content-Type: application/json" \
    -d '{
  "payment_method": "bacs",
  "payment_method_title": "Direct Bank Transfer",
  "set_paid": true,
  "billing": {
    "first_name": "John",
    "last_name": "Doe",
    "address_1": "969 Market",
    "address_2": "",
    "city": "San Francisco",
    "state": "CA",
    "postcode": "94103",
    "country": "US",
    "email": "john.doe@example.com",
    "phone": "(555) 555-5555"
  },
  "shipping": {
    "first_name": "John",
    "last_name": "Doe",
    "address_1": "969 Market",
    "address_2": "",
    "city": "San Francisco",
    "state": "CA",
    "postcode": "94103",
    "country": "US"
  },
  "line_items": [
    {
      "product_id": 93,
      "quantity": 2
    },
    {
      "product_id": 22,
      "variation_id": 23,
      "quantity": 1
    }
  ],
  "shipping_lines": [
    {
      "method_id": "flat_rate",
      "method_title": "Flat Rate",
      "total": "10.00"
    }
  ]
}'
```

GET Order:

```zsh
curl -X GET https://woo-superbly-swag-glitter.wpcomstaging.com/wp-json/wc/v3/orders/78 \
    -u "ck_4dff468e60ced188ae64c8887fb781bf2941696f:cs_0da9a8c750f6c92990f2918fdf4e4ee805d847c7"
```

Response:

```json
{
  "id": 78,
  "parent_id": 0,
  "status": "completed",
  "currency": "USD",
  "version": "8.0.3",
  "prices_include_tax": false,
  "date_created": "2023-09-08T14:10:09",
  "date_modified": "2023-09-08T14:10:09",
  "discount_total": "0.00",
  "discount_tax": "0.00",
  "shipping_total": "10.00",
  "shipping_tax": "0.00",
  "cart_tax": "0.00",
  "total": "10.00",
  "total_tax": "0.00",
  "customer_id": 0,
  "order_key": "wc_order_45CPW1gjHLE26",
  "billing": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "",
    "address_1": "969 Market",
    "address_2": "",
    "city": "San Francisco",
    "state": "CA",
    "postcode": "94103",
    "country": "US",
    "email": "john.doe@example.com",
    "phone": "(555) 555-5555"
  },
  "shipping": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "",
    "address_1": "969 Market",
    "address_2": "",
    "city": "San Francisco",
    "state": "CA",
    "postcode": "94103",
    "country": "US",
    "phone": ""
  },
  "payment_method": "bacs",
  "payment_method_title": "Direct Bank Transfer",
  "transaction_id": "",
  "customer_ip_address": "",
  "customer_user_agent": "",
  "created_via": "rest-api",
  "customer_note": "",
  "date_completed": "2023-09-08T14:10:09",
  "date_paid": "2023-09-08T14:10:09",
  "cart_hash": "",
  "number": "78",
  "meta_data": [],
  "line_items": [
    {
      "id": 12,
      "name": "",
      "product_id": 0,
      "variation_id": 0,
      "quantity": 2,
      "tax_class": "",
      "subtotal": "0.00",
      "subtotal_tax": "0.00",
      "total": "0.00",
      "total_tax": "0.00",
      "taxes": [],
      "meta_data": [],
      "sku": null,
      "price": 0,
      "image": {
        "id": 0,
        "src": ""
      },
      "parent_name": null,
      "bundled_by": "",
      "bundled_item_title": "",
      "bundled_items": []
    },
    {
      "id": 13,
      "name": "",
      "product_id": 0,
      "variation_id": 0,
      "quantity": 1,
      "tax_class": "",
      "subtotal": "0.00",
      "subtotal_tax": "0.00",
      "total": "0.00",
      "total_tax": "0.00",
      "taxes": [],
      "meta_data": [],
      "sku": null,
      "price": 0,
      "image": {
        "id": 0,
        "src": ""
      },
      "parent_name": null,
      "bundled_by": "",
      "bundled_item_title": "",
      "bundled_items": []
    }
  ],
  "tax_lines": [],
  "shipping_lines": [
    {
      "id": 14,
      "method_title": "Flat Rate",
      "method_id": "flat_rate",
      "instance_id": "",
      "total": "10.00",
      "total_tax": "0.00",
      "taxes": [],
      "meta_data": []
    }
  ],
  "fee_lines": [],
  "coupon_lines": [],
  "refunds": [],
  "payment_url": "https://woo-superbly-swag-glitter.wpcomstaging.com/checkout/order-pay/78/?pay_for_order=true&key=wc_order_45CPW1gjHLE26",
  "is_editable": false,
  "needs_payment": false,
  "needs_processing": false,
  "date_created_gmt": "2023-09-08T21:10:09",
  "date_modified_gmt": "2023-09-08T21:10:09",
  "date_completed_gmt": "2023-09-08T21:10:09",
  "date_paid_gmt": "2023-09-08T21:10:09",
  "gift_cards": [],
  "currency_symbol": "$",
  "_links": {
    "self": [
      {
        "href": "https://woo-superbly-swag-glitter.wpcomstaging.com/wp-json/wc/v3/orders/78"
      }
    ],
    "collection": [
      {
        "href": "https://woo-superbly-swag-glitter.wpcomstaging.com/wp-json/wc/v3/orders"
      }
    ]
  }
}
```
