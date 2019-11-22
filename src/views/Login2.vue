<template>
    <v-container>
        <v-layout align-right justify-right>
            <v-flex xs8 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar>
                        <v-toolbar-title>Ingresar</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                                data-cy="signinEmailField"
                            >
                            </v-text-field>
                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                data-cy="signinPasswordField"
                                v-model="password"
                                :rules="passwordRules"
                                required
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="signinSubmitBtn"
                            >Login</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>