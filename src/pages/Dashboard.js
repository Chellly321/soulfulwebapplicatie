import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Heading from "../common/Heading";
import Testimonial from "../componenten/home/Testimonial";
import Studenten from "../componenten/dashboard/Studenten";
import Balance from "../componenten/dashboard/Balance";

function Dashboard() {
    return (
        <section className="dashboard-section">
            <Navbar navBg="#F6E9DC" />
            <Heading headingTitle="Dashboard" headingTopMargin={true} />
            <Testimonial testimonialBg="#F4E1CE" />
            <Studenten />
            <Balance />
            <Footer />
        </section>
    );
}

export default Dashboard;