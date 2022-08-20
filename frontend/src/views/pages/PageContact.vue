<template>
  <main id="page-contact">
    <strapi-data endpoint="page-contact" v-slot="{ data }" :populate="['seo']">
      <template v-if="data">
        <site-head :title="`${data.attributes.title} - Flying Kiwi`" :seo="data.attributes.seo" />
        <div>
          <h1>{{ data.attributes.title }}</h1>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4">
                <div v-html="data.attributes.content"></div>
                <h3>Flying Kiwi</h3>
                <address>
                  Tuinstraat 16<br />
                  5427 PR Boekel<br />
                  <br />
                  <a href="tel:0031492325750">+31 (0)492 32 57 50</a><br />
                  <a href="mailto:info@flyingkiwi.nl">info@flyingkiwi.nl</a>
                </address>
                <h3>Volg ons</h3>
                <a href="https://www.instagram.com/flyingkiwi_nl/" target="_blank">Instagram</a><br />
                <a href="https://www.facebook.com/FlyingKiwi.nl" target="_blank">Facebook</a><br />
                <a href="http://www.linkedin.com/company/flying-kiwi" target="_blank">LinkedIn</a>
              </div>

              <div class="col-lg-6 offset-lg-1">
                <form>
                  <div class="mb-3">
                    <label :for="`name`" class="form-label">Name</label>
                    <input :id="`name`" type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Bericht</label>
                    <textarea class="form-control" name="" id="message" rows="5"></textarea>
                  </div>

                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">
                      Ik ga akkoord met het
                      <router-link aria-current="page" :to="`/${locale}/privacy-policy`" target="_blank">privacybeleid
                      </router-link>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Verzenden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>

<style lang="scss" scoped>
</style>
