<template>
    <div>
        <li class="list-group-item" :class="className"><slot></slot></li>
        <small class="badge"  :class="badgeColor">{{user}}</small>
        <small class="badge"  :class="badgeColor">{{ date}}</small>
    </div>

</template>

<script>
    export default {
        props:[
            'color',
            'user',
            'date'
        ],
        computed:{
            className(){
                return 'list-group-item-'+ this.color;
            },
            badgeColor(){
                let name = '';
                name += 'badge-'+ this.color
                if(this.user == 'you')
                {
                    name += ' float-left';
                }else{
                     name += ' float-right';
                }
                return name;
            },
         
        },
        // mounted() {
        //     console.log('Component mounted.')
        // }
    }
</script>