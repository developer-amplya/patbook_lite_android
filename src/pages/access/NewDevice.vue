<template>
    <f7-page>

        <!-- Navbar -->
        <f7-navbar back-link title="Registro de dispositivo"></f7-navbar>

        <f7-block inner>

            <!-- Info -->
            <div class="alert alert-info">
                <p class="center">
                    <f7-icon material="info"></f7-icon>
                </p>
                <p>Es la primera vez que accedes a tu cuenta desde este dispositivo. Es necesario que lo registres
                    antes
                    de proseguir.</p>
            </div>

            <p>Si ya eres usuario de Patbook introduce tu email a continuación y te enviaremos un código para
                registrar
                este dispositivo y autorizar el acceso a tu cuenta desde el mismo.</p>

            <div v-show="msg" class="alert alert-warning">
                <span><f7-icon material="warning"></f7-icon></span>
                {{ msg }}
            </div>

            <f7-list no-hairlines>

                <f7-list-input
                        type="email"
                        label="Email"
                        :value="email_input"
                        @input="email_input = $event.target.value"
                ></f7-list-input>
                <br>
                <f7-button large raised fill @click="registerDevice">Enviar</f7-button>

            </f7-list>

            <p>Si aún no eres usuario de Patbook:</p>
            <f7-list>
                <f7-button href="/user-register" fill round>Nuevo usuario</f7-button>
            </f7-list>

        </f7-block>
    </f7-page>
</template>

<script>
    //TODO: usar el UUID del dispositivo para comprobar el acceso y prescindir de guardar nada en localStorage
    import axios from 'axios';
    import {
        API_PATH
    } from '../../config.js';

    export default {
        name: 'NewDevice',
        props: ['email', 'password'],
        data() {
            return {
                email_input: this.email,
                msg: ''
            };
        },
        mounted() {
            //console.log('-> NewDevice');
        },
        methods: {
            registerDevice() {
                //console.log(this.email);

                axios.post(API_PATH + 'register-device', {
                    email: this.email
                })
                    .then((response) => {
                        //console.log(response);
                        if (response.data.result === 'KO') {
                            this.msg = response.data.message;
                        } else {
                            this.$f7router.navigate('/device-register/' + this.email_input + '/' + this.password);
                        }
                    })
                    .catch(function (error) {
                        //console.log(error);
                    });
            }
        }
    };
</script>