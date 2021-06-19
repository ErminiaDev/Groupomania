<template>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ dd_title }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/publications-recentes">{{ dd_item1 }}</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/publications-partagees">{{ dd_item2 }}</router-link>
          <router-link class="dropdown-item" to="/publications-aimees">{{ dd_item3 }}</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/mon-profile">{{ navlink }}</router-link>
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
          navlink: String
        }
    }
</script>