<template>
    <div class="dev-week-app-day" v-if="talks && talks.length > 0">
        <div>{{talks[0].date}}</div>
        <div class="dev-week-app-talks">
            <div v-for="i in modifiedTalks" :key="i.title" :class="`dev-week-app-talk ${i.conflict ? 'talk--conflict' : ''}`">
                <div>{{i.title}}&nbsp;&nbsp;<span title="Remove" class="dev-week-app-remove" v-on:click="remove(i.id)">X</span></div>
                <div>{{i.from[0]}}:{{i.from[1]}} - {{i.to[0]}}:{{i.to[1]}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Day.ts"/>