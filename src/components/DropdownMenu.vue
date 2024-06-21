<template>
    <div class="dropdown-menu" v-show="visible">
      <div class="dropdown-content">
        <div v-for="(item, index) in items" :key="item.name" class="dropdown-item" :class="{ 'with-separator': index < items.length - 1 }">
          <img :src="item.image" alt="Item Image" />
          <div class="dropdown-item-content">
            <h3>{{ item.name }}</h3>
            <ul>
              <li v-for="link in item.links" :key="link">{{ link }}</li>
            </ul>
            <a :href="item.hyperlink">Hyperlink</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /* eslint-disable */
  import { defineProps } from 'vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    border: 1px solid #ddd;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .dropdown-content {
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .dropdown-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    position: relative;
    max-width: 300px;
  }
  
  .dropdown-item.with-separator::after {
    content: '';
    position: absolute;
    top: 0;
    right: -25%;
    height: 100%;
    width: 1px;
    background-color: #ddd;
  }
  
  .dropdown-item img {
    width: 272px;
    height: 103px;
    margin-bottom: 10px;
  }
  
  .dropdown-item-content {
    text-align: left;
  }
  
  .dropdown-item h3 {
    font-size: 1.2em;
    margin: 10px 0;
  }
  
  .dropdown-item ul {
    list-style: none;
    padding: 0;
    margin: 0 0 10px 0;
  }
  
  .dropdown-item li {
    margin: 5px 0;
  }
  
  .dropdown-item a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  .dropdown-item a:hover {
    text-decoration: underline;
  }
  </style>
  