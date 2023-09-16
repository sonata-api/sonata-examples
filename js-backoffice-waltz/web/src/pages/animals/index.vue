<script setup>
const router = await useRouter()

const animalStore = useStore('animal')
await animalStore.$actions.getAll()

const view = (animal) => {
  animalStore.$actions.setItem(animal)
  router.push({
    name: '/animals/view-[id]',
    params: {
      id: animal._id
    }
  })
}
</script>

<template>
  <div
    v-clickable
    v-for="animal in animalStore.items"
    :key="animal._id"
    class="
      tw-flex
      tw-gap-6
      tw-rounded-lg
      tw-p-6
      tw-bg-white
      tw-shadow
      tw-w-[90vw]
      md:tw-w-[40rem]
      tw-transform
      tw-transition-all
      hover:-tw-translate-y-1
    "

    @click="view(animal)"
  >
    <w-picture
      :url="animal.picture.link"
      class="
        tw-w-32
        tw-h-32
        tw-border
      "
    ></w-picture>

    <div class="
      tw-flex
      tw-flex-col
      tw-flex-1
      tw-gap-2
    ">
      <div class="
        tw-flex
        tw-items-center
      ">
        <div class="
          tw-text-2xl
          tw-flex-1
        ">
          {{ animal.name }}
        </div>
        <w-icon
          small
          icon="calendar-alt"
          class="tw-text-[10pt]"
        >
          {{ formatDateTime(animal.created_at) }}
        </w-icon>
      </div>

      <div class="
        tw-text-[10pt]
        tw-text-gray-500
      ">
        <div>Espécie: {{ animal.specie }}</div>
        <div>É dócil: {{ animal.is_docile }}</div>
      </div>

      <p>{{ animal.short_description }}</p>
    </div>
  </div>
</template>
