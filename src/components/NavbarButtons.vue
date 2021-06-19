<template>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success ml-2">{{ btn_name1 }}</button>
        <button class="btn btn-outline-primary ml-2">{{ btn_name2 }}</button>
    </form>
</template>

<script>
    export default {
        name: 'NavbarButtons',
        props: {
            btn_name1: String,
            btn_name2: String
        }
    }
</script>