<template>
    <v-snackbar
      :value="isVisible"
      top
    >
      {{ msg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="isVisible = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
    name: 'NotificaoErro',
    props: {
        msg: {
            type: String,
            default: ''
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    }
}
</script>