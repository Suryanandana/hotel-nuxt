<script setup>
import { ref, onMounted } from "vue";

const container = ref(null);
const textBox = ref(null);
const imageBox = ref(null);

onMounted(async () => {
    const gsapModule = await import("gsap");
    const gsap = gsapModule.gsap || gsapModule.default;

    gsap.set(textBox.value, { opacity: 0, y: 60 });
    gsap.set(imageBox.value, { opacity: 0, x: 80 });

    const observer = new IntersectionObserver(
        (entries) => {
            if (!entries[0].isIntersecting) return;

            gsap.to(textBox.value, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(imageBox.value, {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2,
            });

            observer.disconnect();
        },
        { threshold: 0.3 }
    );

    observer.observe(container.value);
});
</script>

<template>
    <section id="about" class="relative py-20 md:py-28 bg-white" aria-labelledby="about-title">
        <div ref="container" class="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <!-- IMAGE -->
            <figure ref="imageBox"
                class="order-1 md:order-2 w-full h-105 md:h-130 relative flex items-center justify-end"
                role="img" aria-label="Luxury hotel interior relaxing atmosphere">
                <!-- FOTO BESAR (KANAN) -->
                <div class="w-[85%] md:w-[70%] h-[85%] md:h-full bg-amber-200 rounded-2xl shadow-2xl"></div>

                <!-- FOTO KECIL (KIRI, OVERLAP) -->
                <NuxtImg src="/images/slide2.jpg"
                    class="absolute left-0 bottom-6 md:-left-10 md:bottom-10 w-[55%] md:w-[45%] h-[55%] md:h-[60%] bg-gray-300 rounded-2xl shadow-xl border-4 border-white object-cover" />
            </figure>

            <!-- TEXT -->
            <article ref="textBox" class="order-2 md:order-1">
                <p class="text-sm tracking-[0.25em] font-semibold text-gray-500">
                    ABOUT US
                </p>

                <h2 id="about-title" class="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                    Makes yourself at<br />
                    home and enjoy a<br />
                    unique experience
                </h2>

                <p class="mt-6 text-lg text-gray-600">
                    Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim.
                </p>

                <p class="mt-4 text-gray-600 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <p class="mt-8 italic text-xl text-gray-700">
                    Maria… the Owner
                </p>
            </article>
        </div>
    </section>
</template>