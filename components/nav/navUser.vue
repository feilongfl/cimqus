<template>
  <b-nav-item-dropdown right>
    <!-- Using button-content slot -->
    <template slot="button-content">
      <em>User</em>
    </template>
    <b-dropdown-item href="#">Profile</b-dropdown-item>
    <b-dropdown-item href="#">Signout</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
