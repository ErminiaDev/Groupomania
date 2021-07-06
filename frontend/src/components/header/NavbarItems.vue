<template>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/utilisateurs">{{ navlink1 }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/publications">{{ navlink2 }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/tableau-de-bord">{{ navlink3 }}</router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavbarItems',
        props: {
          navlink1: String,
          navlink2: String,
          navlink3: String
        }
    }
</script>