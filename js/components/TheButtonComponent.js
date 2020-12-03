export default {
    name: "ButtonComponent",

    template: `
        <div class="button-wrapper">
            <button @click="loadMediaComponent" data-mediatype="Audio">Audio</button>
            <button @click="loadMediaComponent" data-mediatype="Video">Video</button>
            <button @click="loadMediaComponent" data-mediatype="Image">Image</button>        
        </div>
    `,

    methods: {
        loadMediaComponent(event){
            //debugger;
            this.$emit("setmediatype", event.target.dataset.mediatype);
        }
    }
}