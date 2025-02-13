export default {
    id: "/",
    scope: "/",
    start_url: "/",
    name: "Bryan Rieger",
    short_name: "bryanrieger",
    display: "standalone",
    iconset: [
        { "src": "/assets/icons/manifest/icon.svg", "type": "image/svg+xml", "sizes": "150x150" },
        { "src": "/assets/icons/manifest/icon.maskable.svg", "type": "image/svg+xml", "sizes": "150x150", "purpose": "maskable" },
        { "src": "/assets/icons/manifest/icon@192px.png", "type": "image/png", "sizes": "192x192" },
        { "src": "/assets/icons/manifest/icon@192px.maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
        { "src": "/assets/icons/manifest/icon@512px.png", "type": "image/png", "sizes": "512x512", },
        { "src": "/assets/icons/manifest/icon@512px.maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
    ],
    screenshots: [
        { "src": "/assets/images/manifest/screenshots/landscape.png", "label": "Bryan Rieger", "type": "image/webp", "sizes": "1280x720", "form_factor": "wide" },
        { "src": "/assets/images/manifest/screenshots/portrait.png", "label": "Bryan Rieger", "type": "image/webp", "sizes": "720x1280", "form_factor": "narrow" }
    ]
}