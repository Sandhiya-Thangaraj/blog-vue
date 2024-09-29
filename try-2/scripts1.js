new Vue({
    el: '#app',
    data() {
        return {
            images: [],
            selectedImage: null,
            showModal: false,
            searchQuery: '',
        };
    },
    computed: {
        filteredImages() {
            const query = this.searchQuery.toLowerCase();
            return this.images.filter(image =>
                image.title.toLowerCase().includes(query)
            );
        },
    },
    methods: {
        handleFileUpload(event) {
            const files = event.target.files;
            Array.from(files).forEach(file => {
                const src = URL.createObjectURL(file);
                this.images.push({
                    id: file.name + file.size, // Unique ID based on file properties
                    src: src,
                    title: file.name,
                });
            });
        },
        openModal(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        deleteImage(id) {
            this.images = this.images.filter(image => image.id !== id);
        },
    },
});
