<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in $store.getters.tags"
        :key="item.path"
        :class="$route.path === item.path ? 'bgc' : ''"
        @click="$router.push(item.path)"
      >
        {{ item.title }}
        <span
          v-show="$route.path !== item.path"
          @click.stop="$store.commit('tags/delTag', index)"
        ></span>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  padding-top: 2px;
  padding-left: 0;
  cursor: pointer;
}

li {
  width: 50px;
  border: 1px solid #ddd;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0 5px;
  margin: 0 5px;
  text-align: center;
  border-radius: 10px;
}

.bgc {
  background: #545c64;
  border: 1px solid #545c64;
  color: #fff;
}
</style>
