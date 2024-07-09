<template>
  <main>
    This text has green background unless <code>vw < 480</code>. If the
    background color responds to the viewport width, the postcss transform
    works.
  </main>
</template>

<script setup></script>

<style scoped>
main {
  background: green;
  color: white;
}

@media (--sm) {
  main {
    background: rebeccapurple;
  }
}

code {
  font-size: 1rem;
}
</style>
