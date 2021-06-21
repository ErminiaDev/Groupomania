<template>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ dd_title }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/publications">{{ dd_item1 }}</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/publications-partagees/:user-id">{{ dd_item2 }}</router-link>
          <router-link class="dropdown-item" to="/publications-aimees/:user-id">{{ dd_item3 }}</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/profils/:user-id">{{ navlink1 }}</router-link>
        <router-link class="nav-link" to="/profils/:name">{{ navlink2 }}</router-link>
        <router-link class="nav-link" to="/profils">{{ navlink3 }}</router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavbarItems',
        props: {
          dd_title: String,
          dd_item1: String,
          dd_item2: String,
          dd_item3: String,
          navlink1: String,
          navlink2: String,
          navlink3: String
        }
    }
</script>