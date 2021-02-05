<template>
    <v-container>
        <v-row
            justify="center"
        >
            <v-col
                cols="10"
                sm="8"
                lg="6"
            >
                <v-card
                    elevation="3"
                >
                    <v-card-title>
                            <v-avatar
                                size="80px"
                            >
                                <img
                                    src="https://i.postimg.cc/zXdm4mb2/login.png"
                                    alt="icon"
                                >
                            </v-avatar>
                    </v-card-title>
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
                            >
                                <v-btn
                                    outlined
                                    color="primary"
                                >
                                    Acessar
                                </v-btn>
                                <google-login
                                    :params="params"
                                    :onSuccess="onSuccess"
                                    :renderParams="renderParams"
                                />
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>

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
 
            //  Obtém apenas as informações do usuário: id, nome, imageUrl e email
            console . log ( googleUser . getBasicProfile ( ) ) ;
        }
    }
}
</script>