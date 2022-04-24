<script setup lang="ts">
import useCalculator from "./composables/calculator";

const {
  expression,
  result,
  addToExpression,
  evaluateExpression,
  removeLastCharacterFromExpression,
  clearExpression,
} = useCalculator();
</script>
<template>
  <main
    class="w-screen h-screen p-4 sm:bg-slate-100 font-mono sm:grid sm:place-items-center"
  >
    <div
      class="space-y-8 sm:bg-white sm:px-2 sm:py-4 sm:rounded-lg sm:shadow-xl sm:w-80"
    >
      <section class="border-2 rounded-lg border-blue-500 px-2 py-1 space-y-1">
        <p
          data-test="expression"
          class="text-right text-xs font-semibold whitespace-nowrap overflow-x-scroll hide-scrollbar"
        >
          {{ expression }}
        </p>
        <p
          data-test="result"
          class="text-right text-xl text-gray-700 whitespace-nowrap overflow-x-scroll hide-scrollbar"
        >
          {{ result }}
        </p>
      </section>

      <section class="grid grid-cols-4 gap-1.5">
        <button
          @click="clearExpression"
          class="bg-orange-300 hover:bg-orange-400 rounded-md py-1 align-middle text-white"
        >
          C
        </button>
        <button
          @click="addToExpression('/')"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          /
        </button>
        <button
          @click="addToExpression('*')"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          x
        </button>
        <button
          @click="removeLastCharacterFromExpression"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            />
          </svg>
        </button>

        <button
          data-test="button-7"
          @click="addToExpression(7)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          7
        </button>
        <button
          data-test="button-8"
          @click="addToExpression(8)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          8
        </button>
        <button
          data-test="button-9"
          @click="addToExpression(9)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          9
        </button>
        <button
          @click="addToExpression('-')"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          -
        </button>

        <button
          data-test="button-4"
          @click="addToExpression(4)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          4
        </button>
        <button
          data-test="button-5"
          @click="addToExpression(5)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          5
        </button>
        <button
          data-test="button-6"
          @click="addToExpression(6)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          6
        </button>
        <button
          @click="addToExpression('+')"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          +
        </button>

        <button
          data-test="button-1"
          @click="addToExpression(1)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          1
        </button>
        <button
          data-test="button-2"
          @click="addToExpression(2)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          2
        </button>
        <button
          data-test="button-3"
          @click="addToExpression(3)"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          3
        </button>
        <button
          @click="evaluateExpression"
          class="row-span-2 bg-blue-300 hover:bg-blue-400 rounded-md align-middle"
        >
          =
        </button>

        <button
          data-test="button-0"
          @click="addToExpression(0)"
          class="col-span-2 bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          0
        </button>
        <button
          @click="addToExpression('.')"
          class="bg-blue-300 hover:bg-blue-400 rounded-md py-1 align-middle"
        >
          .
        </button>
      </section>
    </div>
  </main>
</template>
