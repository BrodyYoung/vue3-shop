<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <homeProduct />

  <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    <HomeNew />
  </HomePanel>

  <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <HomeHot />
  </HomePanel>
</template>
