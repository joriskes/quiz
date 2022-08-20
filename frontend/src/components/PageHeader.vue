<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="`/${locale}`">
          <img src="../assets/flying-kiwi-logo.svg" width="200" height="57" alt="Flying Kiwi Logo" />
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${locale}`">{{ t('navigation.home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${locale}/about`">{{ t('navigation.about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${locale}/contact`">{{ t('navigation.contact') }}</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" :to="`/${locale}/work`">{{ t('navigation.work') }}</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="`/${locale}/careers`">{{ t('navigation.careers') }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

//imports
import { useI18n } from "vue-i18n";

//data
const { t, locale } = useI18n();

</script>

<style lang="scss" scoped>
</style>
