import './Home.css';
export default function Home() {
    return (
        <>
             <h1 className="listing-heading">Patient Portal</h1>
            <p className="listing">At our organization, we believe that your health is your most valuable asset. That’s why we’ve created a seamless and efficient platform to help you manage your doctor appointments with ease. Whether you’re seeking routine check-ups, specialized consultations, or urgent medical attention, we’ve got you covered.</p>

            <h2 style={{color: "red"}}> Why Choose Us?</h2>
            
                
            <li className="size"> <b>Convenience:</b> Say goodbye to long waiting times and endless phone calls. With DoctorConnect, you can book appointments from the comfort of your home, office, or anywhere with an internet connection. </li>

            <li className="size"> <b>Flexibility:</b> We understand that you may not always have access to a doctor. Our platform allows you to schedule appointments with a doctor of your choice, anytime, anywhere. </li>

<li className="size"><b>Personalized Experience:</b> We understand that every patient is unique. Our platform lets you filter doctors based on specialty. Find the right match for your needs.</li>

<li className="size"><b>Quality Support:</b> We provide a 24/7 customer support. Our team is always available to answer any questions you may have. </li>

<li className="size"><b>Trustworthiness:</b> We take the security of your personal information seriously. Our platform is designed to be user-friendly and secure.</li>

<h2> Get started today!</h2>
<p className="size">
Ready to take control of your health? Visit our website to start your journey towards better healthcare. Remember, your health matters. Let's connect you with the right doctor, right now.
</p>


        </>
    );
}