"use client" - converts a server-side component into a client side com

server-side rendering -
client side rendering -
server side vs client side -
generateStaticParams method -

rendering -
data fetching -

server component fucntions

Static vs dynamic site

React Suspense - <Suspense> lets you display a fallback until its children have finished loading.

React Error Boundaries - Error boundaries are React components which catch JavaScript errors anywhere in our app, log those errors, and display a fallback UI. It does not break the whole app component tree and only renders the fallback UI whenever an error occurred in a component. Error boundaries catch errors during rendering in component lifecycle methods, and constructors of the whole tree below them.

code splitting/lazy loading - Lazy loading in React is an optimization technique for websites or web applications. It is also known as on-demand loading because it only loads content visible on users’ screens.React lazy is a new function in react that lets you load react components lazily through code splitting without help from any additional third-party libraries.One approach to code-splitting React components is called route-based code-splitting, which requires applying dynamic import() to lazy load route components.

import OtherComponent from './OtherComponent';
const OtherComponent = React.lazy(() => import('./OtherComponent'));

what is a domain and subdomain - Regular domains are your standard URLs like splashthat.com or splashthat.events.

Subdomains are a unique URL that lives on your purchased domain as an extension in front of your regular domain like support.splashthat.com or blockparty.splashthat.com. Some other uses of subdomains are:

Create different language versions of a website (en.yoursite.com).
Create a mobile version of a website (m.yoursite.com).
Set up a network of unrelated sites. For example, how you can sign up for a WordPress.com account and create your own blog on a subdomain (yourblog.wordpress.com).

cookies - A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time. Cookies are used to tell the server that users have returned to a particular website.

TLS handshake + Responsible for establishing a secure connection between a client and a server. When you visit a website via HTTPS, TLS handshake happens between your browser and the web server, so your browser can communicate with the web server via a secure connection.

IP address - An IP address, or Internet Protocol address, is a series of numbers that identifies any device on a network. Computers use IP addresses to communicate with each other both over the internet as well as on other networks. There are two types of IP addresses: IPv4 and IPv6. IPv4 addresses contain a series of four numbers, ranging from 0 (except the first one) to 255, each separated from the next by a period — such as 5.62.42.77.

The Domain Name System (DNS) makes the modern internet possible. The DNS pairs website names you can easily remember with IP addresses that computers can use. IPv4 addresses are every bit as valid as a website’s alphabetical name. You can type 157.240.22.35 into your web browser, and it’ll take you to Facebook. But who’s going to remember that? Most of us barely remember our own phone numbers.

what is a CDN - A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that you can access internet content from a web-enabled device or browser more quickly through a server near you. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. This allows you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load.

Request-response cycle - Amazon example - When the customer places an order at the frontend, the frontend sends the message with the order to the backend
The backend saves the order to the database and sends back a message to the frontend that the order was created. The message from the frontend to the backend is a request, and the message from the backend to the frontend is a response.
