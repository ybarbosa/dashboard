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
                        sm="8"
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
                                            outlined
                                            name="name"
                                            label="Nome completo"
                                            placeholder="Digite seu nome completo"
                                            v-validate="'required'"
                                            v-model="name"
                                        />
                                        <div
                                            v-show="errors.has('name')"
                                        >
                                            <v-alert
                                                dense
                                                text
                                                type="error"
                                                class="mt-n3 mb-3"
                                            >
                                                {{ errors.first('name') }}
                                            </v-alert>
                                        </div>
                                    </v-col>
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
                                            name="birthday"
                                            label="Nascimento"
                                            placeholder="DD/MM/AAAA"
                                            v-mask="'##/##/####'"
                                            v-validate="'required|date_format:dd/MM/yyyy'"
                                            v-model="birthday"
                                        />
                                        <div
                                            v-show="errors.has('birthday')"
                                        >
                                            <v-alert
                                                dense
                                                text
                                                type="error"
                                                class="mt-n3 mb-3"
                                            >
                                                {{ errors.first('birthday') }}
                                            </v-alert>
                                        </div>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            outlined
                                            ref="password"
                                            name="password"
                                            label="Senha"
                                            placeholder="Minimo 3 caracteres"
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
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            outlined
                                            name="confirmPassword"
                                            label="Confirmar Senha"
                                            placeholder="Confirme sua senha"
                                            type="password"
                                            v-validate="'required|confirmed:password'"
                                            v-model="confirmPassword"
                                        />
                                        <div
                                            v-show="errors.has('confirmPassword')"
                                        >
                                            <v-alert
                                                dense
                                                text
                                                type="error"
                                                class="mt-n3 mb-3"
                                            >
                                                {{ errors.first('confirmPassword') }}
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
                                            @click="$router.push('/')"
                                        >
                                            Voltar
                                        </v-btn>
                                        <v-btn
                                            color="#4A148C"
                                            class="white--text"
                                            large
                                            @click="submitUser"
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
import moment from 'moment'
export default {
    name: 'SignUp',
    data: () => ({
        name: null,
        email: null,
        birthday: null,
        password: null,
        confirmPassword: null

    }),
    methods: {
        async submitUser () {
            const formIsValid = await this.$validator.validateAll()
             
            if (!formIsValid) {
                return 
            }

            const modelUser = {
                name: this.name,
                email: this.email,
                birthday: moment(this.birthday, 'DD/MM/YYYY').format('YYYY/MM/DD'),
                password: this.password
            }

            console.log(modelUser)
        }
    }
}
</script>
<style scoped>
.body {
    min-height: calc(100vh - 70px)
}
</style>