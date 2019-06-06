<template>
    <div class="day">
        <div>{{talks[0].date}}</div>
        <div>
            <div v-for="i in talks" :key="i.title" :class="`talk ${i.conflict ? 'talk--conflict' : ''}`">
                <div>{{i.title}}</div>
                <div>{{i.from[0]}}:{{i.from[1]}} - {{i.to[0]}}:{{i.to[1]}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Day.ts"/>