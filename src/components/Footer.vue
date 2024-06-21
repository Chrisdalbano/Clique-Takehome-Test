<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="logo">
        <Logo :theme="'white'" width="120" height="52" />
      </div>
      <div class="footer-links">
        <div class="address-group">
          <ul class="nav-links">
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Our Focus</a></li>
            <li><a href="#">The Blog</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <button class="cta-button">GET STARTED</button>
    </div>
    <div class="footer-bottom">
      <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Disclaimer</a></li>
        <li><a href="#">Report an Accessibility Issue</a></li>
        <li><a href="#">Built by Clique Studios</a></li>
      </ul>
    </div>
    <div class="address">
      <p>123 East Neat St<br />Chicago, IL 60605</p>
      <p>Chicago<br />(312) 123 - 4567</p>
      <div class="social-group">
        <p>FOLLOW US</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
</script>

<style scoped>
.address {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
}

.address p {
  margin-right: 4rem;
}
.footer {
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  color: white;
  padding: 15px 3rem;
  padding-top: 2rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  flex: 1;
}

.footer-links {
  flex: 2;
  display: flex;
  justify-content: space-between;
}

.link-group,
.address-group,
.social-group {
  flex: 1;
}

.social-group p {
  font-weight: var(--semibold-font-weight);
  letter-spacing: 2px;
  font-size: 12px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.address-group p {
  margin: 0 0 10px;
}

.social-group {
  text-align: right;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  text-decoration: underline;
  margin-bottom: 4rem;
}

.nav-links {
  text-decoration: underline;
  display: flex;

  gap: 24px;
  padding: 0;
}

.nav-links a {
  color: white;
  width: auto;
}

* {
  color: white;
}

a:hover {
  color: var(--primary-color);
}
</style>
