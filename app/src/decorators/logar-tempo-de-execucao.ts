export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function() {
            const t1 = performance.now();
            /// chamar métodos original
            const t1 = performance.now();
        };

        return descriptor;
    }

}