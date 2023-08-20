// This is a function named "Faq". Like before, it's defined using the "export default" syntax,
// which means it can be imported and used in other parts of the code !!
function Faq() {

    // The function returns a JSX element, representing the FAQ (Frequently Asked Questions) component !!
    return (
        <div className="faq">

            {/* The heading for the FAQ section. */}
            <h3>Frequently Asked Questions.</h3>

            {/* First question and answer section. */}
            <div className="questions">

                {/* The question is in a bold format. */}
                <p><strong>What are the key benefits to contributing a selection of our images to Unsplash?</strong></p>

                {/* The answer to the question. */}
                <p>By uploading images to Unsplash, you’ll be connected to a new audience of over 70 million people ready to 
                engage with your archive. From University students creating presentations to graphic designers creating websites, 
                your images will be used hundreds of thousands of times over the next 60 days - bringing a new life to your archival images.</p>
            </div>

            {/* Second question and answer section. */}
            <div className="questions">

                {/* The question is in a bold format. */}
                <p><strong>How does the process work?</strong></p>

                {/* The answer to the question. */}
                <p>Obtain a verified account on Unsplash. Upload your photos and include identifying information in the description
                Set up targeted keywords for each upload to expand the image’s reach by distributing the content under similar search terms.
                Receive monthly stats on your image views and downloads, as well as any applicable advice on how to improve your account's performance.</p>
            </div>
        </div>
    )
}

// The "Faq" component is being exported so that it can be used in other parts of the application !!
export default Faq;
