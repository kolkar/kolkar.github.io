const apiKey = 'your_api_key';
let spinner = document.getElementsByClassName('loading')[0];

function degToCompass(deg) {
    let val = Math.floor((deg / 22.5) + 0.5);
    const cardinal = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return cardinal.filter((item, i) => i === val).join();
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
        let widget = document.createElement('div');
        widget.innerHTML = `
                    <div class="widget" id="widget" style="background: #31495d;width: 350px;min-height: 200px;color: #fff;padding: 15px;font-family: 'Montserrat', sans-serif;">
                        <div class="item__title">
                            <h2 style="font-size: 2em;margin: 0;">` + data.name + `</h2>
                        </div>
                        <div class="item__content" style="display: flex;justify-content: space-between;">
                            <div class="item__left" style="max-width: 49%;width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
                                <h3 style="font-size: 38px; font-weight: 100">` + (+data.main.temp - 273).toFixed(0) + ` ℃</h3>
                                <p>` + degToCompass(data.wind.deg) + ` ` + (data.wind.speed * 3.6).toFixed(2) + ` km/h</p>
                             </div>
                            <div class="item__right" style="max-width: 49%;width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
                                 <svg style="height: 60%; width: 60%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                    <g><g><g id="Sunny"><g><path style="fill: #fff"  d="M500.8,217.2c-156.3,0-283.5,126.9-283.5,283c0,156,127.2,283,283.5,283c156.4,0,283.5-127,283.5-283C784.3,344.1,657.2,217.2,500.8,217.2z M500.8,736.1c-130.4,0-236.4-105.9-236.4-235.9c0-130.1,106-235.9,236.4-235.9c130.4,0,236.4,105.8,236.4,235.9C737.3,630.3,631.2,736.1,500.8,736.1z M116.2,476.7H34.4c-6.7,0-12.7,2.8-17,7.3c-4.6,4.3-7.4,10.3-7.4,17c0,13,10.5,23.5,23.6,23.5h81.8c6.6,0,12.6-2.8,16.9-7.2c4.6-4.3,7.5-10.4,7.5-17.1C139.8,487.2,129.2,476.7,116.2,476.7z M789.5,755c-9.2-9.2-24.1-9.2-33.3,0c-0.2,0.2-0.3,0.4-0.4,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-9.2,9.2-9.2,24.1,0,33.2l64.4,64.2c4.6,4.6,10.6,6.9,16.6,6.9c6,0,12.1-2.3,16.7-6.9c0.2-0.2,0.3-0.4,0.4-0.5c0.1-0.1,0.2-0.2,0.3-0.3c9.2-9.2,9.2-24.1,0-33.2L789.5,755z M825.2,144.4c-1.7,1-3.3,2.1-4.7,3.5l-64.4,64.3c-9.2,9.2-9.2,24.1,0,33.2c4.6,4.6,10.6,6.9,16.7,6.9c0,0,0,0,0,0c0,0,0,0,0,0c6,0,12-2.3,16.6-6.9l64.4-64.3c9.2-9.2,9.2-24.1,0-33.2C846.1,140.1,834.3,139,825.2,144.4z M228.9,748.1c-6,0-12.1,2.3-16.7,6.9l-64.4,64.3c-9.2,9.2-9.2,24,0,33.2c4.6,4.6,10.6,6.9,16.7,6.9c0,0,0,0,0,0c0,0,0,0,0,0c6,0,12-2.3,16.6-6.9l64.4-64.2c9.2-9.2,9.2-24.1,0-33.3C240.9,750.4,234.9,748.1,228.9,748.1z M211.4,246.2c4.6,4.6,10.6,6.9,16.7,6.9c6,0,12-2.3,16.7-6.9c0.1-0.1,0.2-0.2,0.3-0.4c0.2-0.2,0.3-0.2,0.5-0.4c9.2-9.2,9.2-24.1,0-33.2l-64.4-64.3c-9.2-9.2-24.1-9.2-33.3,0c-0.1,0.1-0.2,0.2-0.3,0.4c-0.2,0.1-0.3,0.2-0.5,0.4c-9.2,9.2-9.2,24.1,0,33.3L211.4,246.2z M500,861.3c-13,0-23.5,10.5-23.5,23.5l0,81.7c0,13,10.6,23.5,23.6,23.5c13,0,23.5-10.5,23.5-23.5l0-81.7C523.6,871.8,513,861.3,500,861.3z M500,140.6c10.1,0,18.7-6.4,22-15.3c1.5-3.1,2.4-6.5,2.4-10.1V33.5c0-13-10.5-23.5-23.6-23.5c-10.1,0-18.7,6.4-22,15.3c-1.5,3.1-2.4,6.5-2.4,10.1v81.7C476.5,130.1,487,140.6,500,140.6z M966.5,477.5l-81.9,0c-13,0-23.5,10.5-23.5,23.5c0,13,10.5,23.5,23.5,23.5h81.9c13,0,23.5-10.5,23.5-23.5C990,488,979.5,477.5,966.5,477.5z"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g>
                                 </svg>
                                <p>` + data.weather[0].main + `</p>
                            </div>
                        </div>
                    </div>
                `;
        document.querySelector('body').appendChild(widget);
        draw(document, widget);
        document.getElementById('canvas').style.display = 'block';
        spinner.style.display = 'none';
    });

function draw(d, widget) {
    const width = 380;
    const height = 280;
    const fontSize = 16;
    const canvas = d.getElementById("canvas");
    const dom = widget;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";

    const data =
        "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "px' height='" + height + "px'>" +
        "<foreignObject width='100%' height='100%'>" +
        "<div xmlns='http://www.w3.org/1999/xhtml' style='font: " + fontSize + "px sans-serif; color: #fff;padding: 15px;'>" +
        dom.innerHTML +
        "</div>" +
        "</foreignObject>" +
        "</svg>";
    const DOMURL = self.URL || self.webkitURL || self;
    let img = new Image();
    let svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
    const url = DOMURL.createObjectURL(svg);
    img.addEventListener("load", function () {
        DOMURL.revokeObjectURL(url);
        ctx.drawImage(img, 0, 0);
        dom.remove();
    }, false);
    img.src = url;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
}