<route lang="yaml">
props: true
</route>

<script setup>
const props = defineProps({
  id: String
})

const router = await useRouter()
const animalStore = useStore('animal')

if( props.id && !animalStore.item._id ) {
  await animalStore.$actions.get({
    filters: {
      _id: props.id
    }
  })
}
</script>

<template>
  <div class="
    tw-flex
    tw-flex-col
    tw-rounded-lg
    tw-p-6
    tw-bg-white
    tw-shadow
    tw-w-[90vw]
  ">
    <div class="
      tw-flex
      tw-items-center
      tw-justify-between
      tw-w-full
      tw-pb-4
      tw-border-b
    ">
      <div>
        <div class="tw-text-2xl">
          {{ animalStore.item.name }}
        </div>
        <div class="tw-text-gray-500">
          {{ animalStore.item.specie }}
        </div>
      </div>
      <w-icon
        v-clickable
        reactive
        icon="multiply"
        @click="router.back()"
      ></w-icon>
    </div>

    <div class="
      tw-flex
      tw-flex-col
      tw-items-center
      tw-gap-10
      tw-py-8
    ">
      <w-picture
        :url="animalStore.item.picture.link"
        class="
          tw-w-64
          tw-h-64
          tw-border
        "
      >
        <template #caption>
          This animal <b>{{ animalStore.item.is_docile ? 'is' : 'IS NOT' }}</b> docile
        </template>
      </w-picture>

      <p>{{ animalStore.item.description }}</p>
    </div>
  </div>
</template>
