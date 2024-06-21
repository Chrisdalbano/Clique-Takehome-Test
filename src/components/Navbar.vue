<template>
  <nav>
    <div class="maximum-wrapper">
      <div class="bg-wrapper"></div>
      <div class="navbar">
        <div class="logo">
          <Logo :theme="theme" width="120" height="54" />
        </div>
        <div class="navbar-wrapper">
          <ul class="nav-links">
            <li
              @mouseenter="showDropdown('portfolio')"
              @click="toggleDropdown('portfolio')"
            >
              <a href="#">Portfolio</a>
            </li>
            <li
              @mouseenter="showDropdown('focus')"
              @click="toggleDropdown('focus')"
            >
              <a href="#">Our Focus</a>
            </li>
            <li
              @mouseenter="showDropdown('blog')"
              @click="toggleDropdown('blog')"
            >
              <a href="#">The Blog</a>
            </li>
            <li
              @mouseenter="showDropdown('partnerships')"
              @click="toggleDropdown('partnerships')"
            >
              <a href="#">Partnerships</a>
            </li>
          </ul>
          <button class="cta-button">GET STARTED</button>
        </div>
        <DropdownMenu
          :items="dropdownItems"
          :visible="dropdownVisible"
          @mouseenter="keepDropdownOpen"
          @mouseleave="hideDropdown"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/Logo.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";
import frame25 from "@/assets/images/frame-25.jpg";
import frame15 from "@/assets/images/frame-15.jpg";
import frame26 from "@/assets/images/frame-26.jpg";

const theme = ref("light");
const dropdownVisible = ref(false);
const dropdownItems = ref([]);
const currentMenu = ref(null);

const portfolioItems = [
  {
    name: "Lorem Ipsum 1",
    image: frame25,
    links: ["Long Link Name 1", "Long Link Name 2", "Long Link Name 3"],
    hyperlink: "#",
  },
  {
    name: "Lorem Ipsum 2",
    image: frame15,
    links: ["Long Link Name 1", "Long Link Name 2", "Long Link Name 3"],
    hyperlink: "#",
  },
  {
    name: "Lorem Ipsum 3",
    image: frame26,
    links: ["Long Link Name 1", "Long Link Name 2", "Long Link Name 3"],
    hyperlink: "#",
  },
];

const focusItems = [
  {
    name: "Focus Item 1",
    image: frame15,
    links: ["Focus Link 1", "Focus Link 2", "Focus Link 3"],
    hyperlink: "#",
  },
  {
    name: "Focus Item 2",
    image: frame25,
    links: ["Focus Link 1", "Focus Link 2", "Focus Link 3"],
    hyperlink: "#",
  },
  {
    name: "Focus Item 3",
    image: frame26,
    links: ["Focus Link 1", "Focus Link 2", "Focus Link 3"],
    hyperlink: "#",
  },
];

const blogItems = [
  {
    name: "Blog Item 1",
    image: frame26,
    links: ["Blog Link 1", "Blog Link 2", "Blog Link 3"],
    hyperlink: "#",
  },
  {
    name: "Blog Item 2",
    image: frame15,
    links: ["Blog Link 1", "Blog Link 2", "Blog Link 3"],
    hyperlink: "#",
  },
  {
    name: "Blog Item 3",
    image: frame25,
    links: ["Blog Link 1", "Blog Link 2", "Blog Link 3"],
    hyperlink: "#",
  },
];

const partnershipItems = [
  {
    name: "Partnership Item 1",
    image: frame15,
    links: ["Partnership Link 1", "Partnership Link 2", "Partnership Link 3"],
    hyperlink: "#",
  },
  {
    name: "Partnership Item 2",
    image: frame25,
    links: ["Partnership Link 1", "Partnership Link 2", "Partnership Link 3"],
    hyperlink: "#",
  },
  {
    name: "Partnership Item 3",
    image: frame26,
    links: ["Partnership Link 1", "Partnership Link 2", "Partnership Link 3"],
    hyperlink: "#",
  },
];

const showDropdown = (menu) => {
  if (currentMenu.value !== menu) {
    setDropdownItems(menu);
  }
  dropdownVisible.value = true;
};

const toggleDropdown = (menu) => {
  if (dropdownVisible.value && currentMenu.value === menu) {
    dropdownVisible.value = false;
  } else {
    setDropdownItems(menu);
    dropdownVisible.value = true;
  }
};

const setDropdownItems = (menu) => {
  switch (menu) {
    case "portfolio":
      dropdownItems.value = portfolioItems;
      break;
    case "focus":
      dropdownItems.value = focusItems;
      break;
    case "blog":
      dropdownItems.value = blogItems;
      break;
    case "partnerships":
      dropdownItems.value = partnershipItems;
      break;
  }
  currentMenu.value = menu;
};

const keepDropdownOpen = () => {
  dropdownVisible.value = true;
};

const hideDropdown = () => {
  dropdownVisible.value = false;
};
</script>

<style scoped>
nav {
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.maximum-wrapper {
  display: flex;
  flex-direction: column;
}

.bg-wrapper {
  width: 100%;
  background-color: #F1F1F1;
  height: 44px;
}
.logo {
  display: flex;
  align-items: center;
  height: 54px;
}

.navbar-wrapper {
  display: flex;
  align-items: center;
}

.navbar {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 3rem;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .logo {
  font-size: 24px;
  font-weight: var(--heading-font-weight);
  color: var(--secondary-color);
}

.navbar .nav-links {
  display: flex;
  list-style: none;
  position: relative;
}

.navbar .nav-links li {
  margin: 0 12px;
  position: relative;
  cursor: pointer;
}

.navbar .nav-links a {
  color: var(--secondary-color);
  font-weight: 500;
}

.navbar .nav-links a:hover {
  color: var(--primary-color);
}

.logo img {
  height: 100%;
}
</style>
