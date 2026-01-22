<template>
    <section class="py-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-10">
            Who We Are?
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Image -->
            <div class="w-full h-[300px] md:h-[380px] lg:h-full bg-gray-200 overflow-hidden rounded-3xl flex items-center">
                <NuxtImg src="/images/slide1.jpg" class="w-full h-full object-cover" />
            </div>

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 auto-rows-max">
                <!-- About Us (tall - 2 rows) -->
                <div class="row-span-2 shadow-md border rounded-2xl p-6 flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-2">
                        <Icon name="ph:users-four-thin" class="text-xl" />
                        <h3 class="font-semibold text-lg">About Us</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        We are a hospitality company under PT. NUSA
                        REJEKI PROPERTI, dedicated to creating
                        warm, comfortable, and sincerely delivered stay
                        experiences.
                    </p>
                    <p class="text-gray-700 leading-relaxed mt-3">
                        Through thoughtfully designed facilities and
                        heartfelt service, The Ulu Beach Club and
                        Bungalows is committed to providing an
                        experience that makes every guest feel valued,
                        welcomed, and truly at home.
                    </p>
                </div>

                <!-- Location -->
                <div class="bg-white rounded-2xl shadow-md p-6 border flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-2">
                        <Icon name="hugeicons:location-05" class="text-xl" />
                        <h3 class="font-semibold text-lg">Location</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        Located on the serene shores of Jungut Batu, we
                        blend professional service with a personal touch
                        that reflects our core values: warmth, genuine
                        hospitality, and attention to every detail.
                    </p>
                </div>

                <!-- Commitment -->
                <div class="shadow-md rounded-2xl p-6 border flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-2">
                        <Icon name="fluent-mdl2:commitments" class="text-xl" />
                        <h3 class="font-semibold text-lg">Commitment</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        The Ulu Beach Club and
                        Bungalows is committed to providing an
                        experience that makes every guest feel valued,
                        welcomed, and truly at home.
                    </p>
                </div>

                <!-- About (big) -->
                <div class="sm:col-span-2 bg-white rounded-2xl shadow-md p-6 border">
                    <div class="flex items-center gap-2 mb-2">
                        <Icon name="solar:people-nearby-linear" class="text-xl" />
                        <h3 class="font-semibold text-lg">Founder</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        I Made Suardana, many people
                        known as Made Kina ( KINABALI ),
                        is a hospitality entrepreneur who
                        owns several accommodation
                        properties as well as a Thailand - themed restaurant.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
