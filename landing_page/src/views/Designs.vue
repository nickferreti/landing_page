<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="4">
        <v-card max-height="150" max-width="250">
          <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" max-height="150" max-width="250"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" class="mx-auto justify-center imagem">
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-footer fixed class="mt-16">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Nickolas Ferreti</strong>
      <v-icon class="icone">
        mdi-domain
      </v-icon>
    </v-col>
  </v-footer>
  </v-container>
</template>

<script>


export default {
  name: 'Designs',

}
</script>

<style>
.imagem {
  opacity: 50%;

}
.imagem:hover {
  opacity: 100%;

}
.icone {
  margin-bottom: 3px;
  margin-left: 2px;
}
</style>