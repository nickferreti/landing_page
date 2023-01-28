<template>
  <v-container>
    <v-row class="justify-center mt-4 mx-auto">
      <p>
        Olá, me chamo Nickolas, vim com a criação deste site para benefício da divulgação de minhas artes e também de conhecidos meus,
        futuramente pretendo melhorar o site a ponto de deixar ele disponivel na web como uma forma de divulgação de experiências e artes.
        <br>Sempre fui apaixonado pelo front-end e criação do layout dos sites, pois como designer gráfico tenho certas tendências a gostar
        mais dessa área do design, e como um designer, vejo que existem poucos sites dedicados apenas para a divulgação de artes e dos portfólios
        dos artistas, e com essa visão decidi criar esse site que visa o designer e suas ideias de produto e/ou projeto.
        <br>Caso exista alguma dúvida sobre o projeto, me mande um e-mail que buscarei responder o mais rapido possivel, o link estará logo abaixo.
      </p>
    </v-row>
    <v-row>
      <v-btn @click="" class="justify-start mx-auto">
        Meu e-mail
      </v-btn>
    </v-row>
    <v-footer fixed>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Nickolas Ferreti</strong>
      <v-icon class="icone">
        mdi-domain
      </v-icon>
    </v-col>
  </v-footer>
  </v-container>
</template>

<style>
.icone {
  margin-bottom: 3px;
  margin-left: 2px;
}
</style>