import AudioComponent from "./components/TheAudioComponent.js";
import VideoComponent from "./components/TheVideoComponent.js";
import ImageComponent from "./components/TheImageComponent.js";
import ButtonComponent from "./components/TheButtonComponent.js";

(() => {
    const myVM = new Vue({
        data: {
            activeComponent: VideoComponent
        },

        methods: {
            // switchComponents() {
            //     //debugger;

            //     this.activeComponent = (this.activeComponent.name == "VideoComponent") ? AudioComponent : VideoComponent;
            // },

            setComponent(component) {
                //debugger;
                this.activeComponent = `${component}Component`;
            }
        },

        components: {
            AudioComponent,
            VideoComponent,
            ImageComponent,
            "buttoncomponent" : ButtonComponent
        }
    }).$mount("#app");
})();