<template>

    <f7-page hide-toolbar-on-scroll>

        <f7-navbar>
            <f7-nav-left>
                <f7-link href="/medicines">
                    <f7-icon material="arrow_back"></f7-icon>
                </f7-link>
            </f7-nav-left>
            <f7-nav-title title="MEDICAMENTO"></f7-nav-title>
            <f7-nav-right>
                <span
                        class="navbar-icon-right"
                        @click="replicateRecord"
                ><img src="../../assets/ic_content_copy_white_24dp.png"></span>
                <span
                        class="navbar-icon-right"
                        @click=""
                ><img src="../../assets/ic_share_white_24dp.png"></span>
            </f7-nav-right>
        </f7-navbar>

        <f7-block inner>

            <f7-card title="REGISTRO DE MEDICACIÓN">
                <f7-list media-list>

                    <!-- Name -->
                    <f7-list-item header="Nombre"
                                  @click="openInputPopover($event, 'text', 'Nombre', 'name', details.name)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.name }}</span>
                    </f7-list-item>

                    <!-- Image -->
                    <f7-list-item>
                        <f7-label>Imagen</f7-label>
                        <span class="zoom-in"
                              @click="zoomImage">
                            <f7-icon material="zoom_in"></f7-icon>
                        </span>
                    </f7-list-item>
                    <f7-list-item>
                        <image-selector :imagepath="imagepath" @image_selected="updateImage"></image-selector>
                    </f7-list-item>

                    <!-- Laboratory name -->
                    <f7-list-item header="Nombre del laboratorio"
                                  @click="openInputPopover($event, 'text', 'Nombre del laboratorio', 'lab', details.lab)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.lab }}</span>
                    </f7-list-item>

                    <!-- Content -->
                    <f7-list-item header="Miligramos/Mililitros"
                                  @click="openInputPopover($event, 'text', 'Miligramos/Mililitros', 'content', details.content)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.content }}</span>
                    </f7-list-item>

                    <!-- Dose -->
                    <f7-list-item header="Dosis"
                                  @click="openInputPopover($event, 'text', 'Dosis', 'dose', details.dose)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.dose }}</span>
                    </f7-list-item>

                    <!-- Frequency -->
                    <f7-list-item header="Frecuencia"
                                  @click="openSelectPopover($event, 'frequencyList', 'Frecuencia', 'frequency', details.frequency)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.frequency }}</span>
                    </f7-list-item>

                    <!-- Time -->
                    <f7-list-item header="Hora/Pauta"
                                  @click="openInputPopover($event, 'text', 'Hora/Pauta', 'time', details.time)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.time }}</span>
                    </f7-list-item>

                    <!-- Day time -->
                    <f7-list-item header="Momento del día"
                                  @click="openSelectPopover($event, 'dayTimeList', 'Momento del día', 'day_time', details.day_time)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.day_time }}</span>
                    </f7-list-item>

                    <!-- Start date -->
                    <f7-list-item header="Fecha de inicio"
                                  @click="openInputPopover($event, 'date', 'Fecha de inicio', 'start', details.start)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.start }}</span>
                    </f7-list-item>

                    <!-- Ending date -->
                    <f7-list-item header="Fecha de fin"
                                  @click="openInputPopover($event, 'date', 'Fecha de fin', 'end', details.end)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.end }}</span>
                    </f7-list-item>

                    <!-- Cause -->
                    <f7-list-item header="Motivo"
                                  @click="openInputPopover($event, 'text', 'Motivo', 'cause', details.cause)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.cause }}</span>
                    </f7-list-item>

                    <!-- Effects -->
                    <f7-list-item header="Efectos"
                                  @click="openInputPopover($event, 'textarea', 'Efectos', 'effects', details.effects)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.effects }}</span>
                    </f7-list-item>

                    <!-- Notes -->
                    <f7-list-item header="Notas"
                                  @click="openInputPopover($event, 'textarea', 'Notas', 'notes', details.notes)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.notes }}</span>
                    </f7-list-item>

                    <!-- Doctor -->
                    <f7-list-item header="Médico"
                                  @click="openInputPopover($event, 'text', 'Médico', 'doctor', details.doctor)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ details.doctor }}</span>
                    </f7-list-item>
                </f7-list>
            </f7-card>

            <f7-card title="CAMPOS PERSONALIZADOS">
                <f7-list media-list>
                    <!-- Schema -->
                    <f7-list-item v-for="(field, index) in schema"
                                  :key="index"
                                  :header="field.label"
                                  @click="openEditSchema($event, index, field)">
                        <f7-icon material="edit"></f7-icon>
                        <span>{{ field.value }}</span>
                    </f7-list-item>

                </f7-list>

                <f7-button popup-open=".custom-field">NUEVO CAMPO PERSONALIZADO</f7-button>
            </f7-card>

        </f7-block>

        <!-- Delete -->
        <f7-toolbar bottom-md>
            <f7-link></f7-link>
            <f7-link @click="deleteRecord"><f7-icon material="delete"></f7-icon></f7-link>
            <f7-link></f7-link>
        </f7-toolbar>

        <!-- Input popover -->
        <f7-popover ref="EditInputField" :close="isSchema = false">
            <text-input :type="field.type"
                        :label="field.label"
                        :name="field.name"
                        :value="field.value"
                        @input="setInputValue"></text-input>
            <f7-block>
                <f7-segmented round raised>
                    <f7-button round @click="$refs.EditInputField.close()">Cancelar</f7-button>
                    <f7-button round @click="update">Guardar</f7-button>
                </f7-segmented>
            </f7-block>
        </f7-popover>

        <!-- Select popup -->
        <f7-popup ref="EditSelectField" :close="isSchema = false">
            <select-list :type="field.type"
                         :label="field.label"
                         :name="field.name"
                         :value="field.value"
                         @select="setSelectValue"></select-list>
        </f7-popup>

        <!-- Custom field popup -->
        <f7-popup class="custom-field">
            <create-custom-field :schema="schema"></create-custom-field>
        </f7-popup>

    </f7-page>

</template>

<script>
    import axios from 'axios';
    import {
        API_PATH, USER_IMAGES_PATH
    } from '../../config.js';
    import SelectList from '../../form_elements/SelectList';
    import TextInput from '../../form_elements/TextInput';
    import CreateCustomField from '../../form_elements/CreateCustomField';
    import ImageSelector from '../../form_elements/ImageSelector';

    export default {
        name: 'MedicinesDetails',
        components: {
            SelectList,
            TextInput,
            'create-custom-field': CreateCustomField,
            'image-selector': ImageSelector
        },
        props: [
            'record_id'
        ],
        data() {
            return {
                id: this.record_id,
                field: {
                    type: '',
                    label: '',
                    name: '',
                    value: ''
                },
                details: [],
                schema: [],
                schema_active_index: null,
                imagepath: undefined
            };
        },
        mounted() {
            // Get the record details
            axios
                .get(API_PATH + 'medicines/' + this.id, {
                    params: {
                        // device_code: sessionStorage.device_code,
                        // user_id: sessionStorage.user_id
                    }
                })
                .then(response => {
                    this.details = response.data;
                    this.schema = JSON.parse(response.data.schema);

                    // Check the image
                    if (this.details.image !== null) {
                        this.imagepath = USER_IMAGES_PATH + this.details.image;
                    }
                });
        },
        methods: {
            zoomImage() {
                if (this.details.image !== null) {
                    PhotoViewer.show(USER_IMAGES_PATH + this.details.image);
                }
            },
            openInputPopover($event, type, label, name, value) {
                //console.log('@openInputPopover');
                this.field.type = type;
                this.field.label = label;
                this.field.name = name;
                this.field.value = value;
                this.$refs.EditInputField.open();
            },
            openSelectPopover($event, type, label, name, value) {
                //console.log('@openSelectPopover');
                this.field.type = type;
                this.field.label = label;
                this.field.name = name;
                this.field.value = value;
                this.$refs.EditSelectField.open();
            },
            openEditSchema($event, index, field) {

                this.schema_active_index = index;

                if (field.type === 'select') {
                    //this.openSelectPopover($event, 'allergiesDegreeList', 'Grado', 'degree', details.degree);
                } else {
                    // Using 'schema" word as 'name' to identify schema fields
                    this.openInputPopover($event, field.type, field.label, 'schema', field.value);
                }
            },
            setInputValue(e) {
                //console.log('@setInputValue');
                this.field.value = e;
            },
            setSelectValue(e) {
                //console.log('@setSelectValue');
                this.field.value = e;
                this.updateInfo(event, this.field.name);
                this.$refs.EditSelectField.close();
            },
            update() {
                //console.log('@update');
                if (this.field.name === 'schema') {
                    this.updateInfoSchema(this.schema_active_index);
                } else {
                    this.updateInfo();
                }
            },
            updateInfo() {
                //console.log('@updateInfo');

                /* We need to create first an object an then to assign the key name as an array key, because assigning
                 dynamic key names in an object does not work */
                let data = {};
                data[this.field.name] = this.field.value;

                axios({
                    method: 'PUT',
                    url: API_PATH + 'medicines/' + this.id,
                    params: {
                        // device_code: sessionStorage.device_code,
                        // user_id: sessionStorage.user_id
                    },
                    data: data
                })
                    .then((response) => {
                        if (response.data.result === 'OK') {
                            // Update details
                            this.details[this.field.name] = this.field.value;
                            // Close popover
                            this.$refs.EditInputField.close();
                        } else {
                            // TODO ??
                        }
                    })
                    .catch(function (error) {
                        //console.log(error);
                    });
            },
            updateInfoSchema(index) {
                //console.log('@updateInfoSchema');

                this.schema_active_index = null;

                this.schema[index] = {
                    "label": this.field.label,
                    "type": this.field.type,
                    "value": this.field.value
                };

                axios.put(API_PATH + 'medicines/' + this.id, {
                    params: {
                        // device_code: sessionStorage.device_code,
                        // user_id: sessionStorage.user_id
                    },
                    schema: JSON.stringify(this.schema)
                })
                    .then((response) => {
                        if (response.data.result === 'OK') {
                            // Update schema
                            this.$forceUpdate();
                            // Close popover
                            this.$refs.EditInputField.close();
                        } else {
                            // TODO ??
                        }
                    })
                    .catch(function (error) {
                        //console.log(error);
                    });
            },
            updateImage(path) {
                let uri = encodeURI(API_PATH + 'medicines/update-image');
                let options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = path.substr(path.lastIndexOf('/') + 1);
                options.mimeType = "image/jpeg";
                options.httpMethod = "POST";
                options.chunkedMode = true;
                options.params = {
                    id: this.id
                };

                var ft = new FileTransfer();
                ft.upload(path, uri, this.success, this.error, options);
            },
            success(response) {
                //console.log(response);
            },
            error(response) {
                //console.log(response);
            },
            replicateRecord() {
                this.$f7.dialog.confirm('Se creará un nuevo registro a partir del que estás viendo y podrás editarlo inmediatamente', '¿Replicar este registro?', () => {
                    axios
                        .get(API_PATH + 'medicines/replicate/' + this.id, {
                            params: {
                                // device_code: sessionStorage.device_code,
                                // user_id: sessionStorage.user_id
                            }
                        })
                        .then(response => {
                            this.id = response.data._id; // The ID of the new record
                            this.details = response.data;
                            this.schema = JSON.parse(response.data.schema);

                            // Incrementing counting state
                            this.$store.dispatch('incrementDocumentCounting', 'medicines');

                            let notification = this.$f7.toast.create({
                                position: 'top',
                                text: '¡Registro replicado! Ya puedes editarlo',
                                cssClass: "success",
                                icon: '<i class="icon material-icons">done</i>',
                                closeTimeout: 2000
                            });
                            notification.open();
                        });
                });
            },
            deleteRecord() {
                this.$f7.dialog.confirm('Esta acción no puede deshacerse', '¿Borrar este registro?', () => {
                    axios
                        .delete(API_PATH + 'medicines/' + this.id, {
                            params: {
                                // device_code: sessionStorage.device_code,
                                // user_id: sessionStorage.user_id
                            }
                        })
                        .then(response => {
                            if (response.data.result === 'OK') {
                                // Incrementing counting state
                                this.$store.dispatch('decrementDocumentCounting', 'medicines');

                                let notification = this.$f7.toast.create({
                                    position: 'top',
                                    text: '¡Registro borrado!',
                                    cssClass: "success",
                                    icon: '<i class="icon material-icons">done</i>',
                                    closeTimeout: 2000
                                });
                                notification.open();

                                // Returning to list
                                setTimeout(() => {
                                    this.$f7router.navigate('/medicines');
                                }, 2000);
                            } else {
                                this.$f7.dialog.alert('No se ha podido borrar el registro', "Error");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            this.$f7.dialog.alert('Ha ocurrido un error', "Error");
                        });
                });
            }
        }
    };
</script>

<style scoped>

    .md .list .item-header {
        padding-left: 39px !important;
    }

    li i.icon {
        /*position: absolute;
        left: 15px;
        top: 20px;*/
        color: #9a9a9a !important;
        background: #eeeeee;
        padding: 5px;
        border-radius: 50%;
        opacity: .65;
    }

    li span {
        position: relative;
        z-index: 10;
    }

    .navbar, .toolbar {
        background-color: #F2BE4C;
    }

    .zoom-in {
        display: block;
        position: absolute;
        right: 10px;
        top: 5px
    }
</style>
