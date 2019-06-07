<template>
    <div>
        <div id="dev-week-app" ref="mainRef" :key="talksLength">
            <template v-for="key in Object.keys(calendar)">
                <Day v-bind:talks="calendar[key]" :key="key" v-if="showCalendar" :reInit="init"/>
            </template>
        </div>
        <Control :showCalendar="showCalendar" :onChange="onChangeVisibility"/>
    </div>

</template>
<script lang="ts" src="./App.ts"/>
