import AudioComponent from "./components/TheAudioComponent.js";
import VideoComponent from "./components/TheVideoComponent.js";

(() => {
    const myVM = new Vue({
        data: {
            activeComponent: VideoComponent
        },

        methods: {
            switchComponents() {
                //debugger;

                this.activeComponent = (this.activeComponent.name == "VideoComponent") ? AudioComponent : VideoComponent;
            }
        }
    }).$mount("#app");
})();