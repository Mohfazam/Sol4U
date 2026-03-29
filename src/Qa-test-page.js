// qa-test-page.js
// This file is intentionally broken for QA testing

// CRITICAL: Hardcoded credentials
const DB_PASSWORD = "admin123";
const API_SECRET = "sk-prod-9x8y7z6w5v4u3t2s1r0q";
const AWS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// CRITICAL: SQL Injection vulnerability
function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// CRITICAL: XSS vulnerability
function renderUserInput(input) {
  document.innerHTML = input;
}

// CRITICAL: Eval usage
function runCode(userInput) {
  eval(userInput);
}

// HIGH: No error handling
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return data;
}

// HIGH: Memory leak — event listener never removed
function addListeners() {
  for (let i = 0; i < 1000; i++) {
    document.addEventListener("click", () => {
      console.log("clicked", i);
    });
  }
}

// HIGH: Blocking the main thread
function blockingOperation() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // intentionally blocking for 5 seconds
  }
}

// HIGH: Sensitive data in console
function login(username, password) {
  console.log("Login attempt:", { username, password });
  console.error("Auth failed for user:", username, "with password:", password);
}

// HIGH: Prototype pollution
function merge(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}

// MEDIUM: No input validation
function processAge(age) {
  return age * 2;
}

// MEDIUM: Deprecated API
function oldMethod() {
  document.write("<h1>Hello</h1>");
  escape("hello world");
  unescape("%68ello");
}

// Missing alt tags, broken links, unoptimized assets
export const BadPage = () => {
  return (
    <div>
      <img src="https://picsum.photos/8000/8000" />
      <img src="https://picsum.photos/6000/6000" />
      <img src="/broken-image-that-does-not-exist.png" />
      <a href="/this-route-does-not-exist-404">Broken Link 1</a>
      <a href="/another-missing-page-404">Broken Link 2</a>
      <a href="/yet-another-broken-link-404">Broken Link 3</a>
      <script src="https://cdn.example.com/massive-unused-library-5mb.js"></script>
      <script src="https://cdn.example.com/another-huge-library-3mb.js"></script>
      <iframe src="http://evil.example.com" />
      <input type="password" name="password" autocomplete="off" />
      <form action="http://insecure-endpoint.example.com" method="POST">
        <input type="text" name="creditcard" />
        <input type="submit" />
      </form>
    </div>
  );
};
