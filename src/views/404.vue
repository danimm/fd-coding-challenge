<script lang="ts" setup>
defineOptions({ name: 'RouteNotFound' })

/*
 *INFO*:
 * Any path not found, will be redirected to /watches, so we should never get to see this content.
 * However, it can be relevant if we want to show the user some kind of message: resource not found, etc...
 */
</script>

<template>
  <div>
    <h1>You should never see this</h1>
  </div>
</template>
