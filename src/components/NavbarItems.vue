<template>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ dd_title }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">{{ dd_item1 }}</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">{{ dd_item2 }}</a>
          <a class="dropdown-item" href="#">{{ dd_item3 }}</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{ navlink }}</a>
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