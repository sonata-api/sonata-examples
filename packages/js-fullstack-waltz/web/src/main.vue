<script setup>
const animalStore = useStore('animal')
const addPanel = ref(false)

const insertAnimal = async () => {
  await animalStore.$actions.insert()
  animalStore.$actions.clearItem()
  addPanel.value = false
}

onMounted(animalStore.$actions.getAll)
</script>

<template>
  <div class="
    main
    main--default
    tw-flex
    tw-flex-col
    md:tw-items-center
    tw-min-h-screen
    tw-bg-gray-50
  ">
    <div class="
      md:tw-min-w-[30rem]
      tw-m-8
      tw-border
      tw-shadow
      tw-rounded-lg
      tw-overflow-hidden
    ">
      <div class="
        tw-flex
        tw-justify-between
        tw-items-center
        tw-p-6
        tw-bg-gray-100
      ">
        <div class="
          tw-font-[500]
          tw-text-lg
        ">
          My awesome Animals List
        </div>

        <w-button
          icon="plus"
          @click="addPanel = true"
        >
          Add
        </w-button>
      </div>

      <div class="
        tw-flex
        tw-flex-col
      ">
        <div
          v-for="animal in animalStore.items"
          :key="animal._id"
          class="
            tw-p-6
            tw-bg-white
            tw-flex
            tw-items-center
          "

          style="outline: 1px solid #ddd;"
        >
          <div class="tw-mr-auto">
            <div class="tw-font-bold">{{ animal.name }}</div>
            <div class="tw-opacity-60">{{ animal.specie }}</div>
          </div>

          <w-switch
            v-model="animal.is_docile"
            @change="animalStore.$functions.insert({
              what: {
                _id: animal._id,
                is_docile: !animal.is_docile
              }
            })"
          ></w-switch>

          <w-icon
            v-clickable
            reactive
            icon="edit"
            @click="animalStore.$actions.setItem(animal); addPanel = true"
          ></w-icon>

          <w-icon
            v-clickable
            reactive
            icon="trash"
            @click="animalStore.$actions.remove(animal._id)"
          ></w-icon>
        </div>
      </div>
    </div>

    <w-box
      fixed-right
      close-hint
      title="Pretty straightforward, huh?"
      v-model="addPanel"
      @overlay-click="addPanel = false"
    >
      <w-form
        collection="animal"
        v-model="animalStore.item"
        :form="animalStore.properties"
      ></w-form>

      <template #footer>
        <w-button
          :disabled="!animalStore.isInsertReady"
          :loading="animalStore.loading.insert"
          @click="insertAnimal"
        >
          Inserir
        </w-button>
      </template>

    </w-box>
  </div>
</template>
