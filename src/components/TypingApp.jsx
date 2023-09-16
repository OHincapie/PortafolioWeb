import Typewriter from "typewriter-effect";

export const TypingApp = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Software Engineer at IDEMIA",
                    "Freelancer",
                    "I love code <3"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}
