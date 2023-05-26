<script setup lang="ts">

// ** Props & Emits
interface Props {
    deadline: string
}

const props = defineProps<Props>()

// ** Data
const currentTime = ref<number>(Date.parse(props.deadline) - Date.parse(new Date().toString()))

// ** Computed
const days = computed(() => Math.floor(currentTime.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((currentTime.value / (1000 * 60 * 60)) % 24))
const seconds = computed(() => Math.floor((currentTime.value / 1000) % 60))
const minutes = computed(() => Math.floor((currentTime.value / 1000 / 60) % 60))

// ** Lifecycle
onMounted(() => setTimeout(countdown, 1000))

// ** Methods
const countdown = () => {
    currentTime.value = Date.parse(props.deadline) - Date.parse(new Date().toString())

    if (currentTime.value > 0) {
        setTimeout(countdown, 1000)
    } else {
        currentTime.value = null
    }
}
</script>

<template>
    <div
        v-if="currentTime"
        w:display="flex"
        w:grid="gap-1"
    >
        <div
            w:bg="blue-600"
            w:text="white center"
            w:display="flex"
            w:flex="col"
            w:p="y-2px x-6px"
            w:border="rounded-md"
            w:w="10"
        >
            <span>{{ days }}</span>
            <span w:text="10px">{{ $t('Date.Day') }}</span>
        </div>

        <div
            w:bg="blue-600"
            w:text="white center"
            w:display="flex"
            w:flex="col"
            w:p="y-2px x-6px"
            w:border="rounded-md"
            w:w="10"
        >
            <span>{{ hours }}</span>
            <span w:text="10px">{{ $t('Date.Hour') }}</span>
        </div>

        <div
            w:bg="blue-600"
            w:text="white center"
            w:display="flex"
            w:flex="col"
            w:p="y-2px x-6px"
            w:border="rounded-md"
            w:w="10"
        >
            <span>{{ minutes }}</span>
            <span w:text="10px">{{ $t('Date.Minute') }}</span>
        </div>

        <div
            w:bg="blue-600"
            w:text="white center"
            w:display="flex"
            w:flex="col"
            w:p="y-2px x-6px"
            w:border="rounded-md"
            w:w="10"
        >
            <span>{{ seconds }}</span>
            <span w:text="10px">{{ $t('Date.Second') }}</span>
        </div>
    </div>
</template>
