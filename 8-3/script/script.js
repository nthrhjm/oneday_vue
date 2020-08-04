//サムネイルコンポーネントの宣言
const imageThumbnail = Vue.component('image-thumbnail', {
    props: {
        path: {
            type: String,
            default: '',
        },
    },
    //templateプロパティの宣言
    template: `
        <div
            class="img-box"
            :style="{backgroundImage: 'url(' + path + ')'}"
            @click="$emit('clickimage')"
        ></div>`
});

//モーダルコンポーネントの宣言
const modal = Vue.component('modal', {
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ''
        },
    },
    template: `
        <div v-if="isShown" class="modal" @click="$emit('close')">
            <img class="modal-img" :src="imagePath" alt="selectedImage" />
        </div>
        `
});

const app = new Vue({
    el: '#app',
    components: {
        'image-thumbnail': imageThumbnail,//thumbnailコンポーネントを登録
        'modal': modal
    },
    data() {
        return {
            isShown: false,
            selectedImage: '',
            images: [
                {path: './img/img1.jpg',},
                {path: './img/img2.jpg',},
                {path: './img/img3.jpg',},
                {path: './img/img4.jpg',},
                {path: './img/img5.jpg',},
                {path: './img/img6.jpg',},
                {path: './img/img7.jpg',},
                {path: './img/img8.jpg',},
                {path: './img/img9.jpg',},
            ],
        };
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal(){
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        },
    },
});