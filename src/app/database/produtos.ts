export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionPrice: string;
    image: string;
}

export const products = [
    { id: 1, description: "Mouse Gamer", price: 439.00, descriptionPrice: "CASH", image: "/assets/mouse-3.jpg" },
    { id: 2, description: "Monitor Power FPS", price: 1200.50, descriptionPrice: "CASH", discount: 2000.00, image: "/assets/monitor-1.jpg" },
    { id: 3, description: "Keyboard Great", price: 749.99, descriptionPrice: "CASH", image: "/assets/teclado-1.jpg" },
    { id: 4, description: "Headphone Pro Player FPS", price: 599.99, descriptionPrice: "CASH", image: "/assets/fone-de-ouvido-2.jpg" },
    { id: 5, description: "Headphone", price: 299.99, descriptionPrice: "CASH", image: "/assets/fone-de-ouvido-1.jpg" },
    { id: 6, description: "Headphone For Music", price: 399.99, descriptionPrice: "CASH", image: "/assets/fone-de-ouvido-3.jpg" },
    { id: 7, description: "HD 1TB", price: 499.99, descriptionPrice: "CASH", image: "/assets/hd.jpg" },
    { id: 8, description: "Combo Video Card", price: 18449.99, descriptionPrice: "CASH", image: "/assets/placa-video.jpg" },
    { id: 9, description: "Processor Ryzen", price: 1000, descriptionPrice: "CASH", image: "/assets/processador.jpg" },
    { id: 10, description: "Notebook Good", price: 2500, descriptionPrice: "CASH", image: "/assets/laptop-1.jpg" },
    { id: 11, description: "Notebook Great", price: 4500, descriptionPrice: "CASH", image: "/assets/laptop-2.jpg" },
    { id: 12, description: "Mouse Cheap", price: 20, descriptionPrice: "CASH", image: "/assets/mouse-1.png" },
    { id: 13, description: "Mouse Great", price: 200, descriptionPrice: "CASH", image: "/assets/mouse-2.jpg" },
    { id: 14, description: "Mouse Small", price: 50, descriptionPrice: "CASH", image: "/assets/mouse-4.jpg" },
    { id: 15, description: "Keyboard Good", price: 159.99, descriptionPrice: "CASH", image: "/assets/teclado-2.jpg" },
]