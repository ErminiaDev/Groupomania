<template>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ dd_title1 }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/profils">{{ dd1_item1 }}</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/profils/:id">{{ dd1_item2 }}</router-link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ dd_title2 }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/ajouter-publication">{{ dd2_item1 }}</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/publications-partagees/:user-id">{{ dd2_item2 }}</router-link>
          <router-link class="dropdown-item" to="/publications-aimees/:user-id">{{ dd2_item3 }}</router-link>
          <router-link class="dropdown-item" to="/publications">{{ dd2_item4 }}</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/profils/:name">{{ navlink1 }}</router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavbarItems',
        props: {
          dd_title1: String,
          dd1_item1: String,
          dd1_item2: String,
          dd_title2: String,
          dd2_item1: String,
          dd2_item2: String,
          dd2_item3: String,
          dd2_item4: String,
          navlink1: String
        }
    }
</script>