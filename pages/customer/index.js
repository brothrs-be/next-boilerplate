import Card from "../../components/customer/Card";
import Layout from "../../layout"

export default function Customer({ customers }) {

    console.log(customers);

    return (
        <Layout>
            {customers.map((customer) => (
                <Card customer={customer} />
            ))}
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer`);
    const {data} = await res.json();

    /** If there is no data, return empty array so page will still be rendered */
    if(!data.length) {
        return {
            props: {
                customers: []
            }
        }
    }

    /** If there is data, return the data */
    return {
        props: {
            customers: data,
        }
    }
}