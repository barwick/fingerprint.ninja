<p align="center" style="margin-bottom: 20px;">
  <a href="https://fingerprint.ninja"><img src="static/logo.png"/></a>
</p>

A website created to collect device information from clients. This repository is organised as a monolith, with all library, front and back-end code living in the same repository:

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

## Existing libraries

I have also included asynchronous calls to other fingerprinting libraries in the public domain. I aim to test the effectiveness of these libraries and form comparisons relative to both my library
