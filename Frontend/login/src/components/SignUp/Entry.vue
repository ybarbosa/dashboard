<template>
    <v-container
        fluid
        class="ma-0 pa-0 body d-inline-flex .d-md-flex align-center"
    >
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
            >
                <v-row
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="12"
                        lg="8"
                    >
                        <v-card
                            elevation="3"
                            max-width="600px"
                        >
                            <v-card-title
                                class="mb-4"
                            >
                                <v-sheet
                                    color="#4A148C"
                                    height="10"
                                    width="100%"
                                />
                            </v-card-title>
                            <v-card-text>
                                <span
                                    class="text-h6"
                                >
                                    Inscreva-se
                                </span>
                            </v-card-text>
                            <v-card-text>
                                <v-row
                                    no-gutters
                                >
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Email"
                                            placeholder="Digite seu email"
                                            outlined
                                        />
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Nascimento"
                                            placeholder="Digite seu nascimento"
                                            outlined
                                        />
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Senha"
                                            placeholder="Digite sua senha"
                                            outlined
                                        />
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Confirmar Senha"
                                            placeholder="Confirme sua senha"
                                            outlined
                                        />
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-row
                                    no-gutters
                                    
                                >
                                    <v-col
                                        cols="12"
                                        class="text-end pr-3"
                                    >
                                        <v-btn
                                            outlined
                                            color="#4A148C"
                                            class="mr-4"
                                            large
                                            @click="$router.push('/')"
                                        >
                                            Voltar
                                        </v-btn>
                                        <v-btn
                                            color="#4A148C"
                                            class="white--text"
                                            large
                                        >
                                            Cadastrar
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
export default {
    name: 'SignUp',
    methods: {
    }
}
</script>
<style scoped>
.body {
    min-height: calc(100vh - 70px)
}
</style>