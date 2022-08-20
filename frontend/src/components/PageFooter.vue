<template>
  <footer>
    <section id="top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <router-link class="footer-brand" :to="`/${locale}`">
              <img src="../assets/flying-kiwi-logo.svg" width="200" height="57" alt="Flying Kiwi Logo" />
            </router-link>
          </div>
          <div class="col-lg-6">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="`/${locale}`">
                  {{ t("navigation.home") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="`/${locale}/contact`">
                  {{ t("navigation.contact") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="`/${locale}/work`">
                  {{ t("navigation.work") }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h3>Contact</h3>
            <address>
              Flying Kiwi<br />
              Tuinstraat 16<br />
              5427 PR Boekel<br />
              <br />
              <a href="tel:0031492325750">+31 (0)492 32 57 50</a><br />
              <a href="mailto:info@flyingkiwi.nl">info@flyingkiwi.nl</a>
            </address>
          </div>
          <div class="col-lg-3">
            <h3>Volg ons</h3>
            <a href="https://www.instagram.com/flyingkiwi_nl/" target="_blank">Instagram</a><br />
            <a href="https://www.facebook.com/FlyingKiwi.nl" target="_blank">Facebook</a><br />
            <a href="http://www.linkedin.com/company/flying-kiwi" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <section id="bottom">
      &copy; {{ new Date().getFullYear() }} Flying Kiwi
      <router-link class="nav-link" aria-current="page" :to="`/${locale}/privacy-policy`">
        {{ t("navigation.privacy-policy") }}
      </router-link>
    </section>
  </footer>
</template>

<script setup lang="ts">

//imports
import { useI18n } from "vue-i18n";

//data
const { t, locale } = useI18n();
</script>

<style lang="scss" scoped>
</style>
