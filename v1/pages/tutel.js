function tutel(){

    return(
        <div>
            <title>tutel :D</title>
            <link rel="canonical" href="https://tutel.vercel.app" />
            <meta property="og:url" content="https://tutel.vercel.app" />
            <meta property="og:video" content="https://tutel.vercel.app/tutel.mp4" />
            <meta property="og:video:secure_url" content="https://tutel.vercel.app/tutel.mp4" />
            <meta property="og:video:type" content="video/mp4" />
            <meta property="og:type" content="video.other" />
            <meta name="twitter:site" content="@HeySkidee" />
            <meta name="twitter:domain" content="https://tutel.vercel.app" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:image" content="https://tutel.vercel.app/tutel.mp4" />
            <meta name="twitter:player" content="https://tutel.vercel.app/tutel.mp4" />
            <meta name="twitter:player:stream" content="tutel.mp4" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="title" content="tutel :D" />

            <style type="text/css" dangerouslySetInnerHTML={{__html: 
                "\n        * {\n            margin: 0;\n            padding: 0;\n            overflow: hidden;\n        }\n\n        html {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: black;\n            height: 100vh;\n            width: 100vw;\n        }\n\n        video {\n            height: 80vh;\n        }\n    " }} />
            <video width="100%" controls autoPlay>
            <source src="https://tutel.vercel.app/tutel.mp4" type="video/mp4" />
            </video>
</div>
    )

};

export default tutel;