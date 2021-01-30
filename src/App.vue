<template>
  <div id="app">
    <mySearch />
    <myTable />
  </div>
</template>

<script>
import myTable from './view/table'
import mySearch from './view/search'
export default {
  name: 'App',
  components: {myTable, mySearch }
}
</script>
