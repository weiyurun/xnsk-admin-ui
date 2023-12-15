<template>
  <div>
    {{ val }}
    <n-tree-select
      :options="[
        {
          name: '1',
          did: '1',
          children: [
            {
              name: '1-1',
              did: '1-1',
              children: [
                {
                  name: '1-1-1',
                  did: '1-1-1',
                },
              ],
            },
          ],
        },
        {
          name: '2',
          did: '2',
          children: [
            {
              name: '2-1',
              did: '2-1',
              chidren: [],
            },
          ],
        },
      ]"
      v-model:value="val"
      label-field="name"
      key-field="did"
      @update:value="callback"
    />
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { NTreeSelect } from "naive-ui";
const val = ref("");
const callback = function () {
  console.log(123);
};
const options = [
  {
    whateverLabel: "Rubber Soul",
    whateverKey: "Rubber Soul",
    whateverChildren: [
      {
        whateverLabel:
          "Everybody's Got Something to Hide Except Me and My Monkey",
        whateverKey:
          "Everybody's Got Something to Hide Except Me and My Monkey",
      },
      {
        whateverLabel: "Drive My Car",
        whateverKey: "Drive My Car",
        disabled: true,
      },
      {
        whateverLabel: "Norwegian Wood",
        whateverKey: "Norwegian Wood",
      },
      {
        whateverLabel: "You Won't See",
        whateverKey: "You Won't See",
        disabled: true,
      },
      {
        whateverLabel: "Nowhere Man",
        whateverKey: "Nowhere Man",
      },
      {
        whateverLabel: "Think For Yourself",
        whateverKey: "Think For Yourself",
      },
      {
        whateverLabel: "The Word",
        whateverKey: "The Word",
      },
      {
        whateverLabel: "Michelle",
        whateverKey: "Michelle",
        disabled: true,
      },
      {
        whateverLabel: "What goes on",
        whateverKey: "What goes on",
      },
      {
        whateverLabel: "Girl",
        whateverKey: "Girl",
      },
      {
        whateverLabel: "I'm looking through you",
        whateverKey: "I'm looking through you",
      },
      {
        whateverLabel: "In My Life",
        whateverKey: "In My Life",
      },
      {
        whateverLabel: "Wait",
        whateverKey: "Wait",
      },
    ],
  },
  {
    whateverLabel: "Let It Be",
    whateverKey: "Let It Be Album",
    whateverChildren: [
      {
        whateverLabel: "Two Of Us",
        whateverKey: "Two Of Us",
      },
      {
        whateverLabel: "Dig A Pony",
        whateverKey: "Dig A Pony",
      },
      {
        whateverLabel: "Across The Universe",
        whateverKey: "Across The Universe",
      },
      {
        whateverLabel: "I Me Mine",
        whateverKey: "I Me Mine",
      },
      {
        whateverLabel: "Dig It",
        whateverKey: "Dig It",
      },
      {
        whateverLabel: "Let It Be",
        whateverKey: "Let It Be",
      },
      {
        whateverLabel: "Maggie Mae",
        whateverKey: "Maggie Mae",
      },
      {
        whateverLabel: "I've Got A Feeling",
        whateverKey: "I've Got A Feeling",
      },
      {
        whateverLabel: "One After 909",
        whateverKey: "One After 909",
      },
      {
        whateverLabel: "The Long And Winding Road",
        whateverKey: "The Long And Winding Road",
      },
      {
        whateverLabel: "For You Blue",
        whateverKey: "For You Blue",
      },
      {
        whateverLabel: "Get Back",
        whateverKey: "Get Back",
      },
    ],
  },
];
</script>
