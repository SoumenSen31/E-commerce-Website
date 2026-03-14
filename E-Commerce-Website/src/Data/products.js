const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life. Perfect for outdoor parties and travel.",
  },
  {
    id: 10,
    name: "Gaming Mouse Pad",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Large RGB gaming mouse pad with smooth surface for precise tracking. Anti-slip rubber base.",
  },
  {
    id: 11,
    name: "External SSD",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop",
    description:
      "High-speed portable SSD with 1TB storage. Perfect for backups, gaming, and fast file transfers.",
  },
  {
    id: 12,
    name: "Noise Cancelling Earbuds",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description:
      "True wireless earbuds with active noise cancellation and crystal-clear sound quality.",
  },
  {
    id: 13,
    name: "4K Monitor",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    description:
      "Ultra HD 27-inch 4K monitor with vibrant colors and ultra-thin bezels. Ideal for designers and developers.",
  },
  {
    id: 14,
    name: "Laptop Backpack",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?w=500&h=500&fit=crop",
    description:
      "Durable laptop backpack with multiple compartments and USB charging port. Perfect for travel and work.",
  },
  {
    id: 15,
    name: "Smartphone Tripod",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1764162051493-83c9197c0b52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Flexible tripod for smartphones and cameras. Great for vlogging, photography, and video recording.",
  },
  {
    id: 16,
    name: "Desk LED Lamp",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for study and work.",
  },
  {
    id: 17,
    name: "Portable Power Bank",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1687007081879-7c98c5d2487f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "High-capacity portable power bank with fast charging support. Ideal for charging smartphones, tablets, and other devices on the go.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((u) => u.id === Number(id));
}
