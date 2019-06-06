<template>
    <div id="dev-week-app" ref="mainRef">
        <div v-for="key in Object.keys(calendar)" :key="key">
            <Day v-bind:talks="calendar[key]"/>
        </div>
    </div>
</template>
<script lang="ts" src="./App.ts"/>
