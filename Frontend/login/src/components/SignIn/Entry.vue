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
                            >
                                    <v-sheet
                                        color="#4A148C"
                                        height="10"
                                        width="100%"
                                    />
                            </v-card-title>
                            <v-card-actions
                            class="mt-5"
                            >
                                <v-row
                                    no-gutters
                                    justify="center"
                                >
                                    <v-col
                                        cols="12"
                                    >
                                        
                                        <v-btn
                                            color="primary"
                                            x-large
                                        >
                                            
                                            <google-login
                                                :params="params"
                                                :onSuccess="onSuccess"
                                            >
                                                <v-icon
                                                    color="white"
                                                    class="mr-4"
                                                >
                                                    mdi-google
                                                </v-icon>
                                                Faça login com o google
                                            </google-login>
                                        </v-btn>
                                    </v-col>
                                    <v-col
                                        cols="10"
                                        class="mt-10 mb-8"
                                    >
                                        <v-divider />
                                    </v-col>
                                </v-row>
                            </v-card-actions>
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
                                            label="Senha"
                                            placeholder="Digite sua senha"
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
                                            @click="$router.push('/signup')"
                                        >
                                            Cadastrar
                                        </v-btn>
                                        <v-btn
                                            color="#4A148C"
                                            class="white--text"
                                            large
                                        >
                                            Acessar
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
import GoogleLogin from 'vue-google-login'
export default {
    name: 'SignIn',
    components: {
        'google-login': GoogleLogin
    },
    data: () => {
        return {
            params: { 
                client_id : "436083396524-n1qpl2fbpjmlv8r3848re7ho3gds2j09.apps.googleusercontent.com" 
            } ,
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods : { 
        onSuccess ( googleUser ) { 
            console . log ( googleUser ) ;
            console.log (googleUser.getBasicProfile()) ;
        }
    }
}
</script>
<style scoped>
.body {
    min-height: calc(100vh - 70px)
}
</style>