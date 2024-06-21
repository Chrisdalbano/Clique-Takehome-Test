<template>
  <div>
    <!-- Hero Section -->
    <section ref="heroSection" class="hero-section">
      <div ref="heroContent" class="hero-content">
        <div class="hero-text-wrapper">
          <h1 ref="dreamText" class="hero-text">
            Dream
            <br />
            something.
          </h1>
        </div>
      </div>
      <div ref="subContent" class="sub-content">
        <h2 ref="buildText" class="hero-subtext">
          Build<br />
          something.
        </h2>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="cards-section">
      <div
        v-for="(news, index) in newsItems"
        :key="index"
        :class="['card', index === 0 ? 'card-large' : 'card-small']"
      >
        <img
          :src="news.image"
          :alt="'Card Image ' + (index + 1)"
          class="card-image"
        />
        <div class="card-content">
          <span class="card-label">NEWS</span>
          <p class="card-text">{{ news.text }}</p>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="events-section">
      <div ref="eventsContent" class="events-content">
        <h3 class="events-title">UPCOMING EVENTS</h3>
        <div class="events-grid">
          <div v-for="(event, index) in events" :key="index" class="event-item">
            <p class="event-text">{{ event.text }}</p>
            <div class="event-time">{{ event.time }}</div>
          </div>
          <div class="view-all">
            <button class="view-all-button">VIEW ALL NEWS & EVENTS →</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images for news items
import frame15 from "../assets/images/frame-15.jpg";
import frame26 from "../assets/images/frame-26.jpg";
import frame25 from "../assets/images/frame-25.jpg";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Define news items
const newsItems = ref([
  {
    image: frame15,
    text: "Dui egestas mauris urna eget. In cursus volutpat at massa tristique.",
  },
  {
    image: frame26,
    text: "Eget varius rhoncus sodales tellus. Molestie eu ac feugiat.",
  },
  {
    image: frame25,
    text: "Aliquam tellus nisi pellentesque turpis eget accumsan dui",
  },
]);

// Define events
const events = ref([
  {
    text: "Arcu euismod cum leo quis. Et adipiscing amet accumsan in.",
    time: "June 11 | 10:00 AM - 11:30 AM",
  },
  {
    text: "Euismod nisl mauris tristique egestas viverra sed. Molestie elit eu augue felis quam quis.",
    time: "June 11 | 10:00 AM - 11:30 AM",
  },
  {
    text: "Faucibus felis semper erat natoque quis",
    time: "June 11 | 10:00 AM - 11:30 AM",
  },
]);

// References for elements
const heroSection = ref(null);
const heroContent = ref(null);
const dreamText = ref(null);
const subContent = ref(null);
const buildText = ref(null);

onMounted(() => {
  nextTick(() => {
    // Pin the "Dream something." text
    ScrollTrigger.create({
      trigger: heroSection.value,
      start: "top top",
      end: "bottom bottom+=200",
      pin: dreamText.value,
      pinSpacing: false,
      markers: false,
    });

    // Pin the "Build something." text
    ScrollTrigger.create({
      trigger: heroSection.value,
      start: "top center",
      end: "top top+=200",
      pin: buildText.value,
      pinSpacing: false,
      markers: false,
    });

    

    // Animate the cards section
    gsap.fromTo(
      ".cards-section",
      { y: "50%", opacity: 1 },
      {
        y: "-15%",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate the card content
    gsap.fromTo(
      ".card-content",
      { y: "60%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate the card arrow
    gsap.fromTo(
      ".card-arrow",
      { y: 0, x: "100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate the event items
    gsap.fromTo(
      ".events-section",
      { y: -110, opacity: 0 },
      {
        y: -70,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".events-section",
          start: "top 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".event-item",
      { y: -110, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".events-section",
          start: "top 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Scroll effect for dream text background position
    gsap.to(dreamText.value, {
      backgroundPosition: "120% 120%",
      ease: "none",
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});
</script>
<style scoped>
/* Hero section styles */
.hero-section {
  padding-top: var(--navbar-max-height);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
}

/* Hero content and sub content styles */
.hero-content,
.sub-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  height: 100vh;
  position: relative;
}

/* Hero text wrapper styles */
.hero-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Hero text and subtext styles */
.hero-text,
.hero-subtext {
  font-size: 10vw;
  line-height: 1;
  margin-bottom: 3rem;
  
  word-break: break-word;
}

.hero-text {
  background: url("../assets/images/headline.jpg") no-repeat center center;
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding-bottom: 8rem;
 
}

.hero-subtext {
  color: #000;
  z-index: 2;
  position: relative;
}

/* Cards section styles */
.cards-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  padding-inline: 3rem;
  z-index: 3;
  position: relative;
  max-height: 61vh;
}

/* Card styles */
.card {
  position: relative;
  border-radius: 48px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
}

.card:hover .card-image {
  transform: scale(1.1);
  transition: transform 0.5s ease-in-out;
}

.card-large {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 100%;
  max-width: 100%;
}

.card-small {
  grid-column: 2 / 3;
  max-height: 100%;
  max-width: 100%;
}

/* Card image styles */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

/* Card content styles */
.card-content {
  position: absolute;
  left: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 48px;
  width: calc(100% - 40px);
  font-size: 20px;
}

/* Specific card text styles */
.card-small .card-text {
  max-width: 339px;
}

.card-small .card-content {
  bottom: 0.25rem;
}

.card-large .card-content {
  bottom: 1rem;
}

/* Card label and text styles */
.card-label,
.card-text {
  color: #fff;
  margin-bottom: 10px;
  font-weight: var(--semibold-font-weight);
}

/* Card arrow styles */
.card-arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 24px;
  text-align: center;
  background-color: #ff6600;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Events section styles */
.events-section {
  padding-inline: 3rem;
  padding-bottom: 2rem;
  min-height: 20vh;
}

/* Events title styles */
.events-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.events-content {
  max-width: 95%;
  margin-inline: auto;
}
/* Events grid styles */
.events-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;
  min-height: 148px;
}

/* Event item styles */
.event-item {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  padding-right: 20px;
}

/* Event text styles */
.event-text {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: var(--semibold-font-weight);
}

/* Event time styles */
.event-time {
  font-size: 16px;
  color: #1a1a1a;
  margin-top: auto;
}

/* View all button styles */
.view-all {
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-all-button {
  background-color: #fff;
  color: #000;
  padding: 24px 36px;

  min-width: 330px;
}

.view-all-button:hover {
  background-color: var(--primary-color);
  color: #fff;
}
</style>
