<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>{{ $route.params.id }} | {{ title }}</Title>
        <h3 class="text-3xl font-bold">
                <NuxtLink :to="`/posts/1`">Title of Post</NuxtLink>
            </h3>
            <div class="post-meta text-gray-700 flex items-center-space-x-2">
                 <div>Mar 7, 2024</div>
                 <div> &middot; </div>
                 <div>Juan Gomez</div>
            </div>
            <div class="post-content mt-4">
                {{ $route.params.id }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non quos numquam? Odit deserunt itaque saepe facilis neque dicta impedit ullam laboriosam, sequi distinctio soluta dolores. Incidunt iure pariatur animi?
            </div>
    </div>
</template>

<script setup>
    const title = useState('title');
</script>