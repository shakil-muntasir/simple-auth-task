<template>
    <form @submit.prevent="submit">
        <div class="box">
            <div class="box__content">
                <h1>SIGN IN TO YOUR ACCOUNT</h1>

                <input type="text" v-model="form.username" class="input" placeholder="johnythedesigner@gmail.com" />

                <input type="password" v-model="form.password" class="input" placeholder="********" />

                <button type="submit" class="btn">SIGN IN</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const form = ref({
    username: '',
    password: ''
})

const submit = async () => {
    await store.dispatch('loginUser', form.value)

    const loginStatus = computed(() => store.getters.getStatus)

    if (loginStatus.value === 'OK') {
        console.log('Logged in!')
    } else {
        console.log('Error!')
    }
}
</script>
