<script setup lang="ts">

// ** MazUI Imports
import MazDialog from 'maz-ui/components/MazDialog'
import MazInput from 'maz-ui/components/MazInput'

// ** Props & Emits
interface Props {
    modelValue: boolean
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()

// ** Data
const search = ref<string>('')
</script>


<template>
    <MazDialog
        :model-value="modelValue"
        :title="$t('Search.Product')"
        class="capitalize"
        @update:model-value="emits('update:modelValue', false)"
    >
        <div>
            <MazInput v-model="search">
                <template #right-icon>
                    <Icon
                        name="bx:search"
                        size="24"
                    />
                </template>
            </MazInput>
        </div>
    </MazDialog>
</template>
