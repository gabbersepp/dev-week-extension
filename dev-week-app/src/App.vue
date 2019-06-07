<template>
    <div>
        <div id="dev-week-app" ref="mainRef">
            <template v-for="key in Object.keys(calendar)">
                <Day v-bind:talks="calendar[key]" :key="key" v-if="showCalendar"/>
            </template>
        </div>
        <Control :showCalendar="showCalendar" :onChange="onChangeVisibility"/>
    </div>

</template>
<script lang="ts" src="./App.ts"/>
