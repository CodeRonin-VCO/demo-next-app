type PriceStyleProps = {
    value: number;
    vat?: number;
}

export default function PriceStyle({value, vat = 0}:PriceStyleProps) {
    const priceVat = value + (value * vat / 100);

    const priceFormated = priceVat.toLocaleString("fr-be", {
        style: "currency", 
        currency: "EUR"
    });
    return (
        <span>{priceFormated}</span>
    )
}