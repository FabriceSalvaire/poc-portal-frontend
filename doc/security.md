# Security

**Topics**

* Cross site scripting (XSS) protection
* Cross site request forgery (CSRF) protection
* SQL injection protection
* Clickjacking protection
* SSL/HTTPS
* Host header validation
* Referrer policy
* Session security
* User-uploaded content

***References**

* [@Django](https://docs.djangoproject.com/en/3.1/topics/security)

## Cross-site scripting / XSS Attack

For example, inject some codes in the backend database:

```
Browser -- HTML --> Database --> Backend -- Escaped HTML in Template --> Browser
```

* [XSS @Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)
* [XSS @Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)

## Content Security Policy (CSP)

* [CSP @openweb](https://openweb.eu.org/articles/content-security-policy)
* [CSP @Mozilla](https://developer.mozilla.org/fr/docs/Web/HTTP/CSP)
* [CSP: style-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)
* [CSP @JSS](https://cssinjs.org/csp?v=v10.4.0#setting-up-content-security-policy-with-jss)
* [CPS @Material UI](https://material-ui.com/styles/advanced/#content-security-policy-csp)

Examples:

```
Content-Security-Policy: default-src 'self'; style-src 'nonce-2726c7f26c'

<style nonce="2726c7f26c">
    #inline-style { background: red; }
</style>
```

```
<head>
    <meta property="csp-nonce" content="{{ styleNonce }}">
</head>
```

## Cross Site Request Forgery (CSRF) Protection

CSRF attacks allow a malicious user to execute actions using the credentials of another user without
that user’s knowledge or consent.

CSRF protection works by checking for a secret in each POST request.

## SQL Injection Protection

SQL injection is a type of attack where a malicious user is able to execute arbitrary SQL code on a database.

SQL injection protection works by using prepared queries instead of raw SQL queries.

## Clickjacking Protection

Clickjacking is a type of attack where a malicious site wraps another site in a frame. This attack
can result in an unsuspecting user being tricked into performing unintended actions on the target
site.
