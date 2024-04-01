import React, { useState } from 'react'
import "./Page.css"

const Page = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const generateShortUrl = async () => {
        const response = await fetch("http://localhost:5000/url/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();
        console.log(data);
        setShortUrl(data.id);
    };

    return (
        <div className="container">
            <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter URL to shorten"
            />
            <button onClick={generateShortUrl}>Shorten URL</button>
            {shortUrl && (
                <p>
                    Your shortened URL: <a  className='url' href={`http://localhost:5000/${shortUrl}`}>http://localhost:5000/{shortUrl}</a>
                </p>
            )}
        </div>
    );
}

export default Page;
