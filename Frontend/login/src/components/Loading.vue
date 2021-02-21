<template>
    <v-overlay
          :z-index="0"
          :absolute="true"
          :value="isLoading"
          :opacity="0.5"
        >
            <div class="text-center">
                <p>
                    Carregando...
                </p>
                <v-progress-circular
                    :size="50"
                    indeterminate
                    color="primary"
                    class="text-center"
                />
            </div>
        </v-overlay>
</template>
<script>
export default {
    name: 'Loading',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        textLoading: {
            type: String,
            default: null
        }
    }
}
</script>