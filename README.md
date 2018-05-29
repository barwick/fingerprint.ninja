<p align="center" style="margin-bottom: 20px;">
  <a href="https://fingerprint.ninja"><img src="static/logo.png"/></a>
</p>

A [website](https://fingerprint.ninja) created to collect device information from clients. This repository is organised as a monolith, with all library, front and back-end code living in the same repository:

```
api/ - Serverless configuration files and AWS Lambda code
app/ - Front end i.e. render code for public site
lib/ - A library of javascript probes used to scrape data from clients
lib/vendor - Vendor scripts used in probes. Includes third party fingerprinting libraries
```

# About

I'm looking at [device fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint) for my masters project as part of my fourth year at Imperial College London studying Computing. I've written a library of probes based on as many common/recent [fingerprinting techniques](#Probes) as possible. Through collecting browser metrics from many clients, I aim to work towards an 'ideal' fingerprint and additionally measure the success of existing libraries.

I aim to provide an entropy (i.e. a measure of uniqueness) for each browser metric I probe.

# <a name="Probes"></a>Probes

Here is the current list of metrics I probe:

* `TODO: Double check fixed` Adblock detection
* `TODO` Audio and Video codec detection
* `TODO` AudioContext
* ClientInformation
* Cookies
  * Enabled?
  * `TODO` Supercookies
* CPU Information
  * Logical cores
  * `TODO` Math constants
* DevicePixelRatio
* DoNotTrack
* `TODO` [Device memory](https://w3c.github.io/device-memory/)
* Fonts
  * Classic font detection (via [font-detect](http://www.lalit.org/lab/javascript-css-font-detect/) by Lalit Patel - included in `vendor/`) from pre-defined font list.
  * `TODO` Unicode glyph measurements
* `TODO` Hardware detection
  * Accelerometer
  * Camera
  * Microphone
  * Multi-monitor
  * Touchscreen + WebAPI metrics
* HTML Canvas - 2D
  * `TODO` Anti-aliasing
  * `TODO` Curve
  * `TODO` Line
  * Text render
  * `TODO` Transparency (Alpha channel)
* Navigator
  * browserCodeName
  * browserLanguage
  * browserName
  * browserOnline
  * browserVersion
  * cpuClass
  * hardwareConcurrency
  * platform
  * userAgent
* `TODO` Plugins
  * Internet Explorer specific
  * Non-IE
* Screen
  * Colour depth
  * Various dimension measurements
* Timezone
* `TODO` [Modernizr](https://github.com/Modernizr/Modernizr) feature detection
* `TODO` WebGL - 3D
  * Clipping planes
  * Fragment shaders
  * Lighting and Shadow mapping
  * Pre-defined model renders
  * Vertex shaders
* `TODO` WebRTC
* WebStorage
  * `TODO: open()` IndexedDB
  * LocalStorage
  * SessionStorage
* `TODO` Writing script detection (i.e. OS level installed languages)

## Third party libraries

I have also included asynchronous calls to other fingerprinting libraries found in the public domain. I aim to test the effectiveness of these libraries and form comparisons relative to both my library and relative to other libraries:

* [fingerprintjs2](https://github.com/Valve/fingerprintjs2) - Valve (MIT)
* [clientjs](https://github.com/jackspirou/clientjs) - jackspirou (Apache)
