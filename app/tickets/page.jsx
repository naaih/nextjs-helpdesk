import TicketList from "./TicketList"

export const metadata = {
    title: 'Helpdesk | Tickets',
    description: 'This is a helpdesk application',
  }

export default function Tickets() {
    return (    
        <main>
            <nav>
                <div>
                <h2>Tickets</h2>
                <p><small>Opened Tickets</small></p>
                </div>
            </nav>

            <TicketList/>
        </main>
    )
}