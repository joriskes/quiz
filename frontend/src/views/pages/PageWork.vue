<template>
  <main id="page-work">
    <strapi-data endpoint="page-work" v-slot="{ data }" :populate="['seo', '*', 'featuredImage']">
      <template v-if="data">
        <site-head :title="`${data.attributes.title} - Flying Kiwi`" :seo="data.attributes.seo" />

        <div>
          <h1>{{ data.attributes.title }}</h1>
          <div v-html="data.attributes.content"></div>

          <router-view v-slot="{ Component, route }">
            <div>
              <strapi-data endpoint="work" v-slot="{ data }" :populate="['*', 'featuredImage']">
                <template v-if="data">
                  <component :is="Component" :key="route.path" :list="data" />
                </template>
              </strapi-data>
            </div>
          </router-view>

        </div>
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
</script>
