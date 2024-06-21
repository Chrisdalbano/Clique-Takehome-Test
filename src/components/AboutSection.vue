<template>
  <div ref="wrapper" class="wrapper">
    <!-- About Section -->
    <section ref="aboutSection" class="about-section">
      <div ref="mainParagraph" class="main-paragraph">
        <h3>ABOUT US</h3>
        <h2>Lorem enim sed</h2>
        <h2>dignissim arcu leo mauris fermentum arcu</h2>
        <h2>sed. Vitae senectus.</h2>
      </div>
    </section>

    <!-- Tellus Section -->
    <section ref="tellusSection" class="tellus-section">
      <div class="tellus-wrapper">
        <!-- Animated Images -->
        <div class="animated-images">
          <div class="image-container image-container-1">
            <img
              src="../assets/images/imagine-4.jpg"
              alt="Image 1"
              class="image image-1"
            />
          </div>
          <div class="image-container image-container-2">
            <img
              src="../assets/images/image-5.jpg"
              alt="Image 2"
              class="image image-2"
            />
          </div>
          <div class="image-container image-container-3">
            <img
              src="../assets/images/image-6.jpg"
              alt="Image 3"
              class="image image-3"
            />
          </div>
        </div>

        <!-- Text Content -->
        <div class="text-content">
          <h2>Mi tellus magna at</h2>
          <p class="medium-p">
            Aliquet eget purus eu nisl et eleifend. Arcu mi nulla odio.
          </p>
          <p>
            Tristique et enim quisque gravida non parturient nunc a pharetra.
            Est rhoncus porta faucibus sit nunc diam. Accumsan proin praesent
            faucibus fermentum ipsum vulputate commodo viverra. Dui eget aliquam
            mauris consectetur.
          </p>
          <!-- Call to Action Wrapper -->
          <div class="cta-wrapper">
            <div class="stat-box">
              <div class="stat-value">75+</div>
              <div class="stat-text">
                <strong>LARGE STATISTIC IPSUM</strong>
                <p>
                  Nisi a id sit pulvinar non. Quis tristique et sem cras morbi
                  lacus. Magna faucibus ultric.
                </p>
              </div>
            </div>
            <button class="cta-button">OUR SPECIALTY AREAS</button>
          </div>
        </div>
      </div>
    </section>
    <FormComponent />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FormComponent from "../components/FormComponent.vue";

gsap.registerPlugin(ScrollTrigger);

const wrapper = ref(null);
const aboutSection = ref(null);
const mainParagraph = ref(null);

onMounted(() => {
  // Pin the about section when scrolling
  ScrollTrigger.create({
    trigger: aboutSection.value,
    start: "top top",
    end: "bottom top+=750",
    pin: mainParagraph.value,
    pinSpacing: false,
    markers: false,
  });

  // Animation for tellus section
  gsap.fromTo(
    ".tellus-section",
    { y: 0, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".tellus-section",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  // Animation for image 1
  gsap.fromTo(
    ".image-container-1",
    { y: -25 },
    {
      y: 20,
      scrollTrigger: {
        trigger: ".tellus-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Animation for image 2
  gsap.fromTo(
    ".image-container-2",
    { y: -200 },
    {
      y: 150,
      scrollTrigger: {
        trigger: ".tellus-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Animation for image 3
  gsap.fromTo(
    ".image-container-3",
    { y: -150 },
    {
      y: 150,
      scrollTrigger: {
        trigger: ".tellus-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".text-content",
    { y: 200, opacity: 0 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".text-content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "play reverse play reverse"
      },
    }
  );
});
</script>
<style scoped>
/* Wrapper for the background image */
.wrapper {
  background-image: url("../assets/images/v1016-a-01-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 2rem;
}

/* Section styles */
.about-section,
.tellus-section {
  height: 100vh;
  padding-inline: 5%;
}

/* About section layout */
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a1a1a;
  padding: 10%;
}

/* Main paragraph styles */
.main-paragraph {
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

/* Styles for about section headings */
.main-paragraph h3 {
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #666;
}

.main-paragraph h2 {
  font-size: 96px;
  max-width: 80%;
  line-height: 1.2;
  color: black;
}

/* Tellus section wrapper */
.tellus-wrapper {
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: 1rem;
  align-items: center;
  padding-inline: 4rem;
  position: relative;
  min-height: 100vh;
}

/* Container for animated images */
/* .animated-images {
  position: relative;
  margin-left: 2rem;
  height: 100%;
  background-color: red;

} */

.animated-images {
  display: grid;
  width: 100%;
  position: relative;
  height: 100%;
}

.animated-images > * {
  grid-area: 1/1;
}

/* Styles for image containers */
.image-container {
  /* position: absolute; */

  overflow: hidden;
}

.image-container-1 {
  border-radius: 3rem;
  width: 567px;
  height: 503px;
  z-index: 1;
}

.image-container-2 {
  border-radius: 1.5rem;
  width: 283px;
  height: 369px;
  z-index: 2;
  right: 0;
  place-self: center end;
  margin-top: 6rem;
  margin-right: 3rem;
}

.image-container-3 {
  border-radius: 1.5rem;
  width: 278px;
  height: 282px;
  z-index: 1;
  place-self: end start;
  margin-left: 8rem;
  margin-bottom: 8rem;
}

/* Image styling */
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Text content layout */
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Text content styling */
.text-content h2 {
  font-size: 40px;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Stat box styling */
.stat-box {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px 60px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  position: relative;
  max-width: 90%;
  margin-top: 3rem;
}

.stat-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 8px;
  background-color: var(--primary-color);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

/* Stat value styling */
.stat-value {
  font-size: 96px;
  font-weight: bold;
  margin-right: 20px;
}

/* Stat text styling */
.stat-text {
  font-size: 14px;
}

.stat-text strong {
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: var(--semibold-font-weight);
}

.stat-box p {
  font-size: 14px;
  font-style: italic;
  max-width: 60%;
}

/* Button styling */
button {
  padding: 24px 36px;
}

/* Medium paragraph styling */
.medium-p {
  font-weight: var(--semibold-font-weight);
}

/* Media queries just for the images, I know responsive was not needed BUT looks terrible on certain screens :( */

@media (max-width: 1024px) {
  .image-container-1,
  .image-container-2,
  .image-container-3 {
    width: 80%;
    height: 80%;
  }
}
</style>
