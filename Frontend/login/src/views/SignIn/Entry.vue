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
                                            outlined
                                            name="email"
                                            label="Email"
                                            placeholder="Digite seu email"
                                            v-validate="'required|email'"
                                            v-model="email"
                                        />
                                        <div
                                            v-show="errors.has('email')"
                                        >
                                            <v-alert
                                                dense
                                                text
                                                type="error"
                                                class="mt-n3 mb-3"
                                            >
                                                {{ errors.first('email') }}
                                            </v-alert>
                                        </div>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            outlined
                                            label="Senha"
                                            name="password"
                                            placeholder="Digite sua senha"
                                            type="password"
                                            v-validate="'required|min:3'"
                                            v-model="password"
                                        />
                                        <div
                                            v-show="errors.has('password')"
                                        >
                                            <v-alert
                                                dense
                                                text
                                                type="error"
                                                class="mt-n3 mb-3"
                                            >
                                                {{ errors.first('password') }}
                                            </v-alert>
                                        </div>
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
                                            @click="goSignUp"
                                        >
                                            Cadastrar
                                        </v-btn>
                                        <v-btn
                                            color="#4A148C"
                                            class="white--text"
                                            large
                                            @click="submitUser"
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
        <the-loading 
            :isLoading="isLoading"
        />
        <the-notification
            :isVisible="isVisibleNotification"
            :msg="textError"
        />
    </v-container>
</template>
<script>
import GoogleLogin from 'vue-google-login'
export default {
    name: 'SignIn',
    props: {
        callback: {
            type: String,
            default: null
        }
    },
    components: {
        'google-login': GoogleLogin
    },
    data: () => {
        return {
            params: { 
                client_id : "436083396524-n1qpl2fbpjmlv8r3848re7ho3gds2j09.apps.googleusercontent.com" 
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            },
            email: null,
            password: null,
            isLoading: false,
            isVisibleNotification: false,
            textError: null
        }
    },
    methods : {
        goSignUp () {
            this.$router.push({
                path: 'signUp',
                query: {
                    callback: this.callback
                }
            })
        },
        onSuccess ( googleUser ) { 
            console.log (googleUser.getFamilyName()) ;
            console.log(googleUser)
        },
        async submitUser () {
            try {
                const formIsValid = await this.$validator.validateAll()
                
                if (!formIsValid) {
                    return 
                }
                this.isLoading = true

                const modelUser = {
                    email: this.email,
                    password: this.password
                }
                const { data: { token } } = await this.$http.post('/auth', modelUser)
                this.isLoading = false
                window.location.href = `${this.callback}/#/?token=${token}`
            } catch (error) {
                this.isLoading = false
                this.isVisibleNotification = true
                this.textError = error
            }
        }
    }
}
</script>
<style scoped>
.body {
    min-height: calc(100vh - 70px)
}
</style>