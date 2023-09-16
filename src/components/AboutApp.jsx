import { Container } from "react-bootstrap"

export const AboutApp = () => {
    const llaves = ['{', '}', '[', ']'];
    return (
        <Container fluid className="bg-black pt-4 text-light pb-5">
            <h1 className="fw-bold mb-5 text-center">
                About me
            </h1>
            <p className="menor">I&apos;m a Full-Stack Developer and lover of learning. I consider myself a proactive and very responsible person, never wanting to stop learning, and always looking for new interesting concepts and skills.

                I have experience developing applications with Python, Flask, JAVA, Spring boot, JavaScript, Angular, React, Ionic Framework, Clean code, Clean architecture, MongoDB, MySQL, Oracle, Docker.</p>
            <div className="codigo mayor">
                <p>
                    1. &nbsp;&nbsp;&nbsp;<span className="terminal--blue">Class&nbsp;</span><span
                        className="terminal--green">SobreMi&nbsp;</span><span className="terminal--white">{llaves[0]}</span>
                </p>
                <p>
                    2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal--blue">Constructor&nbsp;</span><span
                        className="terminal--white">()&nbsp;{llaves[0]}</span>
                </p>
                <p>
                    3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                        className="terminal--blue">this</span><span className="terminal--white">.</span><span
                            className="terminal--light-blue">nombre</span><span className="terminal--white">=</span><span
                                className="terminal--orange">&quot;Oscar David Hincapie&quot;</span>
                </p>
                <p>
                    4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                        className="terminal--blue">this</span><span className="terminal--white">.</span><span
                            className="terminal--light-blue">tecnologias</span><span className="terminal--white">=&nbsp;{llaves[2]}</span><span
                                className="terminal--orange">&quot;JavaScript&quot;<span className="terminal--white">,</span>&quot;TypeScript&quot;<span
                                    className="terminal--white">,</span>&quot;Angular&quot;<span className="terminal--white">,</span>&quot;Python&quot;<span
                                        className="terminal--white">,</span>&quot;JAVA&quot;<span className="terminal--white">{llaves[3]}</span></span>
                </p>
                <p>
                    5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                        className="terminal--blue">this</span><span className="terminal--white">.</span><span
                            className="terminal--light-blue">edad</span><span className="terminal--white">=&nbsp;</span><span
                                className="terminal--blue">new&nbsp;</span><span className="terminal--green">Date</span><span
                                    className="terminal--light-blue">()</span><span className="terminal--white">.</span><span
                                        className="terminal--light-blue">getFullYear()</span><span
                                            className="terminal--white">&nbsp;-&nbsp;</span><span className="terminal--green">2002</span>
                </p>
                <p>
                    6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                        className="terminal--blue">this</span><span className="terminal--white">.</span><span
                            className="terminal--light-blue">ubicacion</span><span className="terminal--white">=</span><span
                                className="terminal--orange">&quot;Bogotá, Colombia&quot;</span>
                </p>
                <p>
                    9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal--white">{llaves[1]}</span>
                </p>
                <p>
                    10. &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal--white">{llaves[1]}</span>
                </p>
            </div>
        </Container>
    )
}
