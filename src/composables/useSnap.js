import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export function useScrollSnapping(...ids) {
  function goToSection(section) {
    console.log(section.offsetHeight);
    console.log(section);
    gsap.to(window, {
      scrollTo: {
        y: section.offsetTop -129,
        autoKill: false,
        ease: "Power3.easeInOut",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.5,
    });
  }

  function setup() {
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element == null) continue;

      ScrollTrigger.create({
        trigger: element,
        onEnter: () => goToSection(element),
      });

      ScrollTrigger.create({
        trigger: element,
        start: "bottom bottom",
        markers: false,
        onEnterBack: () => goToSection(element),
      });
    }
  }

  onMounted(() => {
    setup();
  });

  return { setup };
}
