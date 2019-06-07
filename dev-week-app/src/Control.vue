<template>
    <div class="dev-week-app-control">
        <div class="dev-week-app-btn" v-on:click="close" v-if="showCalendar">Close</div>
        <div class="dev-week-app-btn" v-on:click="open" v-if="!showCalendar">Open Ugly Designed View</div>
    </div>
</template>

<script lang="ts" src="./Control.ts"/>