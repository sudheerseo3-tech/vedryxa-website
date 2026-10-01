# vedryxa.com — website v1

Static site (HTML, CSS, JS). No build step. Hosted on GitHub Pages under the **sudheerseo3-tech** account.

## Before you upload: connect the contact form
1. Go to https://web3forms.com, enter **sudheer@vedryxa.com**, and copy the access key they email you.
2. Open `contact/index.html` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key.
3. (Optional) In the Web3Forms dashboard, turn on the Google Sheets integration to log every lead.

## Publish on GitHub Pages
1. Sign in to GitHub as **sudheerseo3-tech** and create a new **public** repository named `vedryxa-website`.
2. Click **uploading an existing file**, drag in everything inside this folder (not the folder itself), and commit. `index.html` and `CNAME` must be at the top level.
3. Go to **Settings → Pages**. Source: **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Custom domain should show **vedryxa.com** (read from the CNAME file). Save if needed.

## GoDaddy DNS (vedryxa.com → DNS)
- Delete the default "Parked" A record for `@` and turn off domain forwarding.
- Add four A records, Name `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME, Name `www`, Value `sudheerseo3-tech.github.io`
- Keep your MX records (email) untouched.
- When GitHub shows the DNS check as passing, tick **Enforce HTTPS**.

## After it is live
- Submit `https://vedryxa.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Test the contact form once with your own details.

## Structure
```
index.html                       Home
solutions/digital-marketing/     Digital Marketing (incl. AI search visibility)
solutions/ai-automation/         AI and Automation
solutions/websites-sales-systems/ Websites, technology and sales systems
about/  contact/  privacy/  terms/  404.html
assets/css  assets/js  assets/img  assets/fonts (self-hosted Poppins + Inter)
robots.txt (AI crawlers allowed)  sitemap.xml  llms.txt  CNAME  site.webmanifest  favicons
```

## Page metadata
| URL | Meta title (chars) | Meta description (chars) |
|---|---|---|
| / | Vedryxa | Connected Growth Systems: Marketing, AI & Sales (57) | Vedryxa connects digital marketing, websites, AI automation and sales systems so every lead turns into revenue. Serving India, US, UK and Australia. (148) |
| /solutions/digital-marketing/ | Digital Marketing Services: SEO, AI Search & Ads | Vedryxa (58) | SEO, AI search visibility (AEO/GEO), Google Ads, Meta Ads and LinkedIn marketing, connected to your sales follow-up. For India, US, UK and Australia. (149) |
| /solutions/ai-automation/ | AI Automation, AI Agents & Chatbots for Business | Vedryxa (58) | Practical AI for business: chatbots, AI agents, workflow automation and dashboards that save time and follow up on every lead. Remote, worldwide. (145) |
| /solutions/websites-sales-systems/ | Website Development & Sales Systems (CRM) | Vedryxa (51) | Business websites, landing pages and e-commerce, connected to CRM, lead qualification and WhatsApp follow-up so every enquiry becomes a sale. (141) |
| /about/ | About Vedryxa | Founder-Led Growth Systems Company, Hyderabad (61) | Vedryxa connects marketing, technology, AI and sales into one growth system. Founded by Sudheer Pasumarthi, 11+ years in digital growth. Based in Hyderabad. (156) |
| /contact/ | Contact Vedryxa | Request a Strategy Session (44) | Request a strategy session with Vedryxa. Tell us about your business and goals, or message us on WhatsApp. Based in Madhapur, Hyderabad, India. (143) |
| /privacy/ | Privacy Policy | Vedryxa (24) | How Vedryxa collects, uses and protects the personal information you share through vedryxa.com, and how to exercise your privacy rights. (136) |
| /terms/ | Terms of Use | Vedryxa (22) | The terms that apply when you use vedryxa.com, including use of content, services, intellectual property and governing law. (123) |
