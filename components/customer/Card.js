export default function Card({ customer }) {
    return (
        <section>
            <h2>{customer.name}</h2>
            <p>STRIPE_ID: {customer.id}</p>
        </section>
    )
}