<template>
    <product-attr-detail :is-edit='false'></product-attr-detail>
</template>

<script>
import ProductAttrDetail from './compoents/ProductAttrDetail'
export default {
    name: 'addProductAttr',
    components: {
        ProductAttrDetail
    }
}
</script>