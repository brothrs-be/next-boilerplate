import Card from "../../components/customer/Card";
import Layout from "../../layout"

export default function Customer({ customer }) {

    return (
        <Layout>
            <Card customer={customer} />
        </Layout>
    )
}

export async function getServerSideProps({ params }) {

    const {id} = params;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer/${id}`);
        const data = await res.json();
        
        /** If there is data, return the data */
        return {
            props: {
                customer: data,
            }
        }
    } catch (error) {
        /** If there is a fetch error, show not found page */
        return {
            notFound: true,
        }
    }
}