import 'dotenv/config'
import axios from 'axios'

const {
  SHOPIFY_STORE_URL,
  SHOPIFY_ACCESS_TOKEN,
  SHOPIFY_PRODUCT_ID,
  SHOPIFY_API_VERSION,
  METAFIELD_NAMESPACE,
  METAFIELD_KEY,
  METAFIELD_TYPE,
} = process.env

const BASE_URL = `https://${SHOPIFY_STORE_URL}/admin/api/${SHOPIFY_API_VERSION}`

const checkAndUpdateMetafields = async () => {
  const apiUrl = `${BASE_URL}/products/${SHOPIFY_PRODUCT_ID}/metafields.json`
  const response = await axios.get(apiUrl, {
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
  })

  const productMetafields = parseResponse(response)
  const existingMetafield =
    productMetafields.find(
      metafield => metafield.namespace === METAFIELD_NAMESPACE && metafield.key === METAFIELD_KEY
    )

  if (existingMetafield) {
    await updateMetafield(existingMetafield)
  } else {
    await createMetafield()
  }
}

const parseResponse = (response) => {
  return response?.data?.metafields
}

const updateMetafield = async (metafield) => {
  const updatedValue = parseInt(metafield.value) + 1
  const apiUrl = `${BASE_URL}/metafields/${metafield.id}.json`

  await axios.put(apiUrl, {
    metafield: {
      id: metafield.id,
      value: updatedValue,
    },
  },
  {
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
  })
}

const createMetafield = async () => {
  const apiUrl = `${BASE_URL}/products/${SHOPIFY_PRODUCT_ID}/metafields.json`

  await axios.post(apiUrl, {
    metafield: {
      namespace: METAFIELD_NAMESPACE,
      key: METAFIELD_KEY,
      value: 0,
      type: METAFIELD_TYPE,
    },
  },
  {
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
  })
}

checkAndUpdateMetafields()
