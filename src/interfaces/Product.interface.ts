export default interface IProduct {
    image1: string;
    image2: string;
    image3: string;
    title: string;
    oldPrice?: string;
    price: string;
    count: string;
    totalPrice: string;
    xs: { xs: boolean, quantity: string },
    s: { s: boolean, quantity: string },
    m: { m: boolean, quantity: string },
    l: { l: boolean, quantity: string },
    xl: { xl: boolean, quantity: string },
    xxl: { xxl: boolean, quantity: string }
    description?: {
        title?: string;
        text1?: string;
        subtitle?: string;
        text2?: string;
        size?: string;
    };
    category: string;
    sales?: boolean;
}
