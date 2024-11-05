addBatch() {
    if (!this.product || !this.newBatch.id) return;

    this.newBatch.createdAt = new Date();

    this.productsService.addBatchToProduct(this.product.id, this.newBatch).subscribe({
        next: () => {
            this.updateProductBatchInfo();
            this.resetNewBatch();
        },
        error: (err) => console.error('Failed to add batch:', err),
        complete: () => console.log('Batch added successfully')
    });
}

// Méthode pour mettre à jour les informations de lot du produit
updateProductBatchInfo() {
    this.product.batchesNumber++;
    this.productBatches.push(this.newBatch);
}

// Méthode pour réinitialiser newBatch avec des valeurs par défaut
resetNewBatch() {
    this.newBatch = {
        id: uuidv4(),
        number: this.product.batchesNumber + 1,
        createdAt: new Date(),
        currentStepNumber: 0,
        steps: [],
    };
}
