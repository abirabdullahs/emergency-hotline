# emergency-hotline

01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: 
 getElementById:
এটা দিয়ে শুধু একটা element ধরা যায় যেটার id আছে। যেহেতু একটা পেজে একই id একটাই থাকে, তাই এটা সবসময় একটা element-ই return করে।

 getElementsByClassName:
এটা দিয়ে একই class নামের যতগুলো element আছে সবগুলোকে ধরা যায়। এগুলোকে list (HTMLCollection) আকারে দেয়। মানে একাধিক element return করবে।

 querySelector:
এখানে CSS selector এর মতো ব্যবহার করা যায়। যেমন #idName, .className, div p ইত্যাদি। কিন্তু এটা প্রথম যেটা match পাবে শুধু সেটাই return করে।

 querySelectorAll:
এটাও CSS selector দিয়ে কাজ করে, তবে সবগুলো matching element return করে NodeList আকারে। মানে getElementsByClassName এর মতো, কিন্তু বেশি flexible কারণ CSS selector use করা যায়।


02. How do you create and insert a new element into the DOM?

ans:
DOM-এ নতুন element তৈরি করার জন্য প্রথমে ```document.createElement("tagName")``` দিয়ে একটা নতুন element বানানো হয়। উদাহরণস্বরূপ, ```<div>``` বা ```<p>``` তৈরি করা যায়। এরপর আমরা চাইলে সেই element-এর মধ্যে textContent বা innerHTML দিয়ে কোনো লেখা বা HTML content যোগ করতে পারি। একইভাবে id বা className ব্যবহার করে element-এর জন্য identification বা styling দেওয়া যায়। একবার element তৈরি হয়ে গেলে, আমরা সেটাকে DOM-এ insert করতে পারি ```appendChild()``` দিয়ে কোনো parent element-এর শেষে বা ```insertBefore()``` দিয়ে কোনো নির্দিষ্ট element-এর আগে। এইভাবে নতুন element dynamically ওয়েবপেজে যুক্ত করা যায় এবং page-এর structure পরিবর্তন করা যায়।

03. What is Event Bubbling and how does it work?

ans:
Event Bubbling হলো JavaScript-এর একটা event propagation পদ্ধতি। যখন কোনো child element-এর উপর event ঘটে, যেমন click বা mouseover, তখন সেই event প্রথমে child element-এ trigger হয়। এরপর সেই event ধীরে ধীরে parent element-এর দিকে চলে যায়, তারপর grandparent-এর দিকে, এবং শেষ পর্যন্ত document পর্যন্ত পৌঁছায়। অর্থাৎ, event নিচ থেকে উপরের দিকে “bubble” করে।

উদাহরণস্বরূপ, একটি ```<button>``` element একটি ```<div>```-এর ভিতরে আছে। button-এ click করলে, প্রথমে button-এর click event trigger হবে। তারপর সেই event parent div-এর উপর trigger হবে, এবং তারপর div-এর parent element-এর ওপর trigger হবে।

04. What is Event Delegation in JavaScript? Why is it useful?

ans:
Event Delegation হলো এমন একটি টেকনিক যেখানে **প্রতিটি child element-এ আলাদা আলাদা event listener না দিয়ে**  
একটা **parent element-এ মাত্র একবার event listener** বসানো হয়।  

কারণ **event bubbling** এর মাধ্যমে child element-এ হওয়া event উপরের parent element পর্যন্ত উঠে আসে।  
তাহলে parent সেই event ধরতে পারে এবং handle করতে পারে।
##  উদাহরণ

 প্রতিটি ```<li>``` তে আলাদা আলাদা listener না দিয়ে 
শুধু parent ```<ul>``` এ listener বসানো হলো

`document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("click", e.target.innerText);
  }
});`

05. What is the difference between preventDefault() and stopPropagation() methods?

ans:
```preventDefault()```
এটা ব্যবহার করা হয় যখন কোনো element-এর ডিফল্ট কাজ বন্ধ করতে চাই।
যেমন – লিঙ্কে ক্লিক করলে স্বাভাবিকভাবে নতুন পেজ ওপেন হয়, বা ফর্ম সাবমিট করলে পেজ রিফ্রেশ হয়।
যদি আমরা ```preventDefault()``` ব্যবহার করি, তাহলে ওই কাজ আর হবে না।

```stopPropagation()```
এটা ব্যবহার করা হয় যখন কোনো event-কে উপরে bubble হয়ে parent element পর্যন্ত যাওয়া বন্ধ করতে চাই।
মানে child element-এ event ঘটলেও সেটা আর parent element পর্যন্ত যাবে না।

