// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {
    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        // Corrigido: length em vez de lenght
        if(arr && arr.length > 0){ 
            Carousel._sequence = 0;
            Carousel.arr = arr; 
            Carousel._size = arr.length;
            Carousel.AtualizarTela(); // start
            Carousel._interval = setInterval(() => Carousel.Next(), 5000);
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static AtualizarTela(){
        const carouselDiv = document.querySelector("#carousel");
        const carouselTitle = document.querySelector("#carousel-title");
        const atual = Carousel.arr[Carousel._sequence];

        // Corrigido: Uso de crases (``) para interpolação de variáveis
        carouselDiv.innerHTML = `<img src="img/${atual.image}">`;
        
        // Corrigido: Usar a variável carouselTitle em vez de title
        carouselTitle.innerHTML = `<a href="${atual.url}">${atual.title}</a>`;
    }

    static Next(){
        Carousel._sequence++;

        // Corrigido: Carousel.arr (sem o underline) e length escrito corretamente
        if (Carousel._sequence >= Carousel.arr.length){
            Carousel._sequence = 0;
        }

        Carousel.AtualizarTela();
    } // A chave do Next() fecha aqui!

    // Corrigido: Prev() agora é um método independente fora do Next()
    static Prev(){
        Carousel._sequence--;

        // Corrigido: Carousel.arr e length
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel.arr.length - 1;
        }

        Carousel.AtualizarTela();
    }
}