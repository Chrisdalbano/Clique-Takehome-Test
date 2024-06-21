<template>
  <div class="form-section">
    <div ref="formText" class="form-text row">
      <h6>FORM FIELD CALLOUT IPSUM</h6>
      <h1>A simple headline facu consectetur</h1>
      <p>
        Nisi a id sit pulvinar non. Quis tristique et sem cras morbi lacus.
        Magna faucibus ultrices sed consectetur risus et amet.
      </p>
    </div>
    <form class="form-content row">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="First" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Last" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        <div class="form-group">
          <label for="confirmEmail">Confirm Email Address</label>
          <input type="email" id="confirmEmail" placeholder="Email Address" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="(___) ___-____" />
        </div>
        <div class="form-group">
          
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" placeholder="Company" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="audience">Audience Group</label>
          <select id="audience">
            <option>Select</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="message">Message (Paragraph of Text)</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>
      </div>
      <button type="submit" class="submit-button">SUBMIT →</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const formText = ref(null);

onMounted(() => {
  gsap.from(formText.value.children, {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: formText.value,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });
});
</script>

<style scoped>
.row {
  max-width: 600px;
}

.form-section {
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5rem;
  padding-inline: 7rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding-bottom: 3rem;
}

.form-text {
  max-width: 438px;
  flex: 1;
}

.form-text h6 {
  font-size: 12px;
  color: #666;
  margin-bottom: 1rem;
}

.form-text h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #000;
  line-height: 1.2;
}

.form-text p {
  font-size: 16px;
  color: #000000;
}

.form-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  resize: none;
  height: 100px;
}
</style>
