import _Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import _Principal "mo:base/Principal";
import Text "mo:base/Text";

actor {
    // Product type
    public type Product = {
        id: Nat;
        name: Text;
        price: Nat;
        description: Text;
        inStock: Bool;
    };

    private stable var nextProductId: Nat = 0;
    private var products = HashMap.HashMap<Nat, Product>(0, Nat.equal, Hash.hash);

    // Add a new product
    public shared(_msg) func addProduct(name: Text, price: Nat, description: Text) : async Nat {
        let productId = nextProductId;
        let product: Product = {
            id = productId;
            name = name;
            price = price;
            description = description;
            inStock = true;
        };
        
        products.put(productId, product);
        nextProductId += 1;
        return productId;
    };

    // Get all products
    public query func getAllProducts() : async [Product] {
        let productIter = products.vals();
        return Iter.toArray(productIter);
    };

    // Get product by ID
    public query func getProduct(id: Nat) : async ?Product {
        return products.get(id);
    };

    // Update product stock status
    public shared(_msg) func updateStockStatus(id: Nat, inStock: Bool) : async Bool {
        switch (products.get(id)) {
            case (null) { false };
            case (?product) {
                let updatedProduct: Product = {
                    id = product.id;
                    name = product.name;
                    price = product.price;
                    description = product.description;
                    inStock = inStock;
                };
                products.put(id, updatedProduct);
                true;
            };
        };
    };

    // Delete product
    public shared(_msg) func deleteProduct(id: Nat) : async Bool {
        switch (products.remove(id)) {
            case (null) { false };
            case (?_product) { true };
        }
    };

    // Edit Product
    public shared(_msg) func updateProduct(id: Nat, name: Text, price: Nat, description: Text, inStock: Bool) : async Bool {
        switch (products.get(id)) {
            case (null) { false };
            case (?product) {
                let updatedProduct: Product = {
                    id = product.id;
                    name = name;
                    price = price;
                    description = description;
                    inStock = inStock;
                };
                products.put(id, updatedProduct);
                true;
            };
        }
    }
};
