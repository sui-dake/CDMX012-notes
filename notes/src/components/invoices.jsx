import { Link, Outlet, useParams } from "react-router-dom";
import { getInvoices, getInvoice } from "../data";

export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div style ={{ display: 'flex'}}>
            <nav
            style ={{
                borderRight: 'solid 1px',
                padding: '1erm',
            }}
            >
                {invoices.map((invoice) => (
                    <Link
                    style={{ display: 'block', margin: '1rem 0'}}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
  }
export function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main style={{ padding: '1rem'}}>
            <h2>Totla Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    )
  }