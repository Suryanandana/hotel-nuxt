<template>
    <section class="py-20">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            <!-- TEXT -->
            <div class="space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold leading-tight">
                    Our Mission and Vision<br />
                </h2>

                <p class="text-gray-600 leading-relaxed">
                    Welcoming every guest like an ocean wave, warm, uplifting, and leaving a lasting impression, while
                    nurturing a positive, energetic, and caring work culture that empowers every team member to
                    consistently deliver exceptional service.
                    <br>
                    Through comfortable, clean, and thoughtfully designed
                    facilities that support relaxation, combined with sincere, friendly, and professional hospitality,
                    we strive to create a calm, pleasant, and truly memorable stay for every guest.
                </p>

                <button
                    class="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition px-5 py-2.5 rounded-full text-sm font-medium">
                    Apply now →
                </button>
            </div>

            <!-- IMAGE -->
            <div
                class="w-full h-[280px] md:h-[320px] lg:h-[420px] bg-gray-200 rounded-3xl flex items-center justify-center overflow-hidden">
                <NuxtImg src="/images/drone1.jpg" class="w-full h-full object-cover" />
            </div>

            <!-- LIST -->
            <div class="space-y-4">
                <div class="border hover:shadow rounded-2xl p-5">
                    <h4 class="font-semibold mb-1">A Destination of Happiness</h4>
                    <p class="text-sm text-gray-700">
                        To become a beachfront destination that radiates happiness, positive energy, and genuine
                        sincerity in every moment.
                    </p>
                </div>

                <div class="border hover:shadow rounded-2xl p-5">
                    <h4 class="font-semibold mb-1">The Heart of Jungut Batu Stay</h4>
                    <p class="text-sm text-gray-700">
                        To become the top accommodation choice in Jungut Batu by offering a stay experience filled with
                        positive energy and genuine warmth.
                    </p>
                </div>

                <div class="border hover:shadow rounded-2xl p-5">
                    <h4 class="font-semibold mb-1">Memorable by Design</h4>
                    <p class="text-sm text-gray-700">
                        To become a beachfront destination known for consistent service quality, a calming atmosphere,
                        and unforgettable experiences for every guest.
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>
