<template>
  <div class="
    tw-flex
    tw-flex-col
    tw-gap-8
    tw-items-center
    tw-py-8
    tw-bg-sky-50
  ">
    <div>
      <div class="
        tw-text-xl
        tw-mb-1
      ">
        Animals for adoption
      </div>
      <w-icon
        v-clickable
        small
        icon="user-circle"
        @click="$router.push('/user/signin')"
      >
        Signin
      </w-icon>
    </div>

    <div class="
      tw-flex
      tw-flex-col
      tw-gap-4
      tw-items-center
    ">
      <router-view></router-view>
    </div>
  </div>
</template>
