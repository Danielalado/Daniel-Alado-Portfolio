import "./About.css"


export const About = () => {
    return(
        <section id="about">
            <div className="about">
                <div className="left-col">
                    <div className="about-me">
                        <img src="#" alt="" />
                        <p>ABOUT ME</p>
                    </div>

                    <h1>Hey, I'm</h1>
                    <h1 className="h1-bottom">Daniel!</h1>
                    <h2>Frontend Developer</h2>
                    <p>Based in Ghana,Volta Region</p>
                    <p className="about-description">
                        Design is where I started (graphic design), so I don't just “make websites” — I work in React, JavaScript, and Vanilla Css to ship fast, responsive sites with performance and UX baked in. Everything is intentional: it should look right, feel smooth, and communicate the brand clearly.
                    </p>
                    <p className="more-about-description">
                        // If you want a site that converts and doesn't crumble the second you need updates, that's my lane.
                    </p>

                    <div className="my-works">

                    </div>

                </div>


                <div className="right-col"></div>
            </div>
        </section>
    )
}